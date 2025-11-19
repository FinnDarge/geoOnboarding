<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import 'ol/ol.css';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import VectorLayer from 'ol/layer/Vector.js';
import OSM from 'ol/source/OSM.js';
import TileWMS from 'ol/source/TileWMS.js';
import VectorSource from 'ol/source/Vector.js';
import GeoJSON from 'ol/format/GeoJSON.js';
import { fromLonLat } from 'ol/proj.js';
import wmsConfigs from '../data/geo/wms_examples.json';
import wfsConfigs from '../data/geo/wfs_examples.json';

const props = defineProps({
  configId: {
    type: String,
    required: true
  }
});

const mapTarget = ref(null);
const featureInfo = ref(null);
const layerVisible = ref(true);
let map;
let dataLayer;

const config = computed(() => wmsConfigs[props.configId] || wfsConfigs[props.configId]);

const initMap = () => {
  if (!mapTarget.value) return;
  map = new Map({
    target: mapTarget.value,
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    view: new View({
      center: fromLonLat(config.value?.center || [10, 51]),
      zoom: config.value?.zoom || 5
    })
  });

  map.on('singleclick', (event) => {
    featureInfo.value = null;
    if (config.value?.type === 'wfs' && dataLayer) {
      map.forEachFeatureAtPixel(event.pixel, (feature) => {
        const props = { ...feature.getProperties() };
        delete props.geometry;
        featureInfo.value = props;
      });
    }
  });

  applyConfig();
};

const applyConfig = async () => {
  if (!config.value || !map) return;
  if (dataLayer) {
    map.removeLayer(dataLayer);
  }
  layerVisible.value = true;
  if (config.value.center) {
    map.getView().animate({
      center: fromLonLat(config.value.center),
      zoom: config.value.zoom || 5,
      duration: 500
    });
  }

  if (config.value.type === 'wms') {
    dataLayer = new TileLayer({
      source: new TileWMS({
        url: config.value.url,
        params: config.value.params,
        crossOrigin: 'anonymous'
      })
    });
    map.addLayer(dataLayer);
  } else if (config.value.type === 'wfs') {
    const vectorSource = new VectorSource();
    dataLayer = new VectorLayer({ source: vectorSource });
    map.addLayer(dataLayer);
    try {
      const response = await fetch(config.value.url);
      const data = await response.json();
      const features = new GeoJSON().readFeatures(data, {
        featureProjection: map.getView().getProjection()
      });
      vectorSource.addFeatures(features);
    } catch (error) {
      console.error('WFS load error', error);
    }
  }
};

const toggleLayer = () => {
  layerVisible.value = !layerVisible.value;
  if (dataLayer) {
    dataLayer.setVisible(layerVisible.value);
  }
};

onMounted(initMap);

watch(
  () => props.configId,
  () => {
    applyConfig();
  }
);

onBeforeUnmount(() => {
  if (map) {
    map.setTarget(undefined);
  }
});
</script>

<template>
  <div v-if="config" class="map-playground">
    <div class="map-playground__info">
      <p class="muted">Experiment with {{ config.title }}</p>
      <button class="ghost-btn" @click="toggleLayer">{{ layerVisible ? 'Hide' : 'Show' }} layer</button>
    </div>
    <div ref="mapTarget" class="map-container"></div>
    <div v-if="featureInfo" class="feature-info">
      <h4>Feature info</h4>
      <pre>{{ JSON.stringify(featureInfo, null, 2) }}</pre>
    </div>
  </div>
  <p v-else class="muted">Configuration not found.</p>
</template>

<style scoped>
.map-container {
  width: 100%;
  height: 400px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-top: 12px;
}

.feature-info {
  margin-top: 16px;
  padding: 16px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.04);
  max-height: 160px;
  overflow: auto;
}

.map-playground__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

pre {
  white-space: pre-wrap;
}
</style>

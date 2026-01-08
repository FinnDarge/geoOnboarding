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
import GML3 from 'ol/format/GML3.js';
import WMSGetFeatureInfo from 'ol/format/WMSGetFeatureInfo.js';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style.js';
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
let selectedFeature = null;

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

  // Make map accessible in DevTools console
  window.map = map;

  map.on('singleclick', (event) => {
    featureInfo.value = null;
    
    // Reset previous selection style
    if (selectedFeature) {
      selectedFeature.setStyle(undefined);
      selectedFeature = null;
    }
    
    if (config.value?.type === 'wfs' && dataLayer) {
      map.forEachFeatureAtPixel(event.pixel, (feature) => {
        // Highlight selected feature
        selectedFeature = feature;
        const highlightStyle = new Style({
          image: new CircleStyle({
            radius: 12,
            fill: new Fill({
              color: 'rgba(255, 140, 0, 0.8)'
            }),
            stroke: new Stroke({
              color: '#1e5945',
              width: 3
            })
          }),
          stroke: new Stroke({
            color: '#1e5945',
            width: 4
          }),
          fill: new Fill({
            color: 'rgba(255, 140, 0, 0.4)'
          })
        });
        feature.setStyle(highlightStyle);
        
        const props = { ...feature.getProperties() };
        delete props.geometry;
        
        // Filter to show only relevant properties
        const relevantKeys = ['NAME', 'NAMEASCII', 'name', 'FEATURECLA', 'TYPE', 'type', 
                              'POP_MAX', 'GN_POP', 'population', 'LATITUDE', 'LONGITUDE', 
                              'lat', 'lon', 'ADM0NAME', 'SOV0NAME', 'country', 'ADM1NAME', 
                              'state', 'TIMEZONE', 'timezone'];
        
        const filteredProps = {};
        for (const [key, value] of Object.entries(props)) {
          if (relevantKeys.includes(key)) {
            // Format key names for better display
            let displayKey = key;
            if (key === 'NAMEASCII') displayKey = 'Name (ASCII)';
            else if (key === 'FEATURECLA') displayKey = 'Type';
            else if (key === 'POP_MAX' || key === 'GN_POP') displayKey = 'Population';
            else if (key === 'ADM0NAME' || key === 'SOV0NAME') displayKey = 'Country';
            else if (key === 'ADM1NAME') displayKey = 'State/Region';
            else if (key === 'TIMEZONE') displayKey = 'Timezone';
            else if (key === 'LATITUDE') displayKey = 'Latitude';
            else if (key === 'LONGITUDE') displayKey = 'Longitude';
            
            filteredProps[displayKey] = value;
          }
        }
        
        featureInfo.value = Object.keys(filteredProps).length > 0 ? filteredProps : props;
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
    
    // Custom style for WFS features
    const wfsStyle = new Style({
      image: new CircleStyle({
        radius: 8,
        fill: new Fill({
          color: 'rgba(255, 140, 0, 0.8)'
        }),
        stroke: new Stroke({
          color: '#ff6600',
          width: 2
        })
      }),
      stroke: new Stroke({
        color: '#ff6600',
        width: 3
      }),
      fill: new Fill({
        color: 'rgba(255, 140, 0, 0.3)'
      })
    });
    
    dataLayer = new VectorLayer({ 
      source: vectorSource,
      style: wfsStyle
    });
    map.addLayer(dataLayer);
    try {
      const response = await fetch(config.value.url);
      const contentType = response.headers.get('content-type');
      let features;
      
      if (contentType && contentType.includes('application/json')) {
        // JSON format (GeoJSON)
        const data = await response.json();
        features = new GeoJSON().readFeatures(data, {
          featureProjection: map.getView().getProjection()
        });
      } else {
        // GML format (XML)
        const text = await response.text();
        const format = new GML3({
          featureNS: 'http://inspire.ec.europa.eu/schemas/cp/4.0',
          featureType: 'CadastralParcel'
        });
        
        features = format.readFeatures(text, {
          dataProjection: 'EPSG:25832',
          featureProjection: map.getView().getProjection()
        });
      }
      
      vectorSource.addFeatures(features);
      
      // Zoom to features if they exist
      if (features.length > 0) {
        const extent = vectorSource.getExtent();
        map.getView().fit(extent, { padding: [50, 50, 50, 50], duration: 500 });
      }
    } catch (error) {
      console.error('WFS load error:', error);
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
    window.map = undefined;
  }
});
</script>

<template>
  <div v-if="config" class="map-playground">
    <div class="map-playground__info">
      <p class="muted">{{ config.description }}</p>
      <button v-if="config.type === 'wms' || config.type === 'wfs'" class="ghost-btn" @click="toggleLayer">{{ layerVisible ? 'Hide' : 'Show' }} layer</button>
    </div>
    <div ref="mapTarget" class="map-container"></div>
    <div v-if="featureInfo" class="feature-info">
      <h4>Feature Properties</h4>
      <div class="feature-properties">
        <div v-for="(value, key) in featureInfo" :key="key" class="property-row">
          <span class="property-key">{{ key }}</span>
          <span class="property-value">{{ value }}</span>
        </div>
      </div>
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
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-height: 240px;
  overflow: auto;
}

.feature-info h4 {
  margin: 0 0 12px 0;
  color: var(--color-text);
  font-size: 14px;
  font-weight: 600;
}

.feature-properties {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.property-row {
  display: grid;
  grid-template-columns: minmax(120px, auto) 1fr;
  gap: 12px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: var(--radius-sm);
}

.property-key {
  color: var(--color-text-muted);
  font-size: 13px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
}

.property-value {
  color: var(--color-text);
  font-size: 13px;
  font-family: 'Courier New', monospace;
  word-break: break-word;
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

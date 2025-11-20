<script setup>
import { ref, computed } from 'vue';
import { transform } from 'ol/proj';
import { register } from 'ol/proj/proj4';
import proj4 from 'proj4';

// Register EPSG:25832 projection
proj4.defs('EPSG:25832', '+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs');
register(proj4);

const projectionSystems = [
  {
    id: 'epsg25832',
    label: 'EPSG:25832 (UTM 32N)',
    description: 'Projected coordinates in meters',
    code: 'EPSG:25832'
  },
  {
    id: 'wgs84-decimal',
    label: 'WGS84 Decimal',
    description: 'Longitude, Latitude in decimal degrees',
    code: 'EPSG:4326'
  },
  {
    id: 'wgs84-latlon',
    label: 'WGS84 Lat/Lon',
    description: 'Latitude, Longitude (traditional order)',
    code: 'EPSG:4326'
  }
];

const exampleLocations = [
  {
    name: 'Hamburg Rathaus (City Hall)',
    epsg25832: [569000, 5935000]
  },
  {
    name: 'Hamburg Airport',
    epsg25832: [568500, 5940500]
  },
  {
    name: 'Hamburg Port',
    epsg25832: [565000, 5931000]
  },
  {
    name: 'Alster Lake',
    epsg25832: [569500, 5936000]
  }
];

const selectedProjection = ref('epsg25832');
const selectedLocation = ref(exampleLocations[0]);

const transformedCoordinates = computed(() => {
  const sourceCoords = selectedLocation.value.epsg25832;
  
  switch (selectedProjection.value) {
    case 'epsg25832':
      return {
        display: `${sourceCoords[0].toFixed(0)}, ${sourceCoords[1].toFixed(0)}`,
        unit: 'm',
        format: 'Easting, Northing'
      };
    
    case 'wgs84-decimal': {
      const wgs84 = transform(sourceCoords, 'EPSG:25832', 'EPSG:4326');
      return {
        display: `${wgs84[0].toFixed(6)}, ${wgs84[1].toFixed(6)}`,
        unit: '°',
        format: 'Longitude, Latitude'
      };
    }
    
    case 'wgs84-latlon': {
      const wgs84 = transform(sourceCoords, 'EPSG:25832', 'EPSG:4326');
      const latDir = wgs84[1] >= 0 ? 'N' : 'S';
      const lonDir = wgs84[0] >= 0 ? 'E' : 'W';
      return {
        display: `${Math.abs(wgs84[1]).toFixed(6)}°${latDir}, ${Math.abs(wgs84[0]).toFixed(6)}°${lonDir}`,
        unit: '',
        format: 'Latitude, Longitude'
      };
    }
    
    default:
      return { display: 'Unknown projection', unit: '', format: '' };
  }
});

const allProjectionValues = computed(() => {
  const sourceCoords = selectedLocation.value.epsg25832;
  const wgs84 = transform(sourceCoords, 'EPSG:25832', 'EPSG:4326');
  
  return {
    epsg25832: `${sourceCoords[0].toFixed(0)}, ${sourceCoords[1].toFixed(0)} m`,
    wgs84Decimal: `${wgs84[0].toFixed(6)}°, ${wgs84[1].toFixed(6)}°`,
    wgs84LatLon: `${Math.abs(wgs84[1]).toFixed(6)}°${wgs84[1] >= 0 ? 'N' : 'S'}, ${Math.abs(wgs84[0]).toFixed(6)}°${wgs84[0] >= 0 ? 'E' : 'W'}`
  };
});

const currentSystem = computed(() => {
  return projectionSystems.find(p => p.id === selectedProjection.value);
});
</script>

<template>
  <div class="coordinate-transformer">
    <h3>Interactive Coordinate Transformer</h3>
    <p class="muted">Select a location and projection system to see how coordinates are represented.</p>
    
    <div class="transformer__controls">
      <div class="control-group">
        <label class="control-label">Location</label>
        <select v-model="selectedLocation" class="transformer__select">
          <option v-for="location in exampleLocations" :key="location.name" :value="location">
            {{ location.name }}
          </option>
        </select>
      </div>
      
      <div class="control-group">
        <label class="control-label">Coordinate System</label>
        <select v-model="selectedProjection" class="transformer__select">
          <option v-for="system in projectionSystems" :key="system.id" :value="system.id">
            {{ system.label }}
          </option>
        </select>
      </div>
    </div>
    
    <div class="transformer__result">
      <div class="result__header">
        <h4>{{ currentSystem?.label }}</h4>
        <span class="result__format">{{ transformedCoordinates.format }}</span>
      </div>
      <div class="result__coordinates">
        {{ transformedCoordinates.display }}
      </div>
      <p class="result__description">{{ currentSystem?.description }}</p>
    </div>
    
    <div class="transformer__all-systems">
      <p class="eyebrow">All coordinate systems for {{ selectedLocation.name }}</p>
      <div class="all-systems__grid">
        <div class="system-card">
          <div class="system-card__label">EPSG:25832</div>
          <div class="system-card__value">{{ allProjectionValues.epsg25832 }}</div>
        </div>
        <div class="system-card">
          <div class="system-card__label">WGS84 Decimal</div>
          <div class="system-card__value">{{ allProjectionValues.wgs84Decimal }}</div>
        </div>
        <div class="system-card">
          <div class="system-card__label">WGS84 Lat/Lon</div>
          <div class="system-card__value">{{ allProjectionValues.wgs84LatLon }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.coordinate-transformer {
  margin-top: 24px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.coordinate-transformer h3 {
  margin: 0 0 8px 0;
  color: var(--color-text);
}

.muted {
  color: var(--color-text-muted);
  margin-bottom: 20px;
}

.transformer__controls {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
}

@media (max-width: 640px) {
  .transformer__controls {
    grid-template-columns: 1fr;
  }
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.control-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
}

.transformer__select {
  padding: 12px 16px;
  border-radius: var(--radius-md);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.transformer__result {
  padding: 20px;
  background: var(--color-accent-soft);
  border-radius: var(--radius-md);
  border: 1px solid rgba(34, 197, 94, 0.3);
  margin-bottom: 24px;
}

.result__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 8px;
}

.result__header h4 {
  margin: 0;
  color: var(--color-accent);
  font-size: 16px;
}

.result__format {
  font-size: 12px;
  color: var(--color-text-muted);
  font-style: italic;
}

.result__coordinates {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-accent);
  margin-bottom: 8px;
  font-family: 'Courier New', monospace;
  word-break: break-all;
}

.result__description {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 14px;
}

.transformer__all-systems {
  margin-top: 24px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 11px;
  color: var(--color-text-muted);
  margin-bottom: 12px;
  display: block;
}

.all-systems__grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.system-card {
  padding: 14px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.system-card__label {
  font-size: 12px;
  font-weight: 600;
  color: var(--color-text-muted);
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.system-card__value {
  font-size: 14px;
  color: var(--color-text);
  font-family: 'Courier New', monospace;
  word-break: break-all;
}
</style>

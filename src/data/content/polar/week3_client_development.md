# Woche 3: Client-Entwicklung

## 🎯 Lernziele

Nach dieser Woche kannst du:
- Den Unterschied zwischen Generic und Specialized Clients erklären
- Einen neuen Client von Grund auf aufsetzen
- Plugins via `addPlugins.ts` konfigurieren und initialisieren
- Map-Konfigurationen (Layer, View, Controls) anpassen
- Plugin-Chaining via Vuex-Paths implementieren
- Client-spezifische Themes und Layouts erstellen

## 📚 Pflichtlektüre

1. **packages/clients/generic/src/polar-client.ts**
   - Client-Entry-Point
   - Vue-App-Setup mit Router und Store
   - Vuetify-Konfiguration

2. **packages/clients/generic/src/addPlugins.ts**
   - Plugin-Array-Definition
   - Plugin-Options übergeben
   - Store-Paths für Plugin-Kommunikation

3. **packages/clients/generic/src/mapConfiguration.ts**
   - OpenLayers-Map-Config (View, Layers, Projection)
   - Initial-Extent und Zoom-Levels
   - Base-Layer-Definition

4. **packages/clients/specialized/** (falls vorhanden, z.B. `clients/stadtplan/`)
   - Spezialisierter Client-Aufbau
   - Custom-Plugins und -Themes
   - Client-spezifische Assets

5. **packages/core/docs/clientGuide.md**
   - Best Practices für Client-Entwicklung
   - Deployment-Strategien
   - Environment-Variables

## 🏗️ Generic vs. Specialized Clients

### Generic Client (Snowbox)

**Zweck**: Entwicklungs- und Demo-Umgebung
- Enthält **alle** verfügbaren Plugins
- Flexible Konfiguration
- Gut für Testing und Prototyping

**Struktur**:
```
packages/clients/generic/
├── src/
│   ├── polar-client.ts       # Entry
│   ├── addPlugins.ts         # Alle Plugins
│   ├── mapConfiguration.ts   # Standard-Map-Config
│   └── index.html
├── public/                   # Assets
└── vite.config.js
```

### Specialized Client (z.B. Stadtplan)

**Zweck**: Produktions-Anwendung mit spezifischem Feature-Set
- Nur benötigte Plugins
- Custom-Branding und Theme
- Optimierter Build (kleinere Bundle-Size)

**Struktur**:
```
packages/clients/stadtplan/
├── src/
│   ├── polar-client.ts
│   ├── addPlugins.ts         # Nur benötigte Plugins
│   ├── mapConfiguration.ts   # Stadt-spezifische Config
│   ├── theme/
│   │   └── stadtplan-theme.ts # Custom Vuetify-Theme
│   └── assets/
│       └── logo-stadtplan.svg
└── vite.config.js            # Client-spezifische Build-Config
```

## 🔌 Plugin-Konfiguration in addPlugins.ts

### Basis-Beispiel

```typescript
import { Zoom } from '@polar/zoom'
import { LayerChooser } from '@polar/layer-chooser'
import { AddressSearch } from '@polar/address-search'

export const plugins = [
  // Plugin ohne Options
  Zoom(),
  
  // Plugin mit Options
  LayerChooser({
    position: 'top-right',
    initiallyOpen: true,
    allowLayerReordering: true
  }),
  
  // Plugin mit Service-Config
  AddressSearch({
    serviceUrl: 'https://api.example.com/geocode',
    minSearchLength: 3,
    debounceTime: 300
  })
]
```

### Advanced: Conditional Plugins

```typescript
export const plugins = [
  Zoom(),
  
  // Nur in Production
  ...(import.meta.env.PROD ? [Analytics()] : []),
  
  // Basierend auf Feature-Flag
  ...(import.meta.env.VITE_ENABLE_3D === 'true' ? [ThreeDView()] : [])
]
```

## 🗺️ Map-Konfiguration

### mapConfiguration.ts

```typescript
import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import { fromLonLat } from 'ol/proj'

export const createMapConfiguration = () => {
  return {
    target: 'map', // DOM-Element-ID
    
    view: new View({
      center: fromLonLat([10.0, 53.5]), // Hamburg
      zoom: 12,
      minZoom: 8,
      maxZoom: 19
    }),
    
    layers: [
      // Base Layer
      new TileLayer({
        source: new OSM(),
        properties: { name: 'OpenStreetMap' }
      })
    ],
    
    controls: [] // Defaults von OpenLayers überschreiben
  }
}
```

### Client-spezifische Layer

```typescript
// Stadtplan-Client mit WMS-Layer
import TileLayer from 'ol/layer/Tile'
import TileWMS from 'ol/source/TileWMS'

const stadtplanLayer = new TileLayer({
  source: new TileWMS({
    url: 'https://stadtplan.example.com/wms',
    params: {
      'LAYERS': 'stadtplan_basiskarte',
      'TILED': true
    },
    serverType: 'geoserver'
  }),
  properties: { name: 'Stadtplan Basiskarte' }
})
```

## 🔗 Plugin-Chaining via Vuex-Paths

**Szenario**: Ein AddressSearch-Plugin soll nach erfolgreicher Suche automatisch zum Ergebnis zoomen.

### AddressSearch Store (vereinfacht)

```typescript
// In @polar/address-search
const store = {
  state: () => ({
    selectedResult: null
  }),
  mutations: {
    SET_RESULT(state, result) {
      state.selectedResult = result
    }
  }
}
```

### Zoom Store horcht auf AddressSearch

```typescript
// In @polar/zoom
const store = {
  actions: {
    // Action wird von außen getriggert
    zoomToCoordinate({ rootGetters }, { lon, lat }) {
      const map = rootGetters['map/getMap']
      map.getView().animate({
        center: fromLonLat([lon, lat]),
        zoom: 16,
        duration: 1000
      })
    }
  }
}
```

### Verknüpfung im Client

```typescript
// In polar-client.ts oder als Plugin-Option
store.watch(
  (state) => state.plugins.addressSearch.selectedResult,
  (newResult) => {
    if (newResult) {
      store.dispatch('plugins/zoom/zoomToCoordinate', {
        lon: newResult.lon,
        lat: newResult.lat
      })
    }
  }
)
```

**Alternative**: Events via Event-Bus (falls im Core implementiert)

## 🛠️ Hands-on: Eigenen Client erstellen

### Task: "Dashboard-Client" aufsetzen

Erstelle einen spezialisierten Client für ein Verwaltungs-Dashboard.

#### Requirements
- **Plugins**: Nur Zoom, LayerChooser, Legend (keine Adresssuche, kein Routing)
- **Map**: Fokus auf Berlin (13.4, 52.5), Zoom 10-18
- **Theme**: Custom Vuetify-Theme mit Blau-Tönen (Primary: #1E3A8A)
- **Logo**: Eigenes Logo in der TopBar

#### Schritte

1. **Client-Ordner erstellen**
   ```bash
   mkdir -p packages/clients/dashboard/src
   cd packages/clients/dashboard
   ```

2. **package.json** (kopiere von `generic/package.json`, passe `name` an)

3. **vite.config.js**
   ```javascript
   import { defineConfig } from 'vite'
   import vue from '@vitejs/plugin-vue'
   
   export default defineConfig({
     plugins: [vue()],
     server: {
       port: 5174
     }
   })
   ```

4. **src/polar-client.ts** (adaptiere von Generic Client)

5. **src/addPlugins.ts**
   ```typescript
   import { Zoom } from '@polar/zoom'
   import { LayerChooser } from '@polar/layer-chooser'
   import { Legend } from '@polar/legend'
   
   export const plugins = [
     Zoom({ position: 'top-left' }),
     LayerChooser({ position: 'top-right' }),
     Legend({ position: 'bottom-right' })
   ]
   ```

6. **src/mapConfiguration.ts**
   ```typescript
   import { fromLonLat } from 'ol/proj'
   // ...
   center: fromLonLat([13.4, 52.5]), // Berlin
   zoom: 11
   ```

7. **src/theme/dashboard-theme.ts**
   ```typescript
   export const dashboardTheme = {
     primary: '#1E3A8A',
     secondary: '#64748B',
     accent: '#3B82F6'
   }
   ```

8. **NPM-Script hinzufügen** (in Root `package.json`)
   ```json
   "scripts": {
     "dashboard": "vite packages/clients/dashboard"
   }
   ```

9. **Testen**: `npm run dashboard` → Browser öffnet auf `localhost:5174`

#### Acceptance Criteria
- ✅ Dashboard-Client startet auf Port 5174
- ✅ Nur 3 Plugins sind sichtbar (Zoom, LayerChooser, Legend)
- ✅ Karte zeigt Berlin als Initial-View
- ✅ Custom-Theme ist aktiv (Buttons sind blau #1E3A8A)
- ✅ Keine Build-Errors

## 📝 Knowledge Check

1. **Warum sollte man Specialized Clients statt nur Generic Client nutzen?**
   - Kleinere Bundle-Size (nur benötigte Plugins)
   - Bessere Performance
   - Client-spezifisches Branding
   - Einfacheres Deployment (weniger Features = weniger Config)

2. **Was ist der Unterschied zwischen `addPlugins.ts` und `mapConfiguration.ts`?**
   - `addPlugins.ts`: Plugin-Konfiguration (welche Features)
   - `mapConfiguration.ts`: OpenLayers-Map-Setup (Layers, View, Projection)

3. **Wie kann ein Plugin auf State eines anderen Plugins zugreifen?**
   - Via `rootGetters['plugins/otherPlugin/someGetter']`
   - Oder via `store.watch()` für reaktive Updates

4. **Was sind die Vor-/Nachteile von Plugin-Chaining via Vuex?**
   - ✅ Vorteile: Zentrale State-Management, Reactive Updates
   - ❌ Nachteile: Tight Coupling (Plugins kennen sich gegenseitig)

5. **Wann sollte man Environment-Variables nutzen?**
   - API-URLs (unterschiedlich für Dev/Prod)
   - Feature-Flags (Features ein-/ausschalten)
   - Secrets (API-Keys, nur in CI/CD)

## 🚀 Bonus-Challenge

Erweitere den Dashboard-Client:

1. **Multi-Tenancy**: Lade Map-Config basierend auf URL-Parameter (`?tenant=berlin`)
2. **Custom Plugin**: Erstelle ein "Dashboard-Widget"-Plugin, das Statistiken anzeigt
3. **Lazy Loading**: Lade Legend-Plugin nur, wenn User auf Button klickt
4. **Theme-Switcher**: Dark/Light-Mode-Toggle in der TopBar
5. **E2E-Test**: Playwright-Test, der Dashboard-Client startet und Zoom testet

---

**Checkpoint**: Du kannst jetzt vollständige POLAR-Clients entwickeln und deployen. Woche 4 fokussiert auf Testing und Qualitätssicherung.

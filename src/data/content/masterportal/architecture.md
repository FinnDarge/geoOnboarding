# Masterportal Architektur verstehen

## Überblick

Das Masterportal Version 3 folgt einer **komponentenbasierten Architektur** auf Basis von **Vue 3** und **Vuex**. Das Verständnis dieser Architektur ist essentiell, um eigene Tools zu entwickeln.

## Architektur-Diagramm

```
┌─────────────────────────────────────────────────────┐
│          Masterportal v3 (Vue 3 + Vuex)             │
├─────────────────────────────────────────────────────┤
│                                                      │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────┐ │
│  │    Core      │  │   Modules    │  │  Addons   │ │
│  │              │  │              │  │           │ │
│  │ - Map        │  │ - Tools      │  │ - Custom  │ │
│  │ - Vuex Store │  │ - Menu       │  │   Logic   │ │
│  │ - i18n       │  │ - Controls   │  │           │ │
│  │ - API Bridge │  │ - SearchBar  │  │           │ │
│  └──────────────┘  └──────────────┘  └───────────┘ │
│                                                      │
│  ┌──────────────────────────────────────────────┐  │
│  │           OpenLayers (Karten-Engine)         │  │
│  └──────────────────────────────────────────────┘  │
│                                                      │
│  ┌──────────────────────────────────────────────┐  │
│  │        Vue 3 + Vuex 4 (Framework)            │  │
│  └──────────────────────────────────────────────┘  │
│                                                      │
└─────────────────────────────────────────────────────┘
```

## Technologie-Stack

**Masterportal v3 basiert auf:**

- **Vue 3** (v3.5.22): JavaScript-Framework mit Composition API
- **Vuex 4** (v4.1.0): State Management
- **OpenLayers**: Karten-Engine
- **Bootstrap 5** (v5.3.8): UI-Components
- **Webpack 4** (v4.47.0): Build-System
- **i18next** (v25.5.2): Internationalisierung
- **Axios** (v1.12.2): HTTP-Client
- **Chart.js** (v4.5.0): Diagramme

## Core-Komponenten

### 1. Map (Karte)

Verwaltet die OpenLayers-Karte zentral:

```javascript
// Über den Vuex Store zugreifen
import {mapGetters} from "vuex";

export default {
    computed: {
        ...mapGetters("Maps", ["getLayerById", "getMap"])
    },
    methods: {
        addLayerToMap() {
            const map = this.getMap("2D");
            map.addLayer(myLayer);
        }
    }
};
```

### 2. Vuex Store

Zentrales State Management mit mehreren Modulen:

```
store/
├── index.js              # Root Store
├── Maps/                 # Karten-Verwaltung
├── Tools/                # Tool-States
│   ├── Draw/
│   ├── Measure/
│   └── MeinTool/
├── Menu/                 # Menü-State
└── Language/             # i18n-State
```

**Typischer Store-Zugriff:**

```javascript
import {mapState, mapGetters, mapActions, mapMutations} from "vuex";

export default {
    computed: {
        ...mapState("Tools/Draw", ["active", "drawType"]),
        ...mapGetters("Tools/Draw", ["isDrawing"])
    },
    methods: {
        ...mapActions("Tools/Draw", ["startDrawing"]),
        ...mapMutations("Tools/Draw", ["setActive"])
    }
};
```

### 3. i18n (Internationalisierung)

Alle Texte werden über i18next verwaltet:

```javascript
// In Templates
{{ $t("common:button.save") }}
{{ $t("additional:modules.tools.measure.title") }}

// In JavaScript
this.$t("common:button.save")
```

**Übersetzungsdateien:**
```
locales/
├── de/
│   ├── common.json
│   └── additional.json
└── en/
    ├── common.json
    └── additional.json
```

### 4. MasterportalAPI

Bridge zu OpenLayers-Funktionalität:

```javascript
import {getDistance} from "ol/sphere";
import {getArea, getLength} from "ol/sphere";

// Direkter Zugriff auf OpenLayers-Funktionen
const distance = getDistance(coord1, coord2);
```

## Module-Struktur

### Tools

Tools sind Vue-Komponenten mit eigenem Vuex-Store:

```
src/modules/tools/
├── draw/
│   ├── components/
│   │   └── Draw.vue          # Vue-Komponente
│   ├── store/
│   │   ├── index.js          # Store-Konfiguration
│   │   ├── actions.js        # Async-Logik
│   │   ├── mutations.js      # State-Änderungen
│   │   ├── getters.js        # Abgeleitete Werte
│   │   └── state.js          # Initialer State
│   ├── tests/
│   │   └── unit/             # Unit-Tests
│   └── doc/                  # Dokumentation
```

### Controls

UI-Controls wie Zoom, Scale, etc.:

```
src/modules/controls/
├── zoom/
├── orientation/
└── totalView/
```

### Menu

Menü-System (Desktop/Mobile/Table):

```
src/modules/menu/
├── desktop/
├── mobile/
└── table/
```

## Vue 3 Konzepte

### 1. Vue-Komponenten

**Options API (Standard in Masterportal v3):**

```vue
<script>
export default {
    name: "MeineTool",
    data() {
        return {
            count: 0
        };
    },
    computed: {
        doubleCount() {
            return this.count * 2;
        }
    },
    methods: {
        increment() {
            this.count++;
        }
    },
    mounted() {
        console.log("Component mounted");
    }
};
</script>

<template>
    <div>
        <p>Count: {{ count }}</p>
        <p>Double: {{ doubleCount }}</p>
        <button @click="increment">+1</button>
    </div>
</template>

<style lang="scss" scoped>
div {
    padding: 1rem;
}
</style>
```

**Composition API (modern, optional):**

```vue
<script>
import {ref, computed, onMounted} from "vue";

export default {
    name: "MeinTool",
    setup() {
        const count = ref(0);
        const doubleCount = computed(() => count.value * 2);
        
        const increment = () => {
            count.value++;
        };
        
        onMounted(() => {
            console.log("Component mounted");
        });
        
        return {count, doubleCount, increment};
    }
};
</script>
```

### 2. Vuex Store

**State:** Der "Single Source of Truth"

```javascript
// state.js
const state = {
    active: false,
    selectedFeatures: [],
    distance: null
};

export default state;
```

**Mutations:** Synchrone State-Änderungen

```javascript
// mutations.js
export default {
    setActive(state, value) {
        state.active = value;
    },
    setDistance(state, distance) {
        state.distance = distance;
    }
};
```

**Actions:** Asynchrone Logik

```javascript
// actions.js
export default {
    async fetchData({commit}) {
        const data = await fetch("/api/data");
        commit("setData", data);
    },
    
    calculateDistance({state, commit}) {
        // Logik...
        commit("setDistance", result);
    }
};
```

**Getters:** Abgeleitete Werte

```javascript
// getters.js
export default {
    isActive: (state) => state.active,
    hasFeatures: (state) => state.selectedFeatures.length > 0,
    featureCount: (state) => state.selectedFeatures.length
};
```

## OpenLayers Integration

### Layer-Management

```javascript
// Layer zur Karte hinzufügen
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

const vectorLayer = new VectorLayer({
    id: "myToolLayer",
    source: new VectorSource(),
    alwaysOnTop: true
});

const map = this.getMap("2D");
map.addLayer(vectorLayer);
```

### Interaktionen

```javascript
import {Select, Draw} from "ol/interaction";
import {click} from "ol/events/condition";

// Feature-Selektion
const select = new Select({
    condition: click,
    style: highlightStyle
});

map.addInteraction(select);

select.on("select", (evt) => {
    const features = evt.target.getFeatures().getArray();
    this.setSelectedFeatures(features);
});
```

### Geometrie-Operationen

```javascript
import {getDistance, getLength, getArea} from "ol/sphere";

// Distanz zwischen Punkten
const distance = getDistance([lon1, lat1], [lon2, lat2]);

// Länge einer Linie
const length = getLength(lineStringGeometry);

// Fläche eines Polygons
const area = getArea(polygonGeometry);
```

## Datenfluss im Masterportal v3

```
User-Aktion (z.B. Button-Click)
    ↓
Vue-Komponente fängt Event ab (@click="...")
    ↓
Komponente ruft Vuex Action auf
    ↓
Action verarbeitet Logik (API-Calls, Berechnungen)
    ↓
Action committed Mutation(s)
    ↓
Mutation ändert State
    ↓
Vue Reactivity triggert Re-Render
    ↓
UI wird aktualisiert
```

## Best Practices

### 1. Vuex für State Management

✅ **Gut:**
```javascript
// In Action
commit("setSelectedFeatures", features);

// In Komponente
computed: {
    ...mapState("Tools/MeinTool", ["selectedFeatures"])
}
```

❌ **Schlecht:**
```javascript
// State direkt in Komponente
data() {
    return {
        selectedFeatures: []  // Nicht teilbar zwischen Komponenten
    };
}
```

### 2. Cleanup beim Deaktivieren

✅ **Gut:**
```javascript
// In Action
deactivate({commit, rootState}) {
    // Layer entfernen
    const map = rootState.Maps.map;
    const layer = map.getLayerById("myToolLayer");
    if (layer) {
        map.removeLayer(layer);
    }
    
    // State zurücksetzen
    commit("clearSelection");
    commit("setActive", false);
}
```

### 3. i18n für alle Texte

✅ **Gut:**
```vue
<template>
    <h4>{{ $t("additional:modules.tools.meinTool.title") }}</h4>
</template>
```

❌ **Schlecht:**
```vue
<template>
    <h4>Mein Tool</h4>  <!-- Hardcoded Deutsch -->
</template>
```

## Debugging-Workflow

### 1. Vue DevTools

Browser-Extension für:
- Vuex State inspizieren
- Component-Tree visualisieren
- Events tracken

### 2. Console-Logs in Actions

```javascript
export default {
    calculateDistance({state, commit}) {
        console.log("Calculating distance for:", state.selectedFeatures);
        const result = /* ... */;
        console.log("Result:", result);
        commit("setDistance", result);
    }
};
```

### 3. Vuex Logger

```javascript
// store/index.js
import {createLogger} from "vuex";

const plugins = process.env.NODE_ENV !== "production" 
    ? [createLogger()] 
    : [];

export default new Vuex.Store({
    // ...
    plugins
});
```

## Weiterführende Ressourcen

- **Vue 3 Dokumentation:** https://vuejs.org/
- **Vuex 4 Dokumentation:** https://vuex.vuejs.org/
- **OpenLayers API:** https://openlayers.org/en/latest/apidoc/
- **Masterportal Doku:** https://www.masterportal.org/dokumentation
- **Beispiel-Tools:** `src/modules/tools/` im Repository

## Zusammenfassung

Das Masterportal v3 kombiniert:
- **Vue 3** für komponentenbasierte UI
- **Vuex 4** für zentrales State Management
- **OpenLayers** für Karten-Funktionalität
- **i18next** für Mehrsprachigkeit
- **Bootstrap 5** für konsistentes UI

Diese moderne Architektur ermöglicht wartbare und skalierbare Geo-Anwendungen! 🏗️

## OpenLayers Integration

### Layer-Typen

**Tile-Layer (WMS, XYZ):**

```javascript
import TileLayer from "ol/layer/Tile";
import TileWMS from "ol/source/TileWMS";

const wmsLayer = new TileLayer({
    source: new TileWMS({
        url: "https://example.com/wms",
        params: {
            "LAYERS": "my_layer",
            "VERSION": "1.3.0"
        }
    })
});
```

**Vector-Layer (WFS, GeoJSON):**

```javascript
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";

const vectorLayer = new VectorLayer({
    source: new VectorSource({
        url: "https://example.com/wfs?request=GetFeature",
        format: new GeoJSON()
    })
});
```

### Features & Geometrien

```javascript
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import LineString from "ol/geom/LineString";
import Polygon from "ol/geom/Polygon";

// Punkt erstellen
const pointFeature = new Feature({
    geometry: new Point([565874, 5934140]),
    name: "Hamburg"
});

// Eigenschaften setzen
pointFeature.set("typ", "Stadt");
pointFeature.set("einwohner", 1900000);

// Geometrie holen
const coords = pointFeature.getGeometry().getCoordinates();
```

### Styling

```javascript
import {Style, Stroke, Fill, Circle, Text} from "ol/style";

const style = new Style({
    image: new Circle({
        radius: 8,
        fill: new Fill({color: "blue"}),
        stroke: new Stroke({color: "white", width: 2})
    }),
    stroke: new Stroke({
        color: "red",
        width: 3
    }),
    fill: new Fill({
        color: "rgba(255, 0, 0, 0.3)"
    }),
    text: new Text({
        text: "Label",
        fill: new Fill({color: "black"}),
        stroke: new Stroke({color: "white", width: 3})
    })
});

feature.setStyle(style);
```

### Interaktionen

```javascript
import {Select, Draw, Modify} from "ol/interaction";

// Feature-Selektion
const select = new Select({
    condition: click,
    style: highlightStyle
});

map.addInteraction(select);

select.on("select", (evt) => {
    const features = evt.target.getFeatures().getArray();
    console.log("Selected:", features);
});

// Zeichnen
const draw = new Draw({
    source: vectorSource,
    type: "LineString"
});

map.addInteraction(draw);
```

## Best Practices

### 1. Immer Cleanup

✅ **Gut:**
```javascript
stopTool: function () {
    this.unregisterListener();
    this.clearLayer();
    this.set("selectedFeatures", []);
}
```

❌ **Schlecht:**
```javascript
// Listener und Layer bleiben aktiv → Memory Leak
```

### 2. Separation of Concerns

✅ **Gut:**
```javascript
// Action: Business-Logik
calculateDistance({commit}, {f1, f2}) {
    const distance = getDistance(
        f1.getGeometry().getCoordinates(),
        f2.getGeometry().getCoordinates()
    );
    commit("setDistance", distance);
}

// Component: UI-Update
computed: {
    ...mapState("Tools/MeinTool", ["distance"]),
    displayDistance() {
        return this.distance + " m";
    }
}
```

❌ **Schlecht:**
```javascript
// Alles in der Komponente vermischt
```

## Debugging-Workflow

1. **Console-Logs in Actions**
   ```javascript
   console.log("Method called with:", arguments);
   ```

2. **Source Maps nutzen**
   - Webpack generiert Source Maps
   - Originaler Code im Debugger sichtbar

## Weiterführende Ressourcen

- **OpenLayers API:** https://openlayers.org/en/latest/apidoc/
- **Masterportal Code:** https://bitbucket.org/geowerkstatt-hamburg/masterportal/src/dev/
- **Beispiel-Tools im Repo:** `src/modules/tools/`

## Zusammenfassung

Das Masterportal v3 kombiniert:
- **Vue 3** für komponentenbasierte UI
- **Vuex 4** für zentrales State Management
- **OpenLayers** für Karten-Funktionalität
- **Modulare Architektur** für Erweiterbarkeit

Diese moderne Architektur ermöglicht es, komplexe Geo-Anwendungen strukturiert und wartbar zu entwickeln! 🏗️

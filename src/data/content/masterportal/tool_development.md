# Tool-Entwicklung im Masterportal

## Einführung

Nachdem du gelernt hast, ein Portal durch Config-Bearbeitung zu erstellen, ist der nächste Schritt die **echte Programmierung**: die Entwicklung eigener Tools.

Tools sind interaktive Komponenten, die Nutzern erweiterte Funktionalität bieten - z.B. Messungen, Analysen, Datenexporte oder eigene Visualisierungen.

## Was ist ein Tool?

Ein Tool im Masterportal ist ein eigenständiges Modul, das:

- Eine **UI-Komponente** bereitstellt (z.B. ein Fenster mit Buttons und Eingabefeldern)
- Mit der **Karte interagiert** (Layer hinzufügen, Features selektieren, Geometrien zeichnen)
- **Geodaten verarbeitet** (z.B. Distanzen berechnen, Features filtern)
- **Events** behandelt (Klicks auf der Karte, User-Input)

**Beispiele für Tools:**
- Koordinatentool
- Zeichenwerkzeug
- Routenplaner
- Feature-Info-Abfrage
- Export-Tool (PDF, CSV)
- Messtool für Abstände zwischen Features ← Dein Capstone-Projekt!

## Technologie-Stack

**Masterportal Version 3 basiert auf:**

- **Vue 3**: Modernes JavaScript-Framework mit Composition API und Options API
- **Vuex 4**: State Management
- **OpenLayers**: Karten-Bibliothek
- **Webpack**: Build-System
- **Bootstrap 5**: UI-Components
- **ES6+ JavaScript**: Moderne JavaScript-Syntax

> ⚠️ **Wichtig**: Version 3 ist eine komplette Neuentwicklung und nutzt **ausschließlich Vue 3 + Vuex 4**. Falls du irgendwo Backbone.js-Code siehst, stammt dieser aus Version 2 und ist nicht mehr relevant!

## Ordnerstruktur für Tools

Tools liegen im Ordner:

```
masterportal/src/modules/tools/
├── coordToolkit/         # Koordinatenwerkzeug
├── draw/                 # Zeichenwerkzeug
├── measure/              # Messwerkzeug
├── routing/              # Routing-Tool
└── meinTool/            # Dein neues Tool
    ├── components/       # Vue-Komponenten
    │   └── MeinTool.vue  # Haupt-Komponente
    ├── store/           # Vuex Store
    │   ├── actions.js
    │   ├── getters.js
    │   ├── mutations.js
    │   └── state.js
    ├── tests/           # Unit-Tests
    └── doc/             # Dokumentation
```

## Anatomie eines Tools (Vue 3)

### 1. Vue-Komponente (`MeinTool.vue`)

```vue
<script>
import {mapGetters, mapActions, mapMutations} from "vuex";
import getters from "../store/getters";
import mutations from "../store/mutations";

export default {
    name: "MeinTool",
    computed: {
        ...mapGetters("Tools/MeinTool", Object.keys(getters)),
    },
    methods: {
        ...mapActions("Tools/MeinTool", ["someAction"]),
        ...mapMutations("Tools/MeinTool", Object.keys(mutations)),
        
        onCalculateDistance() {
            // Distanz berechnen
            this.calculateDistance();
        }
    }
};
</script>

<template>
    <div id="mein-tool">
        <div class="tool-header">
            <h4>{{ $t("additional:modules.tools.meinTool.title") }}</h4>
        </div>
        
        <div class="tool-body">
            <p>{{ $t("additional:modules.tools.meinTool.description") }}</p>
            
            <div class="selection-info">
                <strong>Ausgewählte Features:</strong>
                <span>{{ selectedFeatures.length }}</span>
            </div>
            
            <button 
                v-if="selectedFeatures.length >= 2"
                class="btn btn-primary"
                @click="onCalculateDistance"
            >
                {{ $t("additional:modules.tools.meinTool.calculate") }}
            </button>
            
            <div v-if="distance !== null" class="result">
                <strong>Distanz:</strong> {{ distance.toFixed(2) }} m
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#mein-tool {
    .tool-header {
        padding: 15px;
        border-bottom: 1px solid #e0e0e0;
    }
    
    .tool-body {
        padding: 15px;
    }
    
    .result {
        margin: 15px 0;
        padding: 15px;
        background: #e8f5e9;
        border-left: 4px solid #4caf50;
    }
}
</style>
```

### 2. Vuex Store (`store/state.js`)

```javascript
const state = {
    active: false,
    id: "meinTool",
    name: "Mein Tool",
    icon: "bi-rulers",
    renderToWindow: true,
    resizableWindow: true,
    isVisibleInMenu: true,
    deactivateGFI: true,
    
    // Tool-spezifische Properties
    selectedFeatures: [],
    distance: null
};

export default state;
```

### 3. Vuex Mutations (`store/mutations.js`)

```javascript
export default {
    setActive(state, value) {
        state.active = value;
    },
    setSelectedFeatures(state, features) {
        state.selectedFeatures = features;
    },
    setDistance(state, distance) {
        state.distance = distance;
    },
    addFeature(state, feature) {
        if (state.selectedFeatures.length < 2) {
            state.selectedFeatures.push(feature);
        }
    },
    clearSelection(state) {
        state.selectedFeatures = [];
        state.distance = null;
    }
};
```

### 4. Vuex Actions (`store/actions.js`)

```javascript
import {getDistance} from "ol/sphere";

export default {
    calculateDistance({state, commit}) {
        if (state.selectedFeatures.length !== 2) {
            return;
        }
        
        const coord1 = state.selectedFeatures[0].getGeometry().getCoordinates();
        const coord2 = state.selectedFeatures[1].getGeometry().getCoordinates();
        
        const distance = getDistance(coord1, coord2);
        commit("setDistance", distance);
    },
    
    registerMapClickListener({dispatch}) {
        // Map-Click-Events registrieren
        // Details siehe Masterportal-Doku
    }
};
```

### 5. Vuex Getters (`store/getters.js`)

```javascript
export default {
    active: (state) => state.active,
    selectedFeatures: (state) => state.selectedFeatures,
    distance: (state) => state.distance,
    canCalculate: (state) => state.selectedFeatures.length === 2
};
```

## Tool registrieren

### 1. Tool-Ordner unter `src/modules/tools/` erstellen

### 2. In `src/modules/tools/index.js` registrieren:

```javascript
import MeinToolComponent from "./meinTool/components/MeinTool.vue";
import MeinToolStore from "./meinTool/store/index";

export default {
    // ... andere Tools
    MeinTool: {
        component: MeinToolComponent,
        store: MeinToolStore
    }
};
```

### 3. In `config.json` aktivieren:

```json
{
  "portalConfig": {
    "menu": {
      "tools": {
        "children": {
          "meinTool": {
            "name": "translate#additional:modules.tools.meinTool.title",
            "icon": "bi-rulers"
          }
        }
      }
    }
  }
}
```

### 4. Übersetzungen hinzufügen (`locales/de/additional.json`):

```json
{
  "modules": {
    "tools": {
      "meinTool": {
        "title": "Mein Tool",
        "description": "Klicke auf zwei Features, um die Distanz zu berechnen.",
        "calculate": "Distanz berechnen"
      }
    }
  }
}
```

## Mit OpenLayers arbeiten

### Features von WFS-Layer holen

```javascript
// In einer Vuex Action
getWfsFeatures({rootGetters}) {
    const layerId = "wfs_schulen";
    // Zugriff über Vuex Store auf Map-Layer
    const layer = rootGetters["Maps/getLayerById"](layerId);
    
    if (layer && layer.getSource) {
        const features = layer.getSource().getFeatures();
        return features;
    }
    return [];
}
```

### Geometrie-Operationen

```javascript
import {getDistance, getLength, getArea} from "ol/sphere";

// Distanz zwischen zwei Punkten
const distance = getDistance(coord1, coord2);

// Länge einer LineString
const length = getLength(lineStringGeometry);

// Fläche eines Polygons
const area = getArea(polygonGeometry);
```

### Vector-Layer für Visualisierung

```javascript
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import {Style, Stroke, Fill} from "ol/style";
import Feature from "ol/Feature";
import LineString from "ol/geom/LineString";

// In einer Vuex Action
addVisualizationLayer({rootGetters}) {
    const map = rootGetters["Maps/getMap"]("2D");
    
    // Vector-Layer erstellen
    const vectorLayer = new VectorLayer({
        id: "meinTool_visualization",
        source: new VectorSource(),
        style: new Style({
            stroke: new Stroke({
                color: "red",
                width: 3
            })
        }),
        alwaysOnTop: true
    });
    
    // Zur Karte hinzufügen
    map.addLayer(vectorLayer);
    
    // Linie zeichnen
    const lineFeature = new Feature({
        geometry: new LineString([coord1, coord2])
    });
    
    vectorLayer.getSource().addFeature(lineFeature);
}
```

## Debugging-Tipps

### 1. Vue DevTools

Browser-Extension installieren:
- Chrome: "Vue.js devtools"
- Firefox: "Vue.js devtools"

**Features:**
- Vuex State inspizieren
- Component-Tree anzeigen
- Events tracken
- Performance-Analyse

### 2. Console-Logs

```javascript
console.log("Tool activated:", this.active);
console.log("Selected features:", this.selectedFeatures);
console.log("Distance calculated:", this.distance);
```

### 3. Vuex Logger

In `store/index.js`:

```javascript
import {createLogger} from "vuex";

const debug = process.env.NODE_ENV !== "production";

export default {
    // ... store config
    plugins: debug ? [createLogger()] : []
};
```

## Testing

Tests mit Mocha + Chai:

```javascript
// tests/unit/store/actions.spec.js
import {expect} from "chai";
import actions from "../../../store/actions";

describe("tools/meinTool/actions", () => {
    let commit, state;
    
    beforeEach(() => {
        commit = sinon.spy();
        state = {
            selectedFeatures: []
        };
    });
    
    it("should calculate distance correctly", () => {
        const feature1 = createMockFeature([0, 0]);
        const feature2 = createMockFeature([100, 0]);
        
        state.selectedFeatures = [feature1, feature2];
        
        actions.calculateDistance({state, commit});
        
        expect(commit.calledWith("setDistance")).to.be.true;
        expect(commit.args[0][1]).to.be.closeTo(100, 0.01);
    });
});
```

## Best Practices

✅ **Composition API nutzen** (wenn möglich, für neue Tools)

✅ **Vuex State zentral verwalten** - UI-Logik von Business-Logik trennen

✅ **i18n für Texte** - Alle User-Texte übersetzbar machen

✅ **Cleanup beim Deaktivieren** - Layer und Listener entfernen

✅ **Bootstrap-Components nutzen** - Konsistentes UI

✅ **Accessibility beachten** - ARIA-Labels, Keyboard-Navigation

## Migration von v2 zu v3

Falls du alte Backbone-basierte Tools siehst:

**Backbone (v2)** → **Vue 3 (v3)**
- `Model.extend()` → Vuex Store
- `View.extend()` → Vue-Komponente
- `this.get("prop")` → `this.prop` (computed)
- `this.set("prop", value)` → `this.setProp(value)` (mutation)
- `this.listenTo()` → `watch()` oder computed properties

## Nächste Schritte

Du bist jetzt bereit für dein **Capstone-Projekt**! 🚀

Die Aufgabe:
> Baue ein **Messtool für Abstände zwischen WFS-Features** mit Vue 3 und Vuex

Nutze das Gelernte:
- Vue 3 Komponente mit Template
- Vuex Store für State Management
- OpenLayers für Geometrie-Operationen
- i18n für Übersetzungen

## Ressourcen

- **Masterportal v3 Doku:** https://www.masterportal.org/dokumentation
- **Vue 3 Docs:** https://vuejs.org/
- **Vuex 4 Docs:** https://vuex.vuejs.org/
- **OpenLayers API:** https://openlayers.org/en/latest/apidoc/
- **Beispiel-Tools:** `src/modules/tools/` im Repository

**Wichtig:** Schaue dir **existierende v3-Tools** im Repository an als Referenz! Diese Tools (wie `draw`, `measure`, `coordToolkit`) sind vollständig in Vue 3 + Vuex 4 geschrieben und bieten best-practice Beispiele.

## Zusammenfassung

Du hast gelernt:

✅ **Tool-Struktur**: Wie ein Vue 3 Tool mit Komponente + Vuex Store aufgebaut ist  
✅ **Tool-Registrierung**: Wie Tools im Masterportal registriert werden  
✅ **OpenLayers Integration**: Wie du mit der Karte interagierst  
✅ **State Management**: Wie Vuex 4 für zentrale Datenhaltung genutzt wird  
✅ **Debugging**: Wie du Tools mit Vue DevTools debuggst  
✅ **Testing**: Wie Unit-Tests für Tools geschrieben werden

## Dein Capstone-Projekt

**Aufgabe**: Baue ein **Messtool für Abstände zwischen WFS-Features**

**Anforderungen:**
- Nutzer kann zwei Features auf der Karte anklicken
- Die Distanz zwischen den Features wird berechnet und angezeigt
- Eine Linie zwischen den Features wird visualisiert
- Das Tool hat ein aufgeräumtes UI mit Bootstrap 5
- Alle Texte sind mehrsprachig (i18n)
- Unit-Tests existieren für die wichtigsten Funktionen

**Viel Erfolg!** 🚀

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

- **Vue 3**: Modernes JavaScript-Framework mit Composition API
- **Vuex 4**: State Management
- **OpenLayers**: Karten-Bibliothek
- **Webpack 4**: Build-System
- **Bootstrap 5**: UI-Components
- **ES6+ JavaScript**: Moderne JavaScript-Syntax

**Wichtig:** Version 3 ist eine komplette Neuentwicklung und nutzt **Vue 3** statt dem alten Backbone.js/Vue2 Mix aus Version 2!

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
  "Portalconfig": {
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
// In einer Action
getWfsFeatures({rootState}) {
    const layerId = "wfs_schulen";
    const layer = Radio.request("Map", "getLayerById", layerId);
    
    if (layer) {
        const features = layer.getSource().getFeatures();
        return features;
    }
    return [];
}
```

### Geometrie-Operationen

```javascript
import {getDistance} from "ol/sphere";
import {getLength, getArea} from "ol/sphere";

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
mapCollection.getMap("2D").addLayer(vectorLayer);

// Linie zeichnen
const lineFeature = new Feature({
    geometry: new LineString([coord1, coord2])
});

vectorLayer.getSource().addFeature(lineFeature);
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

**Wichtig:** Schaue dir **existierende v3-Tools** im Repository an als Referenz!

## Ordnerstruktur für Tools

Tools liegen im Ordner:

```
masterportal/src/modules/tools/
├── coordToolkit/         # Koordinatenwerkzeug
├── draw/                 # Zeichenwerkzeug
├── measure/              # Messwerkzeug
├── routing/              # Routing-Tool
└── meinTool/            # Dein neues Tool
    ├── model.js          # Datenmodell (Backbone Model)
    ├── view.js           # UI-Ansicht (Backbone View)
    ├── template.html     # HTML-Template
    └── style.css         # Styling
```

## Anatomie eines Tools

### 1. Model (`model.js`)

Das Model verwaltet den **Zustand** des Tools:

```javascript
import Tool from "../../core/modelList/tool/model";

const MeinToolModel = Tool.extend({
    defaults: {
        // Standard-Eigenschaften
        renderToWindow: true,
        glyphicon: "glyphicon-wrench",
        
        // Tool-spezifische Eigenschaften
        selectedFeatures: [],
        distance: null
    },

    /**
     * Initialisierung des Models
     */
    initialize: function () {
        this.superInitialize();
        
        // Event-Listener registrieren
        this.listenTo(this, "change:isActive", this.onActivate);
    },

    /**
     * Wird aufgerufen, wenn Tool aktiviert wird
     */
    onActivate: function () {
        if (this.get("isActive")) {
            this.startTool();
        } else {
            this.stopTool();
        }
    },

    /**
     * Tool-Logik starten
     */
    startTool: function () {
        // Karte bereit machen, Listener registrieren
        this.registerMapClickListener();
    },

    /**
     * Tool-Logik stoppen
     */
    stopTool: function () {
        // Cleanup: Listener entfernen, Layer löschen
        this.unregisterMapClickListener();
        this.clearSelection();
    },

    /**
     * Map-Click-Handler
     */
    registerMapClickListener: function () {
        Radio.trigger("Map", "registerListener", "click", 
            this.onMapClick.bind(this));
    },

    /**
     * Wird bei Klick auf Karte aufgerufen
     */
    onMapClick: function (evt) {
        const features = evt.target.forEachFeatureAtPixel(
            evt.pixel, 
            (feature) => feature
        );
        
        if (features) {
            this.addFeature(features);
        }
    }
});

export default MeinToolModel;
```

### 2. View (`view.js`)

Die View verwaltet die **UI-Darstellung**:

```javascript
import ToolView from "../../core/modelList/tool/view";
import MeinToolTemplate from "text-loader!./template.html";

const MeinToolView = ToolView.extend({
    
    // HTML-Template einbinden
    template: _.template(MeinToolTemplate),

    /**
     * Events auf UI-Elemente
     */
    events: {
        "click .btn-calculate": "onCalculateClick",
        "click .btn-clear": "onClearClick"
    },

    /**
     * View initialisieren
     */
    initialize: function () {
        this.listenTo(this.model, "change:isActive", this.render);
        this.listenTo(this.model, "change:selectedFeatures", this.updateUI);
        this.render();
    },

    /**
     * UI rendern
     */
    render: function () {
        if (this.model.get("isActive")) {
            const attr = this.model.toJSON();
            
            this.$el.html(this.template(attr));
            this.delegateEvents();
        } else {
            this.$el.empty();
        }
        return this;
    },

    /**
     * UI aktualisieren bei Model-Änderungen
     */
    updateUI: function () {
        const features = this.model.get("selectedFeatures");
        this.$(".feature-count").text(features.length);
    },

    /**
     * Button-Click-Handler
     */
    onCalculateClick: function () {
        this.model.calculateDistance();
    },

    onClearClick: function () {
        this.model.clearSelection();
        this.updateUI();
    }
});

export default MeinToolView;
```

### 3. Template (`template.html`)

HTML-Struktur der UI:

```html
<div id="mein-tool" class="tool-window">
    <div class="tool-header">
        <h4>Mein Tool</h4>
        <button class="btn-close glyphicon glyphicon-remove"></button>
    </div>
    
    <div class="tool-body">
        <p>Klicke auf Features in der Karte, um sie auszuwählen.</p>
        
        <div class="selection-info">
            <strong>Ausgewählte Features:</strong>
            <span class="feature-count">0</span>
        </div>
        
        <% if (selectedFeatures.length >= 2) { %>
            <button class="btn btn-primary btn-calculate">
                Distanz berechnen
            </button>
        <% } %>
        
        <% if (distance !== null) { %>
            <div class="result">
                <strong>Distanz:</strong> <%= distance.toFixed(2) %> m
            </div>
        <% } %>
        
        <button class="btn btn-secondary btn-clear">
            Auswahl löschen
        </button>
    </div>
</div>
```

### 4. Style (`style.css`)

CSS für das Tool:

```css
#mein-tool {
    position: absolute;
    top: 50px;
    right: 20px;
    width: 350px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    z-index: 1000;
}

.tool-header {
    padding: 15px;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.tool-body {
    padding: 15px;
}

.selection-info {
    margin: 15px 0;
    padding: 10px;
    background: #f5f5f5;
    border-radius: 4px;
}

.result {
    margin: 15px 0;
    padding: 15px;
    background: #e8f5e9;
    border-left: 4px solid #4caf50;
}
```

## Tool registrieren

Damit dein Tool im Masterportal verfügbar ist, muss es registriert werden:

### 1. In `src/modules/tools/tools.js` eintragen:

```javascript
import MeinToolModel from "./meinTool/model";
import MeinToolView from "./meinTool/view";

export default {
    // ... andere Tools
    MeinTool: {
        model: MeinToolModel,
        view: MeinToolView
    }
};
```

### 2. In `config.json` aktivieren:

```json
{
  "Portalconfig": {
    "menu": {
      "tools": {
        "children": {
          "meinTool": {
            "name": "Mein Tool",
            "glyphicon": "glyphicon-wrench"
          }
        }
      }
    }
  }
}
```

## Mit OpenLayers arbeiten

Viele Tools benötigen Zugriff auf die Karte und Features:

### Features auf der Karte finden

```javascript
// WFS-Layer holen
const layer = Radio.request("ModelList", "getModelByAttributes", {
    id: "wfs_schulen"
}).get("layer");

// Alle Features holen
const features = layer.getSource().getFeatures();

// Features filtern
const filteredFeatures = features.filter(f => 
    f.get("typ") === "Grundschule"
);
```

### Geometrie-Operationen

```javascript
import {getDistance} from "ol/sphere";

// Distanz zwischen zwei Punkten (Koordinaten)
const distance = getDistance(
    [565874, 5934140],  // [lon, lat] oder [x, y]
    [566000, 5935000]
);

console.log(`Distanz: ${distance} Meter`);
```

### Features auf der Karte zeichnen

```javascript
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import {Style, Stroke, Fill, Circle} from "ol/style";
import Feature from "ol/Feature";
import LineString from "ol/geom/LineString";

// Vector-Layer für Visualisierung erstellen
const vectorSource = new VectorSource();
const vectorLayer = new VectorLayer({
    source: vectorSource,
    style: new Style({
        stroke: new Stroke({
            color: "red",
            width: 3
        })
    })
});

Radio.trigger("Map", "addLayer", vectorLayer);

// Linie zwischen zwei Features zeichnen
const feature1 = /* erstes Feature */;
const feature2 = /* zweites Feature */;

const coord1 = feature1.getGeometry().getCoordinates();
const coord2 = feature2.getGeometry().getCoordinates();

const lineFeature = new Feature({
    geometry: new LineString([coord1, coord2])
});

vectorSource.addFeature(lineFeature);
```

## Debugging-Tipps

### Console-Logs strategisch einsetzen

```javascript
console.log("Tool aktiviert");
console.log("Features:", this.get("selectedFeatures"));
console.log("Distanz berechnet:", distance);
```

### Backbone DevTools

Browser-Extension "Backbone Debugger" installieren für besseren Einblick in Models und Views.

### Source Maps nutzen

Webpack generiert Source Maps → Original-Code im Debugger sichtbar

### Häufige Fehler

**❌ "Radio is not defined"**
```javascript
// Vergessen zu importieren
import Radio from "backbone.radio";
```

**❌ Features werden nicht gefunden**
```javascript
// Layer ist noch nicht geladen → warten!
Radio.request("ModelList", "getModelByAttributes", {id: "xyz"})
     .get("layer")
     .getSource()
     .once("change", () => {
         // Jetzt sind Features verfügbar
     });
```

## Best Practices

✅ **Model und View trennen**: Logik im Model, UI in der View

✅ **Events nutzen**: Verwende Backbone-Events statt direkter Funktionsaufrufe

✅ **Cleanup nicht vergessen**: Entferne Listener und Layer beim Deaktivieren

✅ **Fehlerbehandlung**: Fange Fehler ab (try-catch)

✅ **User-Feedback**: Zeige Lade-Spinner, Fehlermeldungen, Erfolgsmeldungen

✅ **Code-Style**: Halte dich an ESLint-Regeln des Projekts

## Testing

Tools sollten getestet werden:

```javascript
// test/unittests/modules/tools/meinTool/model.test.js
import MeinToolModel from "@modules/tools/meinTool/model";

describe("tools/meinTool/model", function () {
    let model;

    beforeEach(function () {
        model = new MeinToolModel();
    });

    it("should start with empty selection", function () {
        expect(model.get("selectedFeatures")).to.be.an("array").that.is.empty;
    });

    it("should calculate distance correctly", function () {
        // Mock Features
        const feature1 = createMockFeature([0, 0]);
        const feature2 = createMockFeature([100, 0]);
        
        model.set("selectedFeatures", [feature1, feature2]);
        model.calculateDistance();
        
        expect(model.get("distance")).to.be.closeTo(100, 0.01);
    });
});
```

## Nächste Schritte

Du bist jetzt bereit für dein **Capstone-Projekt**! 🚀

Die Aufgabe:
> Baue ein **Messtool für Abstände zwischen WFS-Features** mit entsprechender UI

Nutze das Gelernte:
- Feature-Selektion auf der Karte
- Distanz-Berechnung mit OpenLayers
- UI mit Template und Event-Handling
- Visualisierung der Verbindungslinien

## Ressourcen

- Masterportal-Doku: https://www.masterportal.org/dokumentation
- OpenLayers API: https://openlayers.org/en/latest/apidoc/
- Backbone.js Docs: https://backbonejs.org/
- Beispiel-Tools: `masterportal/src/modules/tools/`

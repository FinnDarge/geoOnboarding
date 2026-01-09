# Capstone-Projekt: WFS Feature-Distanz-Messtool

## Projektübersicht

Gratulation! Du hast alle Grundlagen gemeistert. Jetzt ist es Zeit, dein Wissen in einem **echten Masterportal-Tool** anzuwenden.

**Deine Aufgabe:** Entwickle ein Tool für das Masterportal, das die **Distanz zwischen zwei WFS-Features** misst und visualisiert.

## Warum dieses Projekt?

Als Geo-Entwickler wirst du häufig Tools bauen, die:
- Mit der Karte interagieren (Feature-Selektion)
- Geodaten verarbeiten (Distanz-Berechnung)
- Ergebnisse visualisieren (Linien, Labels)
- Eine benutzerfreundliche UI bieten

Dieses Projekt vereint all diese Skills!

## Funktionale Anforderungen

### Must-Have Features

**1. Feature-Selektion**
- User kann auf WFS-Features auf der Karte klicken
- Zwei Features müssen ausgewählt werden können
- Bereits ausgewählte Features werden visuell hervorgehoben (z.B. andersfarbiger Marker)

**2. Distanz-Berechnung**
- Berechne die Luftlinie zwischen beiden Features in Metern
- Nutze OpenLayers `getDistance()` Funktion
- Runde auf 2 Nachkommastellen

**3. Visualisierung**
- Zeichne eine Linie zwischen den beiden Features
- Zeige die Distanz in einem Label auf der Karte
- Optional: Mid-Point-Marker mit Distanz-Text

**4. User Interface**
- Tool-Fenster mit:
  - Anleitung: "Klicke auf zwei Features..."
  - Anzeige der ausgewählten Features (Name/ID)
  - Berechnete Distanz prominent angezeigt
  - "Zurücksetzen"-Button zum Löschen der Auswahl
  - "Schließen"-Button

**5. Cleanup**
- Beim Schließen des Tools: Alle Marker/Linien entfernen
- Bei "Zurücksetzen": Neue Auswahl möglich

### Nice-to-Have Features

**Optional, wenn Zeit bleibt:**

- **Multiple Distanzen:** Mehr als 2 Features, zeige alle Paar-Distanzen
- **Route statt Luftlinie:** Nutze Routing-Service für echte Wegstrecke
- **Export:** Ergebnisse als CSV oder JSON exportieren
- **Historien-Log:** Liste der letzten Messungen
- **Feature-Suche:** Suche Features per Name statt Klick

## Technische Anforderungen

### Architektur

Dein Tool besteht aus:

```
src/modules/tools/featureDistance/
├── components/
│   └── FeatureDistance.vue   # Vue-Komponente mit Template
├── store/
│   ├── index.js              # Store-Konfiguration
│   ├── state.js              # State-Definition
│   ├── mutations.js          # State-Änderungen
│   ├── actions.js            # Business-Logik
│   └── getters.js            # Computed Properties
└── tests/
    └── unit/
        └── store/            # Unit-Tests für Store
```

### Technologie-Stack

- **Vue 3:** Komponentenbasierte UI mit Options API
- **Vuex 4:** State Management für Tool-State
- **OpenLayers:** Karten-Interaktion, Geometrie-Operationen
- **i18next:** Mehrsprachigkeit (über `$t()`)

### WFS-Layer verwenden

Nutze einen verfügbaren WFS-Layer aus der **services.json** deiner Portal-Config.

**Beispiel-Dienste im Masterportal:**
- Deutsche Städte (Natural Earth via Geoserver)
- Hamburg Schulen (wenn in services.json definiert)
- Oder ein eigener Test-WFS

**Config-Beispiel:**

```json
{
  "id": "wfs_cities",
  "name": "Deutsche Städte",
  "url": "https://example.com/geoserver/wfs",
  "typ": "WFS",
  "featureType": "cities",
  "version": "2.0.0"
}
```

## Abnahmekriterien

### Funktionalität (60%)

✅ Tool kann über Menü aktiviert werden  
✅ Click auf WFS-Feature selektiert es  
✅ Zwei Features können ausgewählt werden  
✅ Distanz wird korrekt berechnet (in Metern)  
✅ Verbindungslinie wird auf Karte gezeichnet  
✅ UI zeigt ausgewählte Features und Distanz  
✅ "Zurücksetzen" löscht Auswahl und Visualisierung  
✅ Schließen des Tools entfernt alle Elemente von der Karte  

### Code-Qualität (25%)

✅ Code folgt ESLint-Regeln des Projekts  
✅ Sinnvolle Variablen-/Funktionsnamen  
✅ Kommentare an wichtigen Stellen  
✅ Keine Console-Errors im Browser  
✅ Model und View klar getrennt  
✅ Events statt direkter Funktionsaufrufe  

### Testing (15%)

✅ Mindestens 3 Unit-Tests geschrieben  
✅ Tests decken wichtigste Funktionen ab:
  - Feature-Selektion
  - Distanz-Berechnung
  - Cleanup beim Schließen  

**Test-Framework:** Mocha + Chai (bereits im Masterportal vorhanden)

**Test-Datei:**
```
test/unittests/modules/tools/featureDistance/model.test.js
```

## Zeitrahmen

**Geschätzte Dauer:** 16-24 Stunden (2-3 Arbeitstage)

**Aufteilung:**
- **Setup & Architektur:** 2-3h
- **Feature-Selektion implementieren:** 4-5h
- **Distanz-Berechnung & Visualisierung:** 4-5h
- **UI-Entwicklung:** 3-4h
- **Testing:** 2-3h
- **Debugging & Polishing:** 2-3h

## Schritt-für-Schritt-Anleitung

### Phase 1: Setup (1h)

1. **Tool-Ordner erstellen**
   ```bash
   cd masterportal/src/modules/tools
   mkdir -p featureDistance/components
   mkdir -p featureDistance/store
   mkdir -p featureDistance/tests/unit/store
   ```

2. **Grundstruktur anlegen**
   ```bash
   touch featureDistance/components/FeatureDistance.vue
   touch featureDistance/store/index.js
   touch featureDistance/store/state.js
   touch featureDistance/store/mutations.js
   touch featureDistance/store/actions.js
   touch featureDistance/store/getters.js
   ```

3. **In config.json aktivieren**
   ```json
   {
     "Portalconfig": {
       "menu": {
         "tools": {
           "children": {
             "featureDistance": {
               "name": "translate#additional:modules.tools.featureDistance.title",
               "icon": "bi-rulers"
             }
           }
         }
       }
     }
   }
   ```

4. **i18n Übersetzungen hinzufügen**
   ```json
   // locales/de/additional.json
   {
     "modules": {
       "tools": {
         "featureDistance": {
           "title": "Feature-Distanz",
           "instruction": "Klicke auf zwei Features, um die Distanz zu berechnen",
           "feature1": "Feature 1:",
           "feature2": "Feature 2:",
           "distance": "Distanz:",
           "reset": "Zurücksetzen",
           "noFeature": "Kein Feature"
         }
       }
     }
   }
   ```

### Phase 2: Vuex Store-Grundstruktur (2h)

**store/state.js:**

```javascript
const state = {
    // Tool ist aktiv oder nicht
    active: false,
    
    // Die beiden ausgewählten Features
    selectedFeatures: [],
    
    // Berechnete Distanz in Metern
    distance: null,
    
    // OpenLayers Layer für Visualisierung
    vectorLayer: null,
    
    // Click-Listener-Referenz
    clickListener: null
};

export default state;
```

**store/mutations.js:**

```javascript
export default {
    setActive(state, active) {
        state.active = active;
    },
    
    addSelectedFeature(state, feature) {
        if (state.selectedFeatures.length < 2) {
            state.selectedFeatures.push(feature);
        }
    },
    
    clearSelection(state) {
        state.selectedFeatures = [];
        state.distance = null;
    },
    
    setDistance(state, distance) {
        state.distance = distance;
    },
    
    setVectorLayer(state, layer) {
        state.vectorLayer = layer;
    },
    
    setClickListener(state, listener) {
        state.clickListener = listener;
    }
};
```

**store/actions.js:**

```javascript
import {getDistance} from "ol/sphere";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import LineString from "ol/geom/LineString";
import {Style, Stroke, Fill, Text} from "ol/style";

export default {
    /**
     * Aktiviert das Tool
     */
    activate({commit, dispatch, rootGetters}) {
        commit("setActive", true);
        
        // Vector Layer für Visualisierung erstellen
        const layer = new VectorLayer({
            id: "featureDistanceLayer",
            source: new VectorSource(),
            alwaysOnTop: true,
            style: new Style({
                stroke: new Stroke({
                    color: "#FF0000",
                    width: 2
                })
            })
        });
        
        const map = rootGetters["Maps/getMap"]("2D");
        map.addLayer(layer);
        commit("setVectorLayer", layer);
        
        // Click-Listener registrieren
        dispatch("registerClickListener");
    },
    
    /**
     * Deaktiviert das Tool und räumt auf
     */
    deactivate({state, commit, rootGetters}) {
        commit("setActive", false);
        
        // Layer entfernen
        if (state.vectorLayer) {
            const map = rootGetters["Maps/getMap"]("2D");
            map.removeLayer(state.vectorLayer);
            commit("setVectorLayer", null);
        }
        
        // Click-Listener entfernen
        if (state.clickListener) {
            const map = rootGetters["Maps/getMap"]("2D");
            map.un("singleclick", state.clickListener);
            commit("setClickListener", null);
        }
        
        commit("clearSelection");
    },
    
    /**
     * Registriert Klick-Listener auf der Karte
     */
    registerClickListener({state, commit, dispatch, rootGetters}) {
        const map = rootGetters["Maps/getMap"]("2D");
        
        const listener = (evt) => {
            // Feature am Klick-Punkt finden
            const features = map.getFeaturesAtPixel(evt.pixel, {
                layerFilter: (layer) => {
                    // Nur WFS-Layer
                    return layer.get("typ") === "WFS";
                }
            });
            
            if (features && features.length > 0) {
                dispatch("selectFeature", features[0]);
            }
        };
        
        map.on("singleclick", listener);
        commit("setClickListener", listener);
    },
    
    /**
     * Selektiert ein Feature
     */
    selectFeature({state, commit, dispatch}, feature) {
        if (state.selectedFeatures.length < 2) {
            commit("addSelectedFeature", feature);
            
            // Wenn 2 Features ausgewählt: Distanz berechnen
            if (state.selectedFeatures.length === 2) {
                dispatch("calculateDistance");
            }
        }
    },
    
    /**
     * Berechnet Distanz und zeichnet Linie
     */
    calculateDistance({state, commit}) {
        const [feature1, feature2] = state.selectedFeatures;
        
        // Koordinaten extrahieren (Feature-Center)
        const geom1 = feature1.getGeometry();
        const geom2 = feature2.getGeometry();
        const coord1 = geom1.getCoordinates ? geom1.getCoordinates() : geom1.getExtent().slice(0, 2);
        const coord2 = geom2.getCoordinates ? geom2.getCoordinates() : geom2.getExtent().slice(0, 2);
        
        // Distanz berechnen
        const distance = getDistance(coord1, coord2);
        commit("setDistance", Math.round(distance * 100) / 100);  // Auf 2 Nachkommastellen
        
        // Linie zeichnen
        const line = new Feature({
            geometry: new LineString([coord1, coord2])
        });
        
        // Distanz-Label
        const midpoint = [
            (coord1[0] + coord2[0]) / 2,
            (coord1[1] + coord2[1]) / 2
        ];
        
        const label = new Feature({
            geometry: new Point(midpoint)
        });
        
        label.setStyle(new Style({
            text: new Text({
                text: `${distance.toFixed(2)} m`,
                font: "bold 14px Arial",
                fill: new Fill({color: "#000"}),
                stroke: new Stroke({color: "#FFF", width: 3}),
                offsetY: -10
            })
        }));
        
        // Zu Layer hinzufügen
        state.vectorLayer.getSource().clear();
        state.vectorLayer.getSource().addFeatures([line, label]);
    },
    
    /**
     * Setzt Auswahl zurück
     */
    reset({state, commit}) {
        commit("clearSelection");
        
        if (state.vectorLayer) {
            state.vectorLayer.getSource().clear();
        }
    }
};
```

**store/getters.js:**

```javascript
export default {
    isActive: (state) => state.active,
    
    hasFirstFeature: (state) => state.selectedFeatures.length >= 1,
    hasSecondFeature: (state) => state.selectedFeatures.length >= 2,
    
    firstFeature: (state) => state.selectedFeatures[0] || null,
    secondFeature: (state) => state.selectedFeatures[1] || null,
    
    distance: (state) => state.distance,
    
    distanceFormatted: (state) => {
        if (state.distance === null) return null;
        
        if (state.distance >= 1000) {
            return `${(state.distance / 1000).toFixed(2)} km`;
        }
        return `${state.distance.toFixed(2)} m`;
    }
};
```

**store/index.js:**

```javascript
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
```

### Phase 3: Vue-Komponente (2-3h)

**components/FeatureDistance.vue:**

```vue
<script>
import {mapGetters, mapActions} from "vuex";
import ToolTemplate from "../../ToolTemplate.vue";

export default {
    name: "FeatureDistance",
    components: {
        ToolTemplate
    },
    computed: {
        ...mapGetters("Tools/FeatureDistance", [
            "isActive",
            "hasFirstFeature",
            "hasSecondFeature",
            "firstFeature",
            "secondFeature",
            "distanceFormatted"
        ])
    },
    methods: {
        ...mapActions("Tools/FeatureDistance", [
            "reset"
        ]),
        
        close() {
            this.$store.commit("Tools/FeatureDistance/setActive", false);
        },
        
        getFeatureName(feature) {
            if (!feature) return this.$t("additional:modules.tools.featureDistance.noFeature");
            
            // Versuche verschiedene Properties für Namen
            return feature.get("name") 
                || feature.get("NAME") 
                || feature.get("id") 
                || feature.getId() 
                || "Unbekannt";
        }
    }
};
</script>

<template>
    <ToolTemplate
        :title="$t('additional:modules.tools.featureDistance.title')"
        :icon="'bi-rulers'"
        @close="close"
    >
        <div class="feature-distance-tool">
            <!-- Anleitung -->
            <p class="instruction">
                {{ $t('additional:modules.tools.featureDistance.instruction') }}
            </p>
            
            <!-- Feature 1 -->
            <div class="feature-info">
                <strong>{{ $t('additional:modules.tools.featureDistance.feature1') }}</strong>
                <span :class="{'selected': hasFirstFeature, 'pending': !hasFirstFeature}">
                    {{ getFeatureName(firstFeature) }}
                </span>
            </div>
            
            <!-- Feature 2 -->
            <div class="feature-info">
                <strong>{{ $t('additional:modules.tools.featureDistance.feature2') }}</strong>
                <span :class="{'selected': hasSecondFeature, 'pending': !hasSecondFeature}">
                    {{ getFeatureName(secondFeature) }}
                </span>
            </div>
            
            <!-- Distanz-Anzeige -->
            <div 
                v-if="distanceFormatted" 
                class="distance-result"
            >
                <strong>{{ $t('additional:modules.tools.featureDistance.distance') }}</strong>
                <span class="distance-value">{{ distanceFormatted }}</span>
            </div>
            
            <!-- Aktionen -->
            <div class="actions">
                <button 
                    class="btn btn-secondary"
                    @click="reset"
                    :disabled="!hasFirstFeature"
                >
                    {{ $t('additional:modules.tools.featureDistance.reset') }}
                </button>
            </div>
        </div>
    </ToolTemplate>
</template>

<style lang="scss" scoped>
.feature-distance-tool {
    padding: 1rem;
    
    .instruction {
        color: #666;
        font-style: italic;
        margin-bottom: 1rem;
    }
    
    .feature-info {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        background: #f5f5f5;
        border-radius: 4px;
        
        span.selected {
            color: #28a745;
            font-weight: bold;
        }
        
        span.pending {
            color: #999;
            font-style: italic;
        }
    }
    
    .distance-result {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        margin: 1rem 0;
        background: #e3f2fd;
        border-left: 4px solid #2196F3;
        border-radius: 4px;
        
        .distance-value {
            font-size: 1.25rem;
            font-weight: bold;
            color: #1976D2;
        }
    }
    
    .actions {
        display: flex;
        justify-content: flex-end;
        margin-top: 1rem;
    }
}
</style>


    clearSelection: function () {
        this.set("selectedFeatures", []);
        this.set("distance", null);
        // TODO: Visualisierung entfernen
    }
});

export default FeatureDistanceModel;
```

### Phase 3: Feature-Selektion (4h)

Implementiere:
- Map-Click-Event-Listener
- Feature-Detection unter Mauszeiger
- Speichern in `selectedFeatures` Array
- Maximal 2 Features

### Phase 4: Distanz-Berechnung (3h)

Implementiere:
- `calculateDistance()` Methode
- OpenLayers `getDistance()` nutzen
- Koordinaten aus Feature-Geometrien extrahieren

### Phase 5: Visualisierung (4h)

Implementiere:
- Vector-Layer für Linie erstellen
- LineString-Feature zeichnen
- Style (Farbe, Breite)
- Optional: Text-Label mit Distanz

### Phase 6: UI-Entwicklung (3h)

**template.html & view.js:**
- Tool-Fenster mit Backbone-Template
- Event-Listener für Buttons
- Dynamisches Update bei Model-Änderungen

### Phase 7: Testing (3h)

**test/unittests/modules/tools/featureDistance/model.test.js:**

```javascript
import FeatureDistanceModel from "@modules/tools/featureDistance/model";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";

describe("tools/featureDistance/model", function () {
    let model;

    beforeEach(function () {
        model = new FeatureDistanceModel();
    });

    it("should start with empty selection", function () {
        expect(model.get("selectedFeatures")).to.be.an("array").that.is.empty;
    });

    it("should calculate distance between two points", function () {
        const feat1 = new Feature({geometry: new Point([0, 0])});
        const feat2 = new Feature({geometry: new Point([100, 0])});
        
        model.set("selectedFeatures", [feat1, feat2]);
        model.calculateDistance();
        
        expect(model.get("distance")).to.be.closeTo(100, 0.01);
    });

    // TODO: Weitere Tests
});
```

## Abgabe

### Was du abgibst:

1. **Code:**
   - Komplettes `featureDistance/` Verzeichnis
   - Registrierung in `tools.js`
   - Test-Datei(en)

2. **Dokumentation:**
   - README.md im Tool-Ordner mit:
     - Kurzbeschreibung
     - Verwendung
     - Bekannte Limitierungen
     - Mögliche Erweiterungen

3. **Demo:**
   - Screen-Recording (2-3 Min) oder
   - Live-Demo im Team-Meeting

4. **Reflection (optional):**
   - Was war schwierig?
   - Was hast du gelernt?
   - Was würdest du anders machen?

## Bewertung

**Bestanden, wenn:**
- Alle Must-Have Features funktionieren
- Mindestens 3 Tests vorhanden und grün
- Code ist sauber und dokumentiert
- Demo zeigt funktionierende Anwendung

**Bonus-Punkte für:**
- Nice-to-Have Features implementiert
- Besonders sauberer, idiomatischer Code
- Umfangreiche Test-Abdeckung
- Herausragende UI/UX

## Hilfe & Ressourcen

**Bei Problemen:**

1. **Schaue dir bestehende Tools an:**
   - `src/modules/tools/measure/` - ähnliche Funktionalität
   - `src/modules/tools/draw/` - Visualisierung
   - `src/modules/tools/coordToolkit/` - einfaches Beispiel

2. **Dokumentation:**
   - Masterportal: https://www.masterportal.org/dokumentation
   - OpenLayers API: https://openlayers.org/en/latest/apidoc/
   - Backbone.js: https://backbonejs.org/

3. **Team fragen:**
   - Daily Standup: 11:30 Uhr
   - Dein Mentor steht zur Verfügung
   - Code-Review mit Senior-Dev vereinbaren

**FAQ-Sektion dieser Academy nutzen!**

## Los geht's!

Du hast alles gelernt, was du brauchst. Viel Erfolg bei deinem ersten großen Masterportal-Tool! 🚀

**Tipp:** Starte mit dem Minimum Viable Product (MVP) - erst wenn das funktioniert, baue Nice-to-Haves.

Bei Fragen: Nicht zögern, das Team zu fragen. Viel Erfolg! 🎉


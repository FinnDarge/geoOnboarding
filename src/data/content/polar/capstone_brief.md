# Capstone-Projekt: MeasureTool-Plugin

## 🎯 Projektziel

Entwickle ein vollständiges, produktionsreifes POLAR-Plugin, das Distanzen und Flächen auf der Karte misst. Das Plugin demonstriert alle erlernten Fähigkeiten aus den 5 Wochen: Plugin-Anatomie, OpenLayers-Integration, Testing und Release-Workflow.

## 📋 Anforderungen

### Funktionale Anforderungen

1. **Messmodi**
   - Distanz-Messung (LineString)
   - Flächen-Messung (Polygon)
   - Umschaltung zwischen Modi via Toggle-Buttons

2. **User-Interface**
   - Vuetify-Card mit Tool-Buttons
   - Anzeige der aktuellen Messung (Distanz in km, Fläche in km²)
   - "Messung löschen"-Button
   - "Messung beenden"-Button

3. **Karten-Interaktion**
   - OpenLayers Draw-Interaction
   - Geometrien werden auf der Karte gezeichnet
   - Tooltips zeigen Zwischenergebnisse beim Zeichnen
   - Features bleiben nach Beendigung sichtbar

4. **Berechnungen**
   - Geodätische Distanzberechnung (Haversine-Formel)
   - Flächen-Berechnung (Geodätisch korrekt)
   - Einheiten: Meter/Kilometer für Distanz, m²/km² für Flächen

### Technische Anforderungen

1. **Plugin-Struktur**
   - Factory-Pattern mit Options (initialMode, position)
   - Vuex-Store-Module (State, Getters, Actions, Mutations)
   - Vue-Component mit Vuetify
   - TypeScript mit strikten Types

2. **Code-Qualität**
   - ESLint ohne Fehler
   - TypeScript Type-Check ohne Fehler
   - Unit-Tests mit ≥80% Coverage
   - E2E-Test mit Playwright

3. **Dokumentation**
   - README.md mit Installation, Usage, API
   - CHANGELOG.md (v1.0.0)
   - Inline-Code-Kommentare für komplexe Logik

## 🏗️ Meilensteine

### Milestone 1: Projekt-Boilerplate ✅

**Aufgaben**:
- Erstelle Ordnerstruktur: `packages/plugins/MeasureTool/`
- `package.json` mit Dependencies (@polar/core, openlayers, vue, vuetify)
- `types.ts` mit Interfaces (MeasureToolOptions, MeasureMode, MeasureResult)
- `index.ts` mit leerer Factory und Store-Skeleton

**Acceptance Criteria**:
- ✅ Ordner existiert mit korrekter Struktur
- ✅ `npm install` läuft ohne Fehler
- ✅ TypeScript kompiliert (noch keine Funktionalität)

---

### Milestone 2: Vuex-Store implementieren ✅

**Aufgaben**:
- **State**:
  ```typescript
  {
    mode: 'distance' | 'area' | null,
    isActive: boolean,
    currentMeasurement: number | null,
    features: Feature[],
    drawInteraction: Draw | null
  }
  ```

- **Getters**:
  - `getMode`, `isActive`, `getCurrentMeasurement`, `getFeatures`

- **Mutations**:
  - `SET_MODE`, `SET_ACTIVE`, `SET_MEASUREMENT`, `ADD_FEATURE`, `CLEAR_FEATURES`, `SET_DRAW_INTERACTION`

- **Actions**:
  - `startMeasurement({ mode })`: Startet Messung mit Draw-Interaction
  - `stopMeasurement()`: Beendet Messung, entfernt Interaction
  - `clearMeasurements()`: Löscht alle Features von der Karte
  - `calculateMeasurement({ feature })`: Berechnet Distanz/Fläche

**Acceptance Criteria**:
- ✅ Store-Module ist vollständig definiert
- ✅ Actions haben korrekten Typ (async)
- ✅ Keine TypeScript-Fehler

---

### Milestone 3: Vue-Component mit UI ✅

**Aufgaben**:
- `components/MeasureToolComponent.vue` erstellen
- UI-Elemente:
  - Toggle-Buttons für Modi (v-btn-toggle)
  - Aktuelle Messung-Anzeige (v-card-text)
  - Action-Buttons (Löschen, Beenden)
- Vuex-Anbindung via `computed` und `methods`
- Styling mit Vuetify-Theme

**Beispiel-Template**:
```vue
<template>
  <v-card class="measure-tool" elevation="2">
    <v-card-title>
      <v-icon left>mdi-ruler</v-icon>
      Messwerkzeug
    </v-card-title>
    
    <v-card-text>
      <v-btn-toggle v-model="selectedMode" mandatory>
        <v-btn value="distance">
          <v-icon>mdi-ruler</v-icon>
          Distanz
        </v-btn>
        <v-btn value="area">
          <v-icon>mdi-vector-square</v-icon>
          Fläche
        </v-btn>
      </v-btn-toggle>
      
      <div v-if="currentMeasurement" class="mt-3">
        <strong>Messung:</strong>
        {{ formattedMeasurement }}
      </div>
    </v-card-text>
    
    <v-card-actions>
      <v-btn @click="handleClear" color="error" small>
        Löschen
      </v-btn>
      <v-btn @click="handleStop" color="primary" small>
        Beenden
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
```

**Acceptance Criteria**:
- ✅ Component rendert in Snowbox
- ✅ Buttons sind klickbar (noch ohne Funktionalität)
- ✅ Vuetify-Styling ist konsistent

---

### Milestone 4: OpenLayers-Integration ✅

**Aufgaben**:
- Implementiere `startMeasurement`-Action:
  - Erstelle VectorSource und VectorLayer für Measurements
  - Füge Draw-Interaction hinzu (type: 'LineString' oder 'Polygon')
  - Event-Listener: `drawend` → `calculateMeasurement`

- Implementiere `calculateMeasurement`-Action:
  - Nutze `getLength()` (ol/sphere) für Distanzen
  - Nutze `getArea()` (ol/sphere) für Flächen
  - Formatiere Ergebnis (m → km bei > 1000m)

- Implementiere `clearMeasurements`-Action:
  - Entferne alle Features von VectorSource
  - Reset State

**Beispiel-Code**:
```typescript
import { Draw } from 'ol/interaction'
import { Vector as VectorSource } from 'ol/source'
import { Vector as VectorLayer } from 'ol/layer'
import { getLength, getArea } from 'ol/sphere'

actions: {
  startMeasurement({ commit, rootGetters }, { mode }) {
    const map = rootGetters['map/getMap']
    
    // Vector-Layer für Messungen (falls noch nicht vorhanden)
    let measureLayer = map.getLayers().getArray().find(l => l.get('name') === 'measure')
    if (!measureLayer) {
      const source = new VectorSource()
      measureLayer = new VectorLayer({ source, properties: { name: 'measure' } })
      map.addLayer(measureLayer)
    }
    
    // Draw-Interaction
    const drawInteraction = new Draw({
      source: measureLayer.getSource(),
      type: mode === 'distance' ? 'LineString' : 'Polygon'
    })
    
    drawInteraction.on('drawend', (event) => {
      this.dispatch('plugins/measureTool/calculateMeasurement', { feature: event.feature })
    })
    
    map.addInteraction(drawInteraction)
    commit('SET_DRAW_INTERACTION', drawInteraction)
    commit('SET_ACTIVE', true)
  },
  
  calculateMeasurement({ commit, state }, { feature }) {
    const geometry = feature.getGeometry()
    let measurement = 0
    
    if (state.mode === 'distance') {
      measurement = getLength(geometry, { projection: 'EPSG:3857' })
    } else {
      measurement = getArea(geometry, { projection: 'EPSG:3857' })
    }
    
    commit('SET_MEASUREMENT', measurement)
  }
}
```

**Acceptance Criteria**:
- ✅ Zeichnen auf Karte funktioniert
- ✅ Messung wird berechnet und angezeigt
- ✅ Löschen entfernt Features von Karte
- ✅ Modi-Wechsel funktioniert

---

### Milestone 5: NineLayoutTag & Integration ✅

**Aufgaben**:
- Konfiguriere `nineLayoutTag: 'top-right'` in Factory
- Registriere Plugin in `packages/clients/generic/src/addPlugins.ts`:
  ```typescript
  import { MeasureTool } from '@polar/measure-tool'
  
  export const plugins = [
    // ...
    MeasureTool({ position: 'top-right' })
  ]
  ```
- Teste in Snowbox

**Acceptance Criteria**:
- ✅ Plugin erscheint an korrekter Position in Snowbox
- ✅ Keine Überlappung mit anderen Plugins
- ✅ Responsive Verhalten auf Mobile

---

### Milestone 6: Unit-Tests (≥80% Coverage) ✅

**Aufgaben**:
- Erstelle `__tests__/measureTool.spec.ts`
- **Store-Tests** (mindestens 12 Tests):
  - Mutations: SET_MODE, SET_ACTIVE, SET_MEASUREMENT, ADD_FEATURE, CLEAR_FEATURES
  - Actions: startMeasurement, stopMeasurement, clearMeasurements, calculateMeasurement
  - Getters: Alle Getters testen

- **Component-Tests** (mindestens 6 Tests):
  - Rendering mit verschiedenen States
  - Button-Clicks triggern Actions
  - Conditional Rendering (z.B. Messung nur anzeigen wenn vorhanden)
  - Mode-Wechsel

- **Utility-Tests** (falls separate Utility-Funktionen):
  - Formatierung (z.B. `formatDistance(1234)` → "1.23 km")

**Beispiel-Test**:
```typescript
describe('MeasureTool Store', () => {
  it('startMeasurement adds draw interaction to map', async () => {
    const mockMap = {
      addInteraction: jest.fn(),
      addLayer: jest.fn(),
      getLayers: () => ({ getArray: () => [] })
    }
    
    const store = createStore({
      modules: {
        map: { getters: { getMap: () => mockMap } },
        plugins: { modules: { measureTool: measureToolStore } }
      }
    })
    
    await store.dispatch('plugins/measureTool/startMeasurement', { mode: 'distance' })
    
    expect(mockMap.addInteraction).toHaveBeenCalled()
    expect(store.state.plugins.measureTool.isActive).toBe(true)
  })
})
```

**Acceptance Criteria**:
- ✅ `npm test MeasureTool` läuft ohne Fehler
- ✅ Coverage ≥ 80% für alle Metriken (Statements, Branches, Functions, Lines)
- ✅ Tests sind aussagekräftig (keine "smoke tests")

---

### Milestone 7: E2E-Test mit Playwright ✅

**Aufgaben**:
- Erstelle `e2e/measureTool.spec.ts`
- **Test-Szenarien**:
  1. Plugin ist sichtbar in Snowbox
  2. Distanz-Messung: Klicke Punkte auf Karte → Messung wird angezeigt
  3. Flächen-Messung: Zeichne Polygon → Fläche wird berechnet
  4. Löschen-Button entfernt Messungen
  5. Modi-Wechsel funktioniert

**Beispiel-Test**:
```typescript
test('measures distance on map', async ({ page }) => {
  await page.goto('http://localhost:5173')
  
  // Warte auf MeasureTool-Plugin
  await expect(page.locator('.measure-tool')).toBeVisible()
  
  // Wähle Distanz-Modus (sollte bereits aktiv sein)
  await page.click('button[value="distance"]')
  
  // Klicke zwei Punkte auf Karte (koordinaten relativ zu Map-Element)
  const mapElement = page.locator('#map')
  const box = await mapElement.boundingBox()
  
  await page.mouse.click(box.x + 100, box.y + 100) // Startpunkt
  await page.mouse.dblclick(box.x + 300, box.y + 100) // Endpunkt (dblclick beendet Zeichnen)
  
  // Warte auf Messung
  await page.waitForTimeout(500)
  
  // Messung sollte angezeigt werden (>0)
  const measurementText = await page.locator('.measure-tool .v-card-text').textContent()
  expect(measurementText).toContain('km') // oder 'm' je nach Distanz
})
```

**Acceptance Criteria**:
- ✅ E2E-Tests passieren: `npm run test:e2e measureTool`
- ✅ Tests laufen in Chrome, Firefox, Safari
- ✅ Tests sind stabil (keine Flakiness)

---

### Milestone 8: README & Release ✅

**Aufgaben**:
- **README.md** erstellen:
  ```markdown
  # @polar/measure-tool
  
  A POLAR plugin for measuring distances and areas on the map.
  
  ## Installation
  \`\`\`bash
  npm install @polar/measure-tool
  \`\`\`
  
  ## Usage
  \`\`\`typescript
  import { MeasureTool } from '@polar/measure-tool'
  
  const plugins = [
    MeasureTool({
      position: 'top-right',
      initialMode: 'distance'
    })
  ]
  \`\`\`
  
  ## API
  
  ### Options
  - `position`: NineLayoutTag position (default: 'top-right')
  - `initialMode`: 'distance' | 'area' (default: 'distance')
  
  ### Store Actions
  - `startMeasurement({ mode })`: Start measurement
  - `stopMeasurement()`: Stop measurement
  - `clearMeasurements()`: Remove all measurements
  
  ## License
  MIT
  ```

- **CHANGELOG.md** erstellen:
  ```markdown
  # Changelog - @polar/measure-tool
  
  ## [1.0.0] - 2024-02-13
  
  ### Added
  - Initial release
  - Distance measurement (geodetic, LineString)
  - Area measurement (geodetic, Polygon)
  - Vuetify UI with mode toggle
  - OpenLayers Draw integration
  - Unit tests (85% coverage)
  - E2E tests with Playwright
  ```

- **package.json** finalisieren:
  ```json
  {
    "name": "@polar/measure-tool",
    "version": "1.0.0",
    "description": "Measure distances and areas on POLAR maps",
    "main": "dist/index.js",
    "types": "dist/index.d.ts",
    "files": ["dist"],
    "publishConfig": {
      "access": "public"
    },
    "peerDependencies": {
      "@polar/core": "^2.0.0",
      "vue": "^3.3.0",
      "vuetify": "^3.0.0"
    }
  }
  ```

**Acceptance Criteria**:
- ✅ README ist vollständig und verständlich
- ✅ CHANGELOG folgt Keep a Changelog Format
- ✅ package.json ist korrekt konfiguriert
- ✅ Dry-Run: `npm publish --dry-run` erfolgreich

---

## 📊 Demo-Checkliste

Vor der finalen Präsentation stelle sicher:

### Funktionalität
- [ ] Snowbox startet ohne Fehler: `npm run snowbox`
- [ ] MeasureTool-Plugin ist sichtbar und korrekt positioniert
- [ ] Distanz-Messung funktioniert (mehrere Punkte klicken)
- [ ] Flächen-Messung funktioniert (Polygon zeichnen)
- [ ] Messergebnisse sind korrekt und formatiert (km, km²)
- [ ] Löschen-Button entfernt alle Messungen von Karte
- [ ] Beenden-Button stoppt aktuelle Messung
- [ ] Modi-Wechsel funktioniert ohne Reload

### Code-Qualität
- [ ] ESLint: `npm run lint` → keine Fehler
- [ ] TypeScript: `npm run type-check` → keine Fehler
- [ ] Unit-Tests: `npm test MeasureTool` → alle grün, Coverage ≥80%
- [ ] E2E-Tests: `npm run test:e2e measureTool` → alle grün
- [ ] Build: `npm run build --scope=@polar/measure-tool` → dist/ korrekt

### Dokumentation
- [ ] README.md mit klaren Anweisungen
- [ ] CHANGELOG.md mit v1.0.0-Eintrag
- [ ] Inline-Code-Kommentare für komplexe Logik
- [ ] TypeScript-Interfaces sind dokumentiert (JSDoc)

### Code-Review-Readiness
- [ ] Sinnvolle Commit-Messages (Conventional Commits)
- [ ] Branch-Name: `feature/measure-tool-plugin`
- [ ] PR-Beschreibung vorbereitet (Motivation, Changes, Screenshots)
- [ ] Keine Debug-Console-Logs im Production-Code
- [ ] Keine TODO-Kommentare ohne Tickets

---

## 🎓 Bewertungskriterien

| Kriterium | Gewichtung | Beschreibung |
|-----------|------------|--------------|
| **Funktionalität** | 25% | Feature funktioniert wie spezifiziert, keine Bugs |
| **Code-Qualität** | 25% | Sauberer Code, TypeScript-Types, ESLint-Compliance |
| **Tests** | 20% | Unit-Tests + E2E-Tests, Coverage ≥80% |
| **Architektur** | 15% | Plugin folgt POLAR-Patterns (Factory, Store, 9Layout) |
| **Dokumentation** | 10% | README, CHANGELOG, Code-Kommentare |
| **Git/Workflow** | 5% | Sinnvolle Commits, Branch-Management |

**Passing Grade**: ≥70% Gesamtpunktzahl

---

## 💡 Hilfreiche Ressourcen

- **OpenLayers Docs**: https://openlayers.org/en/latest/apidoc/
  - Draw Interaction: https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw.html
  - Sphere Module (Distanz/Fläche): https://openlayers.org/en/latest/apidoc/module-ol_sphere.html

- **Vuetify Components**: https://vuetifyjs.com/en/components/
  - Buttons: https://vuetifyjs.com/en/components/buttons/
  - Cards: https://vuetifyjs.com/en/components/cards/

- **Playwright Docs**: https://playwright.dev/docs/intro
  - Mouse Actions: https://playwright.dev/docs/api/class-mouse

- **POLAR-Referenz-Plugins**:
  - Zoom-Plugin (einfach): `packages/plugins/Zoom/`
  - LayerChooser-Plugin (komplex): `packages/plugins/LayerChooser/`

---

**Viel Erfolg! 🚀** Bei Fragen wende dich an deinen Mentor oder nutze die POLAR-Community (Slack, GitHub Discussions).

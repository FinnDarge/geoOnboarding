# Woche 2: Plugin-Anatomie

## 🎯 Lernziele

Nach dieser Woche kannst du:
- Ein neues Plugin von Grund auf erstellen
- Store-Module mit State, Getters, Actions und Mutations implementieren
- Vue-Components mit Vuetify-Komponenten bauen
- Das 9Layout-System verstehen und nutzen
- OpenLayers-Interactions in Plugins integrieren

## 📚 Pflichtlektüre

1. **packages/plugins/Zoom/index.ts**
   - Vollständige Plugin-Implementierung
   - Store-Module-Definition
   - Factory-Funktion mit Options

2. **packages/plugins/Zoom/components/ZoomComponent.vue**
   - Vuetify-Button-Components
   - Vuex-Store-Anbindung (mapActions, mapGetters)
   - Event-Handling

3. **packages/plugins/LayerChooser/index.ts**
   - Komplexeres Plugin-Beispiel
   - Verschachtelte Store-Structure (Layer-Array)
   - Dynamische Component-Rendering

4. **packages/core/src/types/plugin.ts**
   - Plugin-Interface-Definition
   - Pflichtfelder und optionale Properties
   - Type-Guards

5. **packages/core/docs/9layout.md**
   - Dokumentation des 9-Zonen-Layout-Systems
   - NineLayoutTag und Positionierung
   - Responsive Behavior

6. **packages/plugins/MeasureTool/** (falls vorhanden, sonst ähnliches Tool-Plugin)
   - OpenLayers-Interaction-Beispiel
   - Event-Listener-Management
   - Geometrie-Berechnungen

## 🏗️ Plugin-Anatomie im Detail

### Dateistruktur eines Plugins

```
packages/plugins/MyPlugin/
├── index.ts              # Factory & Store-Export
├── types.ts              # TypeScript Interfaces
├── components/
│   ├── MyPluginComponent.vue    # Haupt-Component
│   └── MyPluginSubComponent.vue # Sub-Components
├── utils/
│   └── calculations.ts   # Helper-Funktionen
├── __tests__/
│   └── myPlugin.spec.ts  # Unit-Tests
└── package.json          # Plugin-Dependencies
```

### Factory-Funktion (index.ts)

```typescript
import { MyPluginOptions } from './types'
import MyPluginComponent from './components/MyPluginComponent.vue'

// Store-Module
const myPluginStore = {
  namespaced: true,
  state: () => ({
    active: false,
    value: 0
  }),
  getters: {
    isActive: (state) => state.active
  },
  mutations: {
    SET_ACTIVE(state, active) {
      state.active = active
    }
  },
  actions: {
    toggle({ commit, state }) {
      commit('SET_ACTIVE', !state.active)
    }
  }
}

// Factory
export const MyPlugin = (options?: MyPluginOptions) => ({
  name: 'myPlugin',
  storeModule: myPluginStore,
  component: MyPluginComponent,
  nineLayoutTag: options?.position || 'top-left',
  // Weitere Config...
})
```

### Vue-Component mit Vuetify

```vue
<template>
  <v-card class="my-plugin">
    <v-card-title>My Plugin</v-card-title>
    <v-card-text>
      <v-btn @click="handleClick" color="primary">
        Action
      </v-btn>
      <div>{{ currentValue }}</div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const currentValue = computed(() => 
  store.getters['plugins/myPlugin/getValue']
)

const handleClick = () => {
  store.dispatch('plugins/myPlugin/increment')
}
</script>

<style scoped>
.my-plugin {
  max-width: 300px;
}
</style>
```

## 🎨 9Layout-System

POLAR nutzt ein 9-Zonen-Grid für Plugin-Positionierung:

```
┌─────────────────────────────────────┐
│ top-left    top-center   top-right  │
│                                     │
│                                     │
│ mid-left      (Map)      mid-right │
│                                     │
│                                     │
│ bottom-left bottom-center bottom-.. │
└─────────────────────────────────────┘
```

**NineLayoutTag**: Jedes Plugin definiert seine Position via `nineLayoutTag` Property.

Beispiele:
- `Zoom` → `top-left`
- `LayerChooser` → `top-right`
- `Attribution` → `bottom-right`

## 🔧 OpenLayers-Integration

### Map-Zugriff im Plugin

```typescript
// In Store-Action
actions: {
  zoomIn({ rootGetters }) {
    const map = rootGetters['map/getMap'] // OpenLayers Map-Instanz
    const view = map.getView()
    view.animate({ zoom: view.getZoom() + 1 })
  }
}
```

### Interaction hinzufügen

```typescript
import { Draw } from 'ol/interaction'
import { Vector as VectorSource } from 'ol/source'

actions: {
  startDrawing({ rootGetters, commit }) {
    const map = rootGetters['map/getMap']
    const source = new VectorSource()
    
    const drawInteraction = new Draw({
      source,
      type: 'LineString'
    })
    
    drawInteraction.on('drawend', (event) => {
      commit('ADD_FEATURE', event.feature)
    })
    
    map.addInteraction(drawInteraction)
    commit('SET_DRAW_INTERACTION', drawInteraction)
  },
  
  stopDrawing({ state, rootGetters }) {
    if (state.drawInteraction) {
      const map = rootGetters['map/getMap']
      map.removeInteraction(state.drawInteraction)
    }
  }
}
```

## 🛠️ Hands-on: Counter-Plugin erstellen

Erstelle ein vollständiges "Counter"-Plugin mit folgenden Features:

### Requirements
- **UI**: Zwei Buttons (+ / -) und Anzeige des aktuellen Werts
- **Store**: State mit `count`, Actions `increment` / `decrement`, Getter `getCount`
- **Position**: `top-left` im 9Layout
- **Styling**: Vuetify-Components mit Primary-Color

### Acceptance Criteria
- ✅ Counter startet bei 0
- ✅ Buttons funktionieren und ändern den Count
- ✅ Store-Modul ist unter `plugins/counter` registriert
- ✅ Component nutzt Vuetify (`v-btn`, `v-card`)
- ✅ TypeScript ohne Fehler
- ✅ Plugin erscheint in Snowbox an korrekter Position

### Schritt-für-Schritt

1. **Ordner erstellen**: `packages/plugins/Counter/`
2. **types.ts**: Interface für Options definieren
3. **index.ts**: Factory + Store-Module implementieren
4. **components/CounterComponent.vue**: UI bauen
5. **addPlugins.ts**: Plugin registrieren: `Counter()`
6. **Testen**: Snowbox starten und Counter bedienen

## 📝 Knowledge Check

1. **Was ist der Unterschied zwischen einem Getter und einer Computed Property in der Component?**
   - Getter: Vuex-Store-Ebene (für Store-Logik)
   - Computed: Component-Ebene (nutzt oft Getter)

2. **Warum ist `namespaced: true` im Store-Module wichtig?**
   - Verhindert Namenskollisionen zwischen Plugins
   - Ermöglicht Scoped Actions/Mutations: `plugins/myPlugin/action`

3. **Wann sollte man eine Action statt einer Mutation nutzen?**
   - Actions für asynchrone Operationen (API-Calls, Map-Interactions)
   - Mutations nur für synchrone State-Änderungen

4. **Wie greift ein Plugin auf die OpenLayers-Map zu?**
   - Via `rootGetters['map/getMap']` im Store

5. **Was passiert, wenn zwei Plugins den gleichen `nineLayoutTag` haben?**
   - Beide werden in der gleichen Zone gerendert (übereinander oder nebeneinander, je nach CSS)

## 🚀 Bonus-Challenge

Erweitere das Counter-Plugin:

1. **Reset-Button**: Setzt Counter auf 0 zurück
2. **Persistent State**: Speichere Count im LocalStorage und lade beim Start
3. **Max-Value**: Warnung (Toast oder Dialog), wenn Counter > 10
4. **Animation**: Vuetify Transition beim Count-Wechsel
5. **Unit-Tests**: Teste Store-Actions mit Jest

---

**Checkpoint**: Du solltest jetzt eigenständig neue Plugins erstellen können. In Woche 3 lernst du, wie Clients Plugins konfigurieren und Specialized Clients aufgebaut werden.

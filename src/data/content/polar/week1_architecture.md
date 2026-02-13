# Woche 1: POLAR-Architektur & Setup

## 🎯 Lernziele

Nach dieser Woche kannst du:
- Die Monorepo-Struktur von POLAR navigieren und verstehen
- Snowbox lokal starten und debuggen
- Die Rolle von Core, Plugins und Clients erklären
- Das Plugin-System und Factory Pattern beschreiben
- Den Vuex-Store inspizieren und Plugin-State nachvollziehen

## 📚 Pflichtlektüre

Lies die folgenden Files im POLAR-Repository:

1. **README.md** (Repo-Root)
   - Überblick über das gesamte Projekt
   - Architektur-Diagramm
   - Quick Start Guide

2. **nx.json**
   - Monorepo-Konfiguration mit Nx
   - Build-Targets und Task-Dependencies
   - Verstehe, wie `npm run snowbox` intern aufgelöst wird

3. **packages/core/docs/gettingStarted.md**
   - Core-Konzepte: Map-Lifecycle, Store-Setup
   - Plugin-Entwicklung Basics
   - API-Übersicht

4. **packages/core/src/createMap.ts**
   - Entry-Point der Map-Initialisierung
   - Plugin-Registration und -Lifecycle
   - OpenLayers-Integration

5. **packages/clients/generic/src/polar-client.ts**
   - Client-Entry-Point
   - Vue-App-Setup
   - Router und Store-Integration

6. **packages/clients/generic/src/addPlugins.ts**
   - Wie Plugins zum Client hinzugefügt werden
   - Plugin-Konfiguration
   - Store-Paths und Namespacing

## 🏗️ Architektur-Konzepte

### Monorepo-Struktur

POLAR nutzt Nx als Monorepo-Tool:
- **Packages**: Einzelne NPM-Packages mit eigenen `package.json`
- **Shared Dependencies**: `node_modules` im Root
- **Task Orchestration**: `nx run <target>` für Builds, Tests, etc.

### Core, Plugins, Clients

```
┌─────────────────────────────────────────┐
│           Client (Snowbox)              │
│  - Vue App Entry                        │
│  - Plugin Registration (addPlugins.ts)  │
│  - Map Configuration                    │
└────────────┬────────────────────────────┘
             │ importiert
             ↓
┌─────────────────────────────────────────┐
│              Core                       │
│  - createMap()                          │
│  - Store-Setup                          │
│  - Plugin-Lifecycle                     │
└────────────┬────────────────────────────┘
             │ lädt
             ↓
┌─────────────────────────────────────────┐
│         Plugins (Zoom, etc.)            │
│  - Factory-Funktion                     │
│  - Store-Module                         │
│  - Vue-Components                       │
└─────────────────────────────────────────┘
```

### Plugin-Lifecycle

1. **Registration**: Client ruft Plugin-Factory in `addPlugins.ts`
2. **Store-Module**: Plugin registriert Vuex-Module
3. **Component-Mounting**: Vue-Component wird in 9Layout eingehängt
4. **Map-Interaction**: Plugin interagiert mit OpenLayers-Map via Core-API

### Factory Pattern

Jedes Plugin exportiert eine Factory-Funktion:

```typescript
export const Zoom = (options?: ZoomOptions) => {
  return {
    name: 'zoom',
    storeModule: zoomStoreModule,
    component: ZoomComponent,
    // ...weitere Config
  }
}
```

Vorteile:
- **Konfigurierbar**: Options können übergeben werden
- **Lazy Loading**: Plugin wird erst bei Bedarf initialisiert
- **Testbar**: Factory kann mit Mock-Options getestet werden

## 🔍 Hands-on: Snowbox erkunden

### Task 1: Snowbox starten und DevTools nutzen

1. Starte Snowbox: `npm run snowbox`
2. Öffne Browser DevTools (F12)
3. Navigiere zum **Vue Tab** (ggf. Vue DevTools Extension installieren)
4. Inspiziere die Component-Hierarchie: Finde `<Zoom>`, `<LayerChooser>`, etc.
5. Wechsle zum **Vuex Tab**:
   - Finde das `zoom`-Modul im State
   - Trigger eine Zoom-Action (+ Button in der Karte klicken)
   - Beobachte die State-Änderung in DevTools

### Task 2: Plugin-Liste erstellen

Erstelle eine Markdown-Liste aller verfügbaren Plugins:

1. Navigiere zu `packages/plugins/`
2. Liste alle Ordner auf
3. Für jedes Plugin: Öffne `index.ts` und notiere den Plugin-Namen (aus Factory-Export)
4. Gruppiere Plugins nach Kategorie (z.B. "Map Control", "Layer Management", "Tools")

Beispiel-Struktur:
```markdown
## Map Controls
- Zoom
- PanButtons
- ...

## Layer Management
- LayerChooser
- ...
```

### Task 3: Store-Struktur dokumentieren

Öffne `packages/core/src/types/store.ts` (oder ähnliche Type-Definition) und:

1. Identifiziere das Root-State-Interface
2. Liste alle Top-Level-Module auf (z.B. `map`, `plugins`, ...)
3. Erkläre in eigenen Worten, warum Plugins ihre eigenen Store-Module haben

## 📝 Knowledge Check

Beantworte die folgenden Fragen (schriftlich oder im Pair-Discussion):

1. **Was ist der Unterschied zwischen einem Client und einem Plugin?**
   - Client = Anwendung (z.B. Snowbox), die Plugins nutzt
   - Plugin = Feature-Modul (z.B. Zoom), das in Clients integriert wird

2. **Warum nutzt POLAR ein Monorepo statt separater Repositories?**
   - Gemeinsame Dependencies
   - Atomare Commits über Package-Grenzen hinweg
   - Einfachere lokale Entwicklung (kein npm link)

3. **Wo wird die OpenLayers-Map-Instanz erstellt?**
   - In `packages/core/src/createMap.ts`

4. **Wie kommunizieren Plugins untereinander?**
   - Über den zentralen Vuex-Store
   - Plugins können State anderer Plugins lesen (via Getters)
   - Plugins können Actions anderer Plugins dispatchen

5. **Was ist der Vorteil des Factory Patterns bei Plugins?**
   - Konfigurierbarkeit zur Laufzeit
   - Lazy Initialization
   - Bessere Testbarkeit

## 🚀 Bonus-Challenge

Erstelle ein minimales "Hello World"-Plugin:

1. Erstelle einen neuen Ordner: `packages/plugins/HelloWorld/`
2. Implementiere:
   - `index.ts` mit Factory-Funktion
   - Einfaches Store-Module (State mit `message: 'Hello POLAR!'`)
   - Vue-Component, die `message` anzeigt
3. Registriere Plugin in `addPlugins.ts`
4. Starte Snowbox und verifiziere, dass "Hello POLAR!" angezeigt wird

Akzeptanzkriterien:
- ✅ Plugin erscheint in Vuex-DevTools unter `plugins/helloWorld`
- ✅ Component ist im DOM sichtbar
- ✅ Keine TypeScript-Fehler

---

**Checkpoint**: Bis Ende Woche 1 solltest du Snowbox fehlerfrei starten können und die grundlegende Architektur verstehen. Alle Fragen klären, bevor du zu Woche 2 gehst!

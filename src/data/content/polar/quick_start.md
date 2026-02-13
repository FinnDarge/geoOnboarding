# POLAR in 15 Minuten

## Was ist POLAR?

**POLAR** (Plugin-based OpenLayers Application Runtime) ist ein modernes OpenLayers-Plugin-Framework, das auf Vue 3, Vuetify und Vuex basiert. Es ermöglicht die schnelle Entwicklung von WebGIS-Anwendungen durch ein modulares Plugin-System.

### Kernmerkmale
- 🧩 **Plugin-basierte Architektur**: Jede Feature ist ein eigenständiges, wiederverwendbares Plugin
- 📦 **Monorepo-Struktur**: Alle Packages (Core, Plugins, Clients) in einem Repository
- 🎨 **Vue 3 + Vuetify**: Moderne Reactive UI mit Material Design
- 🗺️ **OpenLayers Integration**: Vollständige Karteninteraktionen und Layer-Management
- 🔄 **Vuex State Management**: Zentrale Store-Architektur für Plugin-Kommunikation

## Repo-Struktur

```
polar/
├── packages/
│   ├── core/                  # Kern-Framework (createMap, Store-Setup)
│   │   ├── src/
│   │   │   ├── createMap.ts   # Map-Initialisierung
│   │   │   ├── types/         # TypeScript-Definitionen
│   │   │   └── utils/         # Hilfs-Funktionen
│   │   └── package.json
│   │
│   ├── plugins/               # Alle Plugins (Zoom, LayerChooser, etc.)
│   │   ├── Zoom/
│   │   │   ├── index.ts       # Plugin Factory & Store
│   │   │   ├── components/    # Vue-Components
│   │   │   └── types.ts       # Plugin-spezifische Types
│   │   ├── LayerChooser/
│   │   ├── AddressSearch/
│   │   └── ...
│   │
│   ├── clients/               # Anwendungs-Clients
│   │   ├── generic/           # Generic Client (Snowbox)
│   │   │   ├── src/
│   │   │   │   ├── polar-client.ts      # Client-Entry
│   │   │   │   ├── addPlugins.ts        # Plugin-Registration
│   │   │   │   └── mapConfiguration.ts  # Map-Config
│   │   │   └── index.html
│   │   └── specialized/       # Spezialisierte Clients
│   │
│   └── lib-build/             # Build-Tools (Vite Config)
│
├── e2e/                       # Playwright E2E-Tests
│   ├── zoom.spec.ts
│   └── fixtures/
│
├── nx.json                    # Nx Monorepo Config
├── jest.config.ts             # Test Config
├── publishPackages.js         # Release Script
└── README.md                  # Haupt-Dokumentation
```

## Setup-Kommandos

### Voraussetzungen
- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# Repository klonen
git clone https://github.com/your-org/polar.git
cd polar

# Dependencies installieren
npm install

# Snowbox (Generic Client) starten
npm run snowbox

# Browser öffnet automatisch: http://localhost:5173
```

### Weitere Kommandos

```bash
# Alle Tests ausführen
npm test

# E2E-Tests
npm run test:e2e

# Type-Checking
npm run type-check

# Spezifisches Plugin builden
npm run build --scope=@polar/zoom

# Alle Packages builden
npm run build:all
```

## Erste Anlaufstellen – Map

### 1. **README.md** (Repo-Root)
   - Architektur-Übersicht
   - Getting Started Guide
   - Contribution Guidelines

### 2. **packages/core/docs/gettingStarted.md**
   - Setup-Details
   - Core-Konzepte (Store, Map-Lifecycle)
   - Plugin-Development Basics

### 3. **packages/plugins/Zoom/index.ts**
   - Referenz-Implementierung eines einfachen Plugins
   - Factory Pattern
   - Store-Module-Registration

### 4. **packages/clients/generic/src/addPlugins.ts**
   - Wie Plugins registriert werden
   - Plugin-Konfiguration und -Initialisierung
   - Vuex-Paths und Store-Mapping

### 5. **packages/core/src/createMap.ts**
   - Map-Initialisierung
   - Plugin-Lifecycle
   - Store-Setup

### 6. **e2e/zoom.spec.ts**
   - E2E-Test-Beispiel
   - Playwright-Patterns
   - UI-Interaktions-Tests

### 7. **CONTRIBUTING.md**
   - Code-Style & Linting
   - PR-Prozess
   - Release-Workflow

## Nächste Schritte

1. **Snowbox lokal starten** und mit der Karte interagieren
2. **Plugin-Liste erkunden**: Alle verfügbaren Plugins in `packages/plugins/`
3. **Ein einfaches Plugin lesen**: Start mit `Zoom` oder `PanButtons`
4. **Store-Architektur verstehen**: DevTools öffnen und Vuex-State inspizieren
5. **Erstes Feature-Branch**: `git checkout -b feature/my-first-change`

---

**Tipp**: Nutze die Browser DevTools (F12) → Vue Tab, um die Component-Hierarchie und Vuex-State live zu inspizieren!

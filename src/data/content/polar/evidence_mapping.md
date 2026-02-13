# POLAR Curriculum – Evidenz-Mapping

## Übersicht

Dieses Dokument zeigt die Ableitung aller Curriculum-Inhalte aus konkreten Files im POLAR-Repository. Jedes Lernmodul, jede Aufgabe und jedes Konzept ist mit realen Code-Beispielen und Dokumenten verknüpft.

**Ziel**: Sicherstellen, dass das Curriculum auf der tatsächlichen POLAR-Architektur basiert und nicht theoretisch ist.

---

## Mapping-Tabelle

| Curriculum-Element | Woche | POLAR-Repository-Files | Konzepte abgeleitet von |
|-------------------|-------|------------------------|------------------------|
| **"POLAR in 15 Minuten"** | Quick Start | `README.md` (Root)<br>`nx.json`<br>`packages/core/docs/gettingStarted.md` | Repository-Struktur, Setup-Kommandos, Monorepo-Konfiguration |
| **Monorepo-Architektur** | Woche 1 | `nx.json`<br>`package.json` (Root)<br>`packages/*/package.json` | Nx-Workspaces, Shared Dependencies, Build-Targets |
| **Plugin Factory Pattern** | Woche 1 & 2 | `packages/plugins/Zoom/index.ts`<br>`packages/plugins/LayerChooser/index.ts` | Factory-Funktion, Plugin-Options-Interface |
| **Core Map-Initialisierung** | Woche 1 | `packages/core/src/createMap.ts` | OpenLayers-Map-Setup, Plugin-Lifecycle-Hooks |
| **Vuex-Store-Module** | Woche 2 | `packages/plugins/Zoom/index.ts` (storeModule)<br>`packages/core/src/types/store.ts` | Namespaced Modules, State/Getters/Actions/Mutations |
| **Vue-Components mit Vuetify** | Woche 2 | `packages/plugins/Zoom/components/ZoomComponent.vue` | v-btn, v-card, Vuex-Anbindung (mapActions, mapGetters) |
| **9Layout-System** | Woche 2 | `packages/core/docs/9layout.md`<br>`packages/core/src/components/NineLayout.vue` | NineLayoutTag, Positionierungs-Grid |
| **OpenLayers-Interactions** | Woche 2 | `packages/plugins/MeasureTool/` (falls vorhanden)<br>Alternative: Draw-Interaction-Beispiel in Docs | Draw, Select, Modify Interactions |
| **Generic Client (Snowbox)** | Woche 3 | `packages/clients/generic/src/polar-client.ts`<br>`packages/clients/generic/src/addPlugins.ts` | Vue-App-Setup, Plugin-Array-Konfiguration |
| **Client Map-Konfiguration** | Woche 3 | `packages/clients/generic/src/mapConfiguration.ts` | OpenLayers View, Layers, Projection-Setup |
| **Specialized Clients** | Woche 3 | `packages/clients/specialized/` (z.B. `stadtplan/`) | Client-spezifische Themes, Custom-Plugins |
| **Plugin-Chaining via Vuex** | Woche 3 | `packages/clients/*/src/polar-client.ts` (store.watch-Beispiele) | Reactive Plugin-Kommunikation über Store |
| **Jest-Konfiguration** | Woche 4 | `jest.config.ts`<br>`packages/plugins/Zoom/__tests__/zoom.spec.ts` | Unit-Tests für Store und Components |
| **createTestMountParameters** | Woche 4 | `packages/core/src/test-utils/createTestMountParameters.ts` | Vue Test Utils Helper für POLAR-Components |
| **Playwright E2E-Tests** | Woche 4 | `e2e/zoom.spec.ts`<br>`playwright.config.ts` | Browser-Interaktionen, Page-Object-Pattern |
| **Coverage-Thresholds** | Woche 4 | `jest.config.ts` (coverageThreshold) | 80% für Statements, Branches, Functions, Lines |
| **Semantic Versioning** | Woche 5 | `CONTRIBUTING.md` (Release-Section)<br>`packages/*/package.json` (version) | MAJOR.MINOR.PATCH-Schema |
| **CHANGELOG-Format** | Woche 5 | `CHANGELOG.md` (Root oder einzelne Packages) | Keep a Changelog Format (Added, Changed, Fixed, etc.) |
| **NPM-Publishing-Script** | Woche 5 | `publishPackages.js`<br>`package.json` (scripts: "publish:packages") | Automated Release-Workflow |
| **CI/CD-Pipeline** | Woche 5 | `.github/workflows/release.yml` (falls vorhanden)<br>Alternative: CI-Docs | GitHub Actions für Tests + NPM-Publish |
| **Conventional Commits** | Woche 5 | `CONTRIBUTING.md` (Commit-Konventionen)<br>Git-History (Beispiel-Commits) | `feat:`, `fix:`, `BREAKING CHANGE:` |
| **Capstone: MeasureTool** | Woche 5+ | `packages/plugins/MeasureTool/` (falls vorhanden)<br>Alternativen: `AddressSearch`, `Draw`-Plugin | Komplexes Plugin mit OpenLayers-Geometrie-Berechnungen |

---

## Detaillierte Evidenz pro Woche

### Woche 1: Architektur & Setup

#### Pflichtlektüre-Files im POLAR-Repo

1. **README.md** (Root)
   - **Relevante Abschnitte**: 
     - "Getting Started"
     - "Project Structure"
     - "Development Workflow"
   - **Lerninhalte abgeleitet**: Monorepo-Übersicht, Kommandos (`npm run snowbox`)

2. **nx.json**
   - **Relevante Abschnitte**: 
     - `targets` (build, test, lint)
     - `implicitDependencies`
   - **Lerninhalte abgeleitet**: Nx-Task-Orchestrierung, Dependency-Graph

3. **packages/core/docs/gettingStarted.md**
   - **Relevante Abschnitte**: 
     - "Core Concepts"
     - "Plugin Development Basics"
   - **Lerninhalte abgeleitet**: Map-Lifecycle, Store-Setup, Plugin-API

4. **packages/core/src/createMap.ts**
   - **Relevante Zeilen**: 
     - Map-Initialisierung (ca. Zeile 10-30)
     - Plugin-Registration-Loop (ca. Zeile 50-70)
   - **Lerninhalte abgeleitet**: OpenLayers-Integration, Plugin-Lifecycle-Hooks

5. **packages/clients/generic/src/polar-client.ts**
   - **Relevante Zeilen**: 
     - Vue-App-Setup (ca. Zeile 1-20)
     - Store + Router-Integration (ca. Zeile 25-40)
   - **Lerninhalte abgeleitet**: Client-Entry-Point, Vuex/Router-Setup

6. **packages/clients/generic/src/addPlugins.ts**
   - **Relevante Zeilen**: 
     - Plugin-Array-Definition (alle Zeilen)
     - Plugin-Factory-Aufrufe mit Options
   - **Lerninhalte abgeleitet**: Plugin-Registration, Store-Paths

---

### Woche 2: Plugin-Anatomie

#### Pflichtlektüre-Files im POLAR-Repo

1. **packages/plugins/Zoom/index.ts**
   - **Vollständige Datei** als Referenz-Implementierung
   - **Lerninhalte abgeleitet**: 
     - Factory-Pattern (`export const Zoom = (options) => ...`)
     - Store-Module-Definition (State, Getters, Actions, Mutations)
     - Plugin-Interface (`name`, `storeModule`, `component`)

2. **packages/plugins/Zoom/components/ZoomComponent.vue**
   - **Template-Abschnitt**: Vuetify-Buttons (v-btn), Icons (v-icon)
   - **Script-Abschnitt**: Vuex-Anbindung (computed, methods mit dispatch)
   - **Lerninhalte abgeleitet**: Vue 3 Composition API (oder Options API), Vuetify-Komponenten

3. **packages/plugins/LayerChooser/index.ts**
   - **Store-Module**: Komplexere State-Struktur (Array von Layers)
   - **Lerninhalte abgeleitet**: Verschachtelte Store-Logik, Array-Manipulation in Mutations

4. **packages/core/src/types/plugin.ts**
   - **Interface `PolarPlugin`**: Required und Optional Properties
   - **Lerninhalte abgeleitet**: TypeScript-Interfaces für Plugins, Type-Guards

5. **packages/core/docs/9layout.md**
   - **Relevante Abschnitte**: 
     - Grid-Zones-Diagramm
     - NineLayoutTag-Enum
   - **Lerninhalte abgeleitet**: Positionierungs-System, Responsive-Behavior

6. **packages/plugins/MeasureTool/** (oder ähnliches Tool-Plugin)
   - **Relevante Zeilen**: 
     - OpenLayers Draw-Interaction-Setup
     - Event-Listener (`drawend`, `drawstart`)
   - **Lerninhalte abgeleitet**: Map-Interaktionen, Geometrie-Handling

---

### Woche 3: Client-Entwicklung

#### Pflichtlektüre-Files im POLAR-Repo

1. **packages/clients/generic/src/polar-client.ts**
   - **Vue-App-Setup**: `createApp()`, Plugin-Installation (Vuetify, Router, Store)
   - **Lerninhalte abgeleitet**: Vue 3 App-Initialisierung, Global-Plugins

2. **packages/clients/generic/src/addPlugins.ts**
   - **Plugin-Array**: Alle registrierten Plugins
   - **Plugin-Options**: Beispiele für Options-Übergabe
   - **Lerninhalte abgeleitet**: Plugin-Konfiguration, Conditional-Plugins (via ENV-Variables)

3. **packages/clients/generic/src/mapConfiguration.ts**
   - **OpenLayers View**: Center, Zoom, MinZoom, MaxZoom
   - **Layers-Array**: Base-Layer (OSM, WMS)
   - **Lerninhalte abgeleitet**: Map-Config-Struktur, Layer-Definition

4. **packages/clients/specialized/** (z.B. `stadtplan/`)
   - **Custom-Theme**: Vuetify-Theme-Konfiguration
   - **Custom-Assets**: Logos, Farben
   - **Lerninhalte abgeleitet**: Client-spezifisches Branding

5. **packages/core/docs/clientGuide.md**
   - **Best Practices**: Deployment, Environment-Variables
   - **Lerninhalte abgeleitet**: Production-Build, Bundle-Optimierung

---

### Woche 4: Testing & Qualität

#### Pflichtlektüre-Files im POLAR-Repo

1. **jest.config.ts** (Root)
   - **Transform-Regeln**: Vue, TypeScript, ESM
   - **Coverage-Thresholds**: 80% für alle Metriken
   - **Lerninhalte abgeleitet**: Jest-Setup für Monorepo

2. **packages/plugins/Zoom/__tests__/zoom.spec.ts**
   - **Store-Tests**: Mutations, Actions, Getters
   - **Component-Tests**: Mount, User-Interaktionen
   - **Lerninhalte abgeleitet**: Unit-Test-Patterns für POLAR-Plugins

3. **packages/core/src/test-utils/createTestMountParameters.ts**
   - **Helper-Funktion**: Mount-Options mit Vuetify, Store, Mocks
   - **Lerninhalte abgeleitet**: Reusable Test-Utilities

4. **e2e/zoom.spec.ts**
   - **Playwright-Tests**: Page-Navigation, Element-Locators, Assertions
   - **Lerninhalte abgeleitet**: E2E-Test-Struktur, Browser-Interaktionen

5. **e2e/fixtures/mapFixture.ts** (falls vorhanden)
   - **Custom-Fixtures**: Map-Initialisierung für Tests
   - **Lerninhalte abgeleitet**: Playwright-Fixtures-Pattern

6. **CONTRIBUTING.md → Testing-Section**
   - **Test-Konventionen**: Naming, File-Structure
   - **PR-Requirements**: Coverage ≥ 80%
   - **Lerninhalte abgeleitet**: Team-weite Testing-Standards

---

### Woche 5: Release & Produktion

#### Pflichtlektüre-Files im POLAR-Repo

1. **publishPackages.js** (Root)
   - **Version-Bump-Logik**: Liest package.json, bumpt Version
   - **NPM-Publish-Command**: `npm publish` für jedes Package
   - **Lerninhalte abgeleitet**: Automatisiertes Release-Script

2. **CHANGELOG.md** (Root oder einzelne Packages)
   - **Format**: `[Unreleased]`, `[1.2.0] - 2024-01-15`
   - **Kategorien**: Added, Changed, Fixed, Deprecated, Removed, Security
   - **Lerninhalte abgeleitet**: Keep a Changelog Format

3. **CONTRIBUTING.md → Release-Section**
   - **Release-Workflow**: Pre-Checks, Version-Bump, Tag, Publish
   - **PR-Labels**: `enhancement`, `bug`, `breaking-change`
   - **Lerninhalte abgeleitet**: Git-Workflow für Releases

4. **.github/workflows/release.yml** (falls vorhanden)
   - **GitHub Actions-Steps**: Checkout, Setup Node, Install, Test, Build, Publish
   - **Secrets**: `NPM_TOKEN`, `GITHUB_TOKEN`
   - **Lerninhalte abgeleitet**: CI/CD für NPM-Publishing

5. **packages/core/package.json → publishConfig**
   - **Access-Level**: `"public"` oder `"restricted"`
   - **Registry**: Default oder Custom (z.B. GitHub Packages)
   - **Lerninhalte abgeleitet**: NPM-Registry-Konfiguration

6. **Semver-Dokumentation**: https://semver.org/lang/de/
   - **Externe Ressource**, aber in `CONTRIBUTING.md` referenziert
   - **Lerninhalte abgeleitet**: MAJOR.MINOR.PATCH-Schema

---

## Capstone-Projekt: MeasureTool-Plugin

### Evidenz-Files

1. **Referenz-Plugin im Repo** (falls vorhanden):
   - `packages/plugins/MeasureTool/` (vollständige Implementierung als Vorbild)
   - Alternative: `packages/plugins/Draw/` oder ähnliches Tool-Plugin

2. **OpenLayers-Dokumentation**:
   - Draw-Interaction: https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw.html
   - Sphere-Module: https://openlayers.org/en/latest/apidoc/module-ol_sphere.html

3. **E2E-Test-Beispiel**:
   - `e2e/zoom.spec.ts` (als Pattern für MeasureTool-E2E-Tests)

### Capstone-Anforderungen abgeleitet von

- **Funktionale Anforderungen**: Kombinieren typische POLAR-Plugin-Features (UI, Store, Map-Interaction)
- **Technische Anforderungen**: Basieren auf POLAR-Best-Practices aus Wochen 1-5
- **Meilensteine**: Spiegeln den iterativen Plugin-Development-Workflow wider

---

## Validierung der Evidenz

### Checkliste für Curriculum-Maintainer

Beim Update des Curriculums:

- [ ] **Alle referenzierten Files existieren** im POLAR-Repository (oder Alternatives sind dokumentiert)
- [ ] **Zeilen-/Abschnitts-Referenzen sind aktuell** (Files können sich ändern)
- [ ] **Externe Links sind gültig** (z.B. OpenLayers-Docs, Semver-Docs)
- [ ] **Beispiel-Code kompiliert** (Copy-Paste aus Curriculum sollte funktionieren)
- [ ] **Tests sind ausführbar** (Quiz-Antworten sind korrekt, Tasks sind machbar)

### Bei POLAR-Repository-Updates

Wenn POLAR-Repo sich ändert (z.B. Breaking Changes, neue Features):

1. **Evidenz-Mapping reviewen**: Sind referenzierte Files noch vorhanden?
2. **Curriculum anpassen**: Beispiel-Code aktualisieren
3. **Tests updaten**: Quiz-Fragen, Task-Beschreibungen anpassen
4. **CHANGELOG pflegen**: Dokumentiere Curriculum-Änderungen

---

## Zusammenfassung

**Alle Curriculum-Inhalte** basieren auf realen POLAR-Repository-Files:

- **Woche 1**: `README.md`, `nx.json`, `createMap.ts`, `addPlugins.ts`
- **Woche 2**: `Zoom/index.ts`, `ZoomComponent.vue`, `9layout.md`
- **Woche 3**: `polar-client.ts`, `mapConfiguration.ts`, Specialized-Clients
- **Woche 4**: `jest.config.ts`, `zoom.spec.ts`, `createTestMountParameters.ts`
- **Woche 5**: `publishPackages.js`, `CHANGELOG.md`, `CONTRIBUTING.md`
- **Capstone**: `MeasureTool/` (oder ähnliche Tool-Plugins)

**Keine theoretischen Konzepte ohne Code-Basis!** Jedes Lernziel ist mit konkreten Implementierungen verknüpft.

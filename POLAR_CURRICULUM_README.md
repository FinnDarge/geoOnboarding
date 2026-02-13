# POLAR Spezialisierungs-Curriculum – Vollständige Dokumentation

## 📋 Übersicht

Dies ist ein **praxisorientierter 5-Wochen-Onboarding-Lehrplan** (60-80 Stunden gesamt) für POLAR-Entwicklung. Das Curriculum vermittelt Produktivität durch Repository-basierte Aufgaben in Plugin-Entwicklung, Client-Konfiguration, Testing und Release-Workflows.

**Zielgruppe**: Entwickler mit JavaScript/Vue-Grundkenntnissen, die in POLAR-Entwicklung einsteigen möchten.

**Zeitrahmen**: 5 Wochen á 12-16 Stunden/Woche + Capstone-Projekt (1-2 Wochen)

---

## 🗂️ Curriculum-Struktur

### Teil A: "POLAR in 15 Minuten" ✅

**Datei**: [`polar/quick_start.md`](./polar/quick_start.md)

**Inhalt**:
- Was ist POLAR? (OpenLayers-Plugin-Framework)
- Repo-Struktur (packages/core, packages/plugins, packages/clients)
- Setup-Kommandos (`git clone`, `npm install`, `npm run snowbox`)
- Erste Anlaufstellen (README.md, gettingStarted.md, index.ts, Zoom-Plugin)

**Lernziel**: In 15 Minuten einen funktionierenden POLAR-Dev-Setup haben und die Grundarchitektur verstehen.

---

### Teil B: 5-Wochen-Track ✅

Jede Woche folgt diesem Format:
- **Lernziele** (3-5 konkrete Skills)
- **Pflichtlektüre** (6-8 Files im POLAR-Repo)
- **Konzepte** (Architektur-Erklärungen mit Diagrammen)
- **Hands-on-Tasks** (3-5 praktische Aufgaben mit Acceptance-Criteria)
- **Knowledge-Check** (5 Fragen mit Lösungen)
- **Bonus-Challenge** (Optionale Erweiterungen)

#### Woche 1: Architektur & Setup 🏗️

**Datei**: [`polar/week1_architecture.md`](./polar/week1_architecture.md)

**Themen**:
- Monorepo-Struktur mit Nx
- Core, Plugins, Clients verstehen
- Plugin-Lifecycle und Factory Pattern
- Vuex-Store-Architektur
- Snowbox lokal starten und debuggen

**Tasks**: [`polar_week1_tasks.json`](../../tasks/polar_week1_tasks.json)
- Snowbox starten und DevTools nutzen
- Plugin-Liste erstellen und kategorisieren
- Store-Struktur dokumentieren

**Quiz**: [`polar_week1_quiz.json`](../../quiz/polar_week1_quiz.json) (5 Fragen)

---

#### Woche 2: Plugin-Anatomie 🧩

**Datei**: [`polar/week2_plugin_anatomy.md`](./polar/week2_plugin_anatomy.md)

**Themen**:
- Detaillierte Plugin-Dateistruktur
- Store-Module (State, Getters, Actions, Mutations)
- Vue-Components mit Vuetify
- 9Layout-System (Positionierung)
- OpenLayers-Integration (Map-Zugriff, Interactions)

**Tasks**: [`polar_week2_tasks.json`](../../tasks/polar_week2_tasks.json)
- Counter-Plugin von Grund auf erstellen
- Factory-Funktion, Store, Component implementieren
- In Snowbox integrieren und testen

**Quiz**: [`polar_week2_quiz.json`](../../quiz/polar_week2_quiz.json) (5 Fragen)

---

#### Woche 3: Client-Entwicklung 🖥️

**Datei**: [`polar/week3_client_development.md`](./polar/week3_client_development.md)

**Themen**:
- Generic vs. Specialized Clients
- Plugin-Konfiguration in addPlugins.ts
- Map-Konfiguration (View, Layers, Projection)
- Plugin-Chaining via Vuex-Paths
- Custom-Themes und Branding

**Tasks**: [`polar_week3_tasks.json`](../../tasks/polar_week3_tasks.json)
- Dashboard-Client aufsetzen (nur 3 Plugins)
- Custom-Theme mit Blau-Tönen
- Berlin als Initial-View

**Quiz**: [`polar_week3_quiz.json`](../../quiz/polar_week3_quiz.json) (5 Fragen)

---

#### Woche 4: Testing & Qualität 🧪

**Datei**: [`polar/week4_testing.md`](./polar/week4_testing.md)

**Themen**:
- Unit-Tests mit Jest
- createTestMountParameters für Component-Tests
- E2E-Tests mit Playwright
- Code-Coverage messen (≥80%)
- Test-Driven Development (TDD)

**Tasks**: [`polar_week4_tasks.json`](../../tasks/polar_week4_tasks.json)
- Unit-Tests für Counter-Store und -Component
- E2E-Test mit Playwright
- TDD für "IncrementByTen"-Feature

**Quiz**: [`polar_week4_quiz.json`](../../quiz/polar_week4_quiz.json) (5 Fragen)

---

#### Woche 5: Release & Produktion 🚀

**Datei**: [`polar/week5_release.md`](./polar/week5_release.md)

**Themen**:
- Semantic Versioning (MAJOR.MINOR.PATCH)
- CHANGELOG pflegen (Keep a Changelog Format)
- NPM-Packages publishen
- CI/CD-Pipelines (GitHub Actions)
- Breaking Changes managen

**Tasks**: [`polar_week5_tasks.json`](../../tasks/polar_week5_tasks.json)
- CHANGELOG und README für Counter-Plugin
- package.json finalisieren
- npm publish --dry-run durchführen
- Git-Tag erstellen

**Quiz**: [`polar_week5_quiz.json`](../../quiz/polar_week5_quiz.json) (5 Fragen)

---

### Teil C: Capstone-Projekt ✅

**Datei**: [`polar/capstone_brief.md`](./polar/capstone_brief.md)

**Projekt**: **MeasureTool-Plugin** für Distanz- und Flächenmessungen auf der Karte

**Anforderungen**:
- Funktional: 2 Modi (Distanz, Fläche), UI mit Vuetify, OpenLayers Draw-Integration
- Technisch: Factory Pattern, Vuex-Store, TypeScript, ≥80% Coverage
- Dokumentation: README, CHANGELOG, API-Docs

**Meilensteine** (8 Schritte):
1. Projekt-Boilerplate (Ordnerstruktur, package.json, types.ts)
2. Vuex-Store implementieren (State, Actions, Mutations, Getters)
3. Vue-Component mit UI (Vuetify-Buttons, Messung-Anzeige)
4. OpenLayers-Integration (Draw-Interaction, Berechnungen)
5. NineLayoutTag & Snowbox-Integration
6. Unit-Tests (≥80% Coverage)
7. E2E-Test mit Playwright
8. README & Release (npm publish --dry-run)

**Tasks**: [`polar_capstone_tasks.json`](../../tasks/polar_capstone_tasks.json) (8 Meilensteine)

**Bewertung**: 6 Kriterien (Funktionalität 25%, Code-Qualität 25%, Tests 20%, Architektur 15%, Dokumentation 10%, Git-Workflow 5%)

---

### Teil D: YAML-Struktur (für Academy-Integration) ✅

**Datei**: [`modules.json`](../../modules.json) (bereits integriert)

```yaml
pathId: "polar"
title: "POLAR Spezialisierung"
duration: "5 Wochen"
effort: "12-16h/Woche"

modules: 7
  - polar-quickstart (Quick Start Guide)
  - polar-week1 (Architektur & Setup)
  - polar-week2 (Plugin-Anatomie)
  - polar-week3 (Client-Entwicklung)
  - polar-week4 (Testing & Qualität)
  - polar-week5 (Release & Produktion)
  - polar-capstone (MeasureTool-Projekt)

lesson-types:
  - markdown (Konzepte & Erklärungen)
  - task-list (Coding-Aufgaben mit Checkboxen)
  - quiz (5 Fragen mit Multiple-Choice)
  - external-link (OpenLayers-Docs, GitHub)
```

**Badge-System**: [`badges.js`](../../badges.js)
- 7 Modul-Badges (Quickstart, Week 1-5, Capstone)
- 1 Track-Badge "POLAR-Meister" (bei Abschluss aller Module)

---

### Teil E: Evidenz-Mapping ✅

**Datei**: [`polar/evidence_mapping.md`](./polar/evidence_mapping.md)

**Zweck**: Zeigt, dass **alle** Curriculum-Inhalte auf realen POLAR-Repository-Files basieren.

**Beispiele**:
- Woche 1 Architektur ← `README.md`, `nx.json`, `createMap.ts`
- Woche 2 Plugin-Anatomie ← `Zoom/index.ts`, `ZoomComponent.vue`, `9layout.md`
- Woche 3 Client-Entwicklung ← `polar-client.ts`, `addPlugins.ts`, `mapConfiguration.ts`
- Woche 4 Testing ← `jest.config.ts`, `zoom.spec.ts`, `createTestMountParameters.ts`
- Woche 5 Release ← `publishPackages.js`, `CHANGELOG.md`, `CONTRIBUTING.md`

**Validierung**: Checkliste für Curriculum-Updates bei POLAR-Repo-Änderungen

---

## 📊 Lernziele & Outcomes

Nach Abschluss des Curriculums können Teilnehmer:

✅ **POLAR-Architektur verstehen**
- Monorepo-Struktur navigieren
- Plugin-Lifecycle erklären
- Core, Plugins, Clients unterscheiden

✅ **Plugins entwickeln**
- Factory Pattern anwenden
- Vuex-Store-Module implementieren
- Vue-Components mit Vuetify bauen
- OpenLayers-Interactions integrieren

✅ **Clients konfigurieren**
- Generic vs. Specialized Clients aufsetzen
- Plugins via addPlugins.ts registrieren
- Map-Konfigurationen anpassen
- Custom-Themes erstellen

✅ **Testing durchführen**
- Unit-Tests mit Jest schreiben (≥80% Coverage)
- E2E-Tests mit Playwright implementieren
- Test-Driven Development (TDD) praktizieren

✅ **Releases managen**
- Semantic Versioning korrekt anwenden
- CHANGELOGs pflegen
- NPM-Packages publishen
- CI/CD-Pipelines verstehen

---

## 🛠️ Technologie-Stack

Das Curriculum basiert auf folgenden Technologien:

**Frontend**:
- Vue 3 (Composition API / Options API)
- Vuetify 3 (Material Design Components)
- Vuex (State Management)
- Vue Router (Routing)

**Mapping**:
- OpenLayers 8+ (Map-Rendering)
- GeoJSON, WMS, WFS (Geodaten)

**Build & Tooling**:
- Vite (Dev-Server & Build)
- Nx (Monorepo-Management)
- TypeScript (Type-Safety)
- ESLint + Prettier (Code-Quality)

**Testing**:
- Jest (Unit-Tests)
- Vue Test Utils (Component-Tests)
- Playwright (E2E-Tests)

**Release**:
- NPM (Package-Registry)
- Semantic Versioning (Versionierung)
- GitHub Actions (CI/CD)
- Conventional Commits (Commit-Messages)

---

## 📁 Datei-Übersicht

Alle erstellten Dateien im Workspace:

### Markdown-Lektionen
- `src/data/content/polar/quick_start.md` (Quick Start Guide)
- `src/data/content/polar/week1_architecture.md` (Woche 1)
- `src/data/content/polar/week2_plugin_anatomy.md` (Woche 2)
- `src/data/content/polar/week3_client_development.md` (Woche 3)
- `src/data/content/polar/week4_testing.md` (Woche 4)
- `src/data/content/polar/week5_release.md` (Woche 5)
- `src/data/content/polar/capstone_brief.md` (Capstone-Projekt)
- `src/data/content/polar/evidence_mapping.md` (Evidenz-Dokumentation)

### Task-Listen (JSON)
- `src/data/tasks/polar_week1_tasks.json` (5 Tasks)
- `src/data/tasks/polar_week2_tasks.json` (6 Tasks)
- `src/data/tasks/polar_week3_tasks.json` (6 Tasks)
- `src/data/tasks/polar_week4_tasks.json` (6 Tasks)
- `src/data/tasks/polar_week5_tasks.json` (6 Tasks)
- `src/data/tasks/polar_capstone_tasks.json` (8 Meilensteine)

### Quizzes (JSON)
- `src/data/quiz/polar_week1_quiz.json` (5 Fragen)
- `src/data/quiz/polar_week2_quiz.json` (5 Fragen)
- `src/data/quiz/polar_week3_quiz.json` (5 Fragen)
- `src/data/quiz/polar_week4_quiz.json` (5 Fragen)
- `src/data/quiz/polar_week5_quiz.json` (5 Fragen)

### Konfiguration
- `src/data/modules.json` (POLAR-Track integriert)
- `src/data/badges.js` (8 POLAR-Badges hinzugefügt)

---

## 🚀 Next Steps

### Für Maintainer

1. **Badge-Bilder erstellen**: Erstelle Icons für die 8 Badges in `src/data/img/badges/`
   - `polarQuickstart.png`
   - `polarWeek1.png` bis `polarWeek5.png`
   - `polarCapstone.png`
   - `polarTrackCompletion.png`

2. **POLAR-Repo verlinken**: Stelle sicher, dass externe Links zu POLAR-GitHub korrekt sind

3. **Test-Run**: Gehe das gesamte Curriculum durch und validiere:
   - Alle Markdown-Links funktionieren
   - Task-Listen sind machbar
   - Quiz-Antworten sind korrekt

4. **Feedback-Loop**: Sammle Feedback von ersten Teilnehmern und iteriere

### Für Teilnehmer

1. **Grundlagen abschließen**: Stelle sicher, dass du JavaScript, Vue und Geo-Basics beherrscht
2. **POLAR-Track starten**: Beginne mit "POLAR in 15 Minuten"
3. **Wöchentlich durcharbeiten**: 12-16 Stunden pro Woche investieren
4. **Capstone-Projekt**: Plane 1-2 Wochen für MeasureTool-Plugin ein
5. **Community nutzen**: Frage Mentoren bei Unklarheiten

---

## 📞 Support & Kontakt

- **Fragen zum Curriculum**: Öffne ein Issue im geoOnboarding-Repository
- **POLAR-spezifische Fragen**: GitHub Discussions im POLAR-Repo
- **Mentoring**: Wende dich an dein Team oder Onboarding-Lead

---

**Status**: ✅ Curriculum vollständig implementiert und bereit für Pilotierung!

**Version**: 1.0.0 (Februar 2026)

**Lizenz**: MIT (entsprechend geoOnboarding-Projekt)

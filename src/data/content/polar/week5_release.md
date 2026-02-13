# Woche 5: Release & Produktion

## 🎯 Lernziele

Nach dieser Woche kannst du:
- Semantic Versioning korrekt anwenden
- CHANGELOGs pflegen und automatisch generieren
- NPM-Packages publishen (Public und Private Registry)
- CI/CD-Pipelines für POLAR-Projekte konfigurieren
- Release-Branches und Git-Tags verwalten
- Breaking Changes kommunizieren und migrieren

## 📚 Pflichtlektüre

1. **publishPackages.js** (Repo-Root)
   - Automatisiertes NPM-Publishing-Script
   - Version-Bump-Logik
   - Dependency-Updates zwischen Packages

2. **CHANGELOG.md** (Repo-Root oder einzelne Packages)
   - Struktur: [Unreleased], [1.2.0] - 2024-01-15
   - Kategorien: Added, Changed, Deprecated, Removed, Fixed, Security

3. **CONTRIBUTING.md → Release-Section**
   - Release-Workflow
   - Version-Bump-Regeln
   - PR-Labels für Changelog-Generierung

4. **.github/workflows/release.yml** (falls vorhanden)
   - GitHub Actions für automatische Releases
   - NPM-Token-Handling
   - Build + Test + Publish-Pipeline

5. **packages/core/package.json → publishConfig**
   - NPM-Registry-Konfiguration
   - Access-Level (public/restricted)

6. **Semver-Dokumentation**: https://semver.org/lang/de/
   - MAJOR.MINOR.PATCH-Schema
   - Breaking Changes vs. Features vs. Bugfixes

## 📦 Semantic Versioning

### Schema: MAJOR.MINOR.PATCH

- **MAJOR** (1.0.0 → 2.0.0): Breaking Changes
  - API-Änderungen, die bestehenden Code brechen
  - Beispiel: Plugin-Factory-Signatur ändert sich

- **MINOR** (1.1.0 → 1.2.0): Neue Features (backward-compatible)
  - Neue Plugins, neue Actions in Store
  - Beispiel: Neues "Export"-Feature im LayerChooser

- **PATCH** (1.1.1 → 1.1.2): Bugfixes
  - Keine neuen Features, nur Korrekturen
  - Beispiel: Zoom-Button funktionierte nicht im Safari

### Pre-Release-Versionen

- **Alpha**: `1.2.0-alpha.1` (intern, instabil)
- **Beta**: `1.2.0-beta.1` (extern, Feature-Complete aber buggy)
- **Release Candidate**: `1.2.0-rc.1` (letzte Tests vor Release)

### Version-Dependencies

```json
// package.json
{
  "dependencies": {
    "@polar/core": "^2.1.0",     // Compatible mit 2.x.x (< 3.0.0)
    "@polar/zoom": "~1.3.2",     // Compatible mit 1.3.x (< 1.4.0)
    "vue": "3.4.0"               // Exakt 3.4.0
  }
}
```

Regeln:
- **^** (Caret): MINOR und PATCH updates ok
- **~** (Tilde): Nur PATCH updates ok
- **Keine Prefix**: Exakte Version

## 📝 CHANGELOG pflegen

### Struktur (Keep a Changelog Format)

```markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- New "MeasureTool" plugin for distance and area measurements

### Changed
- Zoom animation duration reduced from 1000ms to 500ms

### Fixed
- LayerChooser: Fixed drag-and-drop on touch devices

## [2.1.0] - 2024-02-10

### Added
- AddressSearch: Support for custom geocoding services
- New `onMapReady` lifecycle hook for plugins

### Changed
- **BREAKING**: Renamed `createPolarMap` to `createMap`
- Updated Vuetify to 3.5.0

### Deprecated
- `oldPluginAPI` will be removed in v3.0.0

### Removed
- IE11 support (EOL)

### Fixed
- Fixed memory leak in OpenLayers event listeners

### Security
- Updated dependencies with known vulnerabilities

## [2.0.0] - 2024-01-15

...
```

### Automatische Generierung

Tools:
- **conventional-changelog**: Generiert CHANGELOG aus Git-Commits (wenn Conventional Commits genutzt werden)
- **lerna-changelog**: Für Monorepos (liest PR-Labels)

```bash
# Mit conventional-changelog
npx conventional-changelog -p angular -i CHANGELOG.md -s
```

### Conventional Commits

```bash
# Format: <type>(<scope>): <subject>

feat(zoom): add custom animation duration option
fix(layer-chooser): resolve drag-and-drop bug on iOS
docs(readme): update installation instructions
chore(deps): bump vue from 3.3.0 to 3.4.0
refactor(core): simplify map initialization logic
test(zoom): add unit tests for zoom actions
```

Types:
- `feat`: Neue Feature → MINOR version bump
- `fix`: Bugfix → PATCH version bump
- `feat!` oder `BREAKING CHANGE:`: Breaking Change → MAJOR version bump

## 🚀 Release-Workflow

### 1. Pre-Release-Checks

```bash
# Alle Tests laufen durch
npm test
npm run test:e2e

# Type-Check ohne Fehler
npm run type-check

# Linting erfolgreich
npm run lint

# Build funktioniert
npm run build:all
```

### 2. Version Bump

```bash
# Manuell in package.json(s)
# Oder mit Script:
npm run version:bump -- --type minor
# → Bumpt alle Packages von 2.0.0 auf 2.1.0
```

### 3. CHANGELOG aktualisieren

```markdown
## [Unreleased]
→
## [2.1.0] - 2024-02-13

### Added
- ...
```

### 4. Commit + Tag

```bash
git add .
git commit -m "chore(release): v2.1.0"
git tag v2.1.0
git push origin main --tags
```

### 5. NPM-Publishing

```bash
# Manuell
npm run publish:packages

# Oder automatisch via CI/CD (siehe unten)
```

### 6. GitHub Release erstellen

- Gehe zu GitHub → Releases → "Draft a new release"
- Tag: `v2.1.0`
- Title: `Release 2.1.0`
- Description: Kopiere CHANGELOG-Abschnitt
- Attach Assets (optional): Build-Artefakte, Docs

## 🤖 CI/CD mit GitHub Actions

### .github/workflows/release.yml

```yaml
name: Release

on:
  push:
    tags:
      - 'v*.*.*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build packages
        run: npm run build:all
      
      - name: Publish to NPM
        run: npm run publish:packages
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
      
      - name: Create GitHub Release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: ${{ github.ref }}
          release_name: Release ${{ github.ref }}
          body_path: ./CHANGELOG.md
```

### NPM-Token konfigurieren

1. Generiere Token auf npmjs.com: Account Settings → Access Tokens → Generate New Token (Automation)
2. Füge Token zu GitHub Secrets hinzu: Repo Settings → Secrets and variables → Actions → New repository secret
   - Name: `NPM_TOKEN`
   - Value: `npm_...`

## 🛠️ Hands-on: Release durchführen

### Task: Release v1.0.0 des Counter-Plugins

#### Voraussetzungen
- Counter-Plugin ist fertig entwickelt
- Tests sind geschrieben und passieren
- Dokumentation ist aktuell

#### Schritte

1. **CHANGELOG erstellen**: `packages/plugins/Counter/CHANGELOG.md`
   ```markdown
   # Changelog - @polar/counter
   
   ## [1.0.0] - 2024-02-13
   
   ### Added
   - Initial release
   - Increment, decrement, reset functionality
   - Vuetify-styled UI
   - Unit and E2E tests
   ```

2. **package.json aktualisieren**
   ```json
   {
     "name": "@polar/counter",
     "version": "1.0.0",
     "description": "Simple counter plugin for POLAR",
     "main": "dist/index.js",
     "types": "dist/index.d.ts",
     "publishConfig": {
       "access": "public"
     }
   }
   ```

3. **README erstellen**: `packages/plugins/Counter/README.md`
   - Installation: `npm install @polar/counter`
   - Usage-Beispiel
   - API-Dokumentation (Options, Store-Actions, etc.)

4. **Build testen**
   ```bash
   npm run build --scope=@polar/counter
   # Überprüfe dist/-Ordner
   ```

5. **Dry-Run-Publish** (testet ohne zu publishen)
   ```bash
   cd packages/plugins/Counter
   npm publish --dry-run
   ```

6. **Publish** (falls alles ok)
   ```bash
   npm publish
   ```

7. **Git-Tag**
   ```bash
   git add .
   git commit -m "chore(counter): release v1.0.0"
   git tag counter-v1.0.0
   git push origin main --tags
   ```

#### Acceptance Criteria
- ✅ Package ist auf NPM verfügbar: `npm view @polar/counter`
- ✅ README wird auf NPM-Seite angezeigt
- ✅ Git-Tag existiert im Repository
- ✅ CHANGELOG ist vollständig

## 🔧 Breaking Changes managen

### Szenario: API-Änderung in Plugin-Factory

**Alt** (v1.x):
```typescript
export const Zoom = (position: string) => ({ ... })
```

**Neu** (v2.0):
```typescript
export const Zoom = (options: { position: string, duration?: number }) => ({ ... })
```

### Migration Guide erstellen

```markdown
# Migration Guide: v1.x → v2.0

## Breaking Changes

### Plugin Factories now accept Options Object

**Before** (v1.x):
```typescript
Zoom('top-left')
```

**After** (v2.0):
```typescript
Zoom({ position: 'top-left' })
```

**Migration Script** (optional):
Find-and-replace in your `addPlugins.ts`:
- Search: `Zoom\('([^']+)'\)`
- Replace: `Zoom({ position: '$1' })`
```

### Deprecation-Phase nutzen

```typescript
export const Zoom = (positionOrOptions) => {
  if (typeof positionOrOptions === 'string') {
    // Alt-API (deprecated)
    console.warn('Passing position as string is deprecated. Use { position: "..." } instead.')
    return createZoomPlugin({ position: positionOrOptions })
  }
  // Neu-API
  return createZoomPlugin(positionOrOptions)
}
```

→ User bekommen Warning, Code funktioniert aber noch (grace period)

## 📝 Knowledge Check

1. **Wann ist ein MAJOR-Version-Bump nötig?**
   - Bei Breaking Changes (API-Änderungen, entfernte Features)

2. **Was gehört in einen CHANGELOG-Eintrag?**
   - Kategorien: Added, Changed, Fixed, Deprecated, Removed, Security
   - User-facing Changes (interne Refactorings meist nicht)

3. **Warum sind Conventional Commits hilfreich?**
   - Automatische CHANGELOG-Generierung
   - Automatische Version-Bumps (via semantic-release)
   - Bessere Git-History-Lesbarkeit

4. **Was ist der Unterschied zwischen `npm publish` und `npm pack`?**
   - `npm pack`: Erstellt .tgz-File (lokal testbar mit `npm install ./package.tgz`)
   - `npm publish`: Uploaded Package zu NPM-Registry

5. **Wie kommuniziert man Breaking Changes an User?**
   - CHANGELOG mit **BREAKING** Tag
   - Migration Guide
   - Major-Version-Bump (semver)
   - Deprecation-Warnings (wenn möglich)

## 🚀 Bonus-Challenge

1. **Monorepo-Releases**: Nutze `lerna` oder `nx` für koordinierte Multi-Package-Releases
2. **Automated Releases**: Konfiguriere `semantic-release` für vollautomatisches Publishing
3. **Private NPM Registry**: Richte Verdaccio (lokal) oder GitHub Packages ein
4. **Release Notes**: Generiere Release-Notes aus GitHub-Issues (Labels "enhancement", "bug")
5. **Rollback-Strategie**: Dokumentiere, wie ein fehlerhaftes Release zurückgezogen wird (`npm unpublish` Regeln)

---

**Checkpoint**: Du beherrschst jetzt den kompletten POLAR-Development-Lifecycle von Setup bis Release. Bereit für das Capstone-Projekt!

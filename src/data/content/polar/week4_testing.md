# Woche 4: Testing & Qualität

## 🎯 Lernziele

Nach dieser Woche kannst du:
- Unit-Tests für Plugins mit Jest schreiben
- `createTestMountParameters` für Component-Tests nutzen
- E2E-Tests mit Playwright implementieren
- Code-Coverage messen und interpretieren
- Linting und Type-Checking in CI/CD integrieren
- Test-Driven Development (TDD) für Plugin-Entwicklung anwenden

## 📚 Pflichtlektüre

1. **jest.config.ts** (Repo-Root)
   - Jest-Konfiguration für Monorepo
   - Transform-Regeln für Vue/TypeScript
   - Coverage-Thresholds

2. **packages/plugins/Zoom/__tests__/zoom.spec.ts**
   - Unit-Test-Beispiel für Plugin
   - Store-Modul-Tests (Actions, Mutations, Getters)
   - Component-Mount-Tests

3. **packages/core/src/test-utils/createTestMountParameters.ts**
   - Helper-Funktion für Vue-Component-Tests
   - Mock-Store-Setup
   - Mount-Options mit Vuetify

4. **e2e/zoom.spec.ts**
   - Playwright E2E-Test
   - Page-Interaktionen (click, fill, expect)
   - Screenshot-Vergleiche

5. **e2e/fixtures/mapFixture.ts** (falls vorhanden)
   - Custom-Fixtures für Map-Tests
   - Map-Initialisierung in Tests

6. **CONTRIBUTING.md → Testing-Section**
   - Test-Konventionen
   - PR-Requirements (Coverage ≥ 80%)

## 🧪 Testing-Stack

### 1. Unit-Tests: Jest + Vue Test Utils

**Was wird getestet?**
- Store-Logik (Actions, Mutations, Getters)
- Component-Rendering und User-Interactions
- Utility-Funktionen

**Tools**:
- **Jest**: Test-Runner und Assertion-Library
- **@vue/test-utils**: Vue-Component-Mounting
- **@pinia/testing** oder Vuex-Mocks: Store-Testing

### 2. E2E-Tests: Playwright

**Was wird getestet?**
- Vollständige User-Flows (z.B. Adresssuche → Zoom → Layer aktivieren)
- Cross-Browser-Kompatibilität
- Visual Regression (Screenshots)

**Tools**:
- **Playwright**: Browser-Automatisierung
- **playwright-test**: Test-Runner mit Fixtures

### 3. Type-Checking: TypeScript Compiler

```bash
npm run type-check  # tsc --noEmit
```

### 4. Linting: ESLint + Prettier

```bash
npm run lint        # ESLint
npm run format      # Prettier
```

## 📝 Unit-Tests schreiben

### Store-Modul testen

```typescript
// packages/plugins/Counter/__tests__/counter.spec.ts
import { createStore } from 'vuex'
import { counterStoreModule } from '../index'

describe('Counter Plugin Store', () => {
  let store
  
  beforeEach(() => {
    store = createStore({
      modules: {
        counter: counterStoreModule
      }
    })
  })
  
  describe('Mutations', () => {
    it('SET_COUNT sets the count', () => {
      store.commit('counter/SET_COUNT', 42)
      expect(store.state.counter.count).toBe(42)
    })
  })
  
  describe('Actions', () => {
    it('increment increases count by 1', async () => {
      await store.dispatch('counter/increment')
      expect(store.state.counter.count).toBe(1)
    })
    
    it('decrement decreases count by 1', async () => {
      store.commit('counter/SET_COUNT', 5)
      await store.dispatch('counter/decrement')
      expect(store.state.counter.count).toBe(4)
    })
  })
  
  describe('Getters', () => {
    it('getCount returns current count', () => {
      store.commit('counter/SET_COUNT', 10)
      expect(store.getters['counter/getCount']).toBe(10)
    })
    
    it('isPositive returns true when count > 0', () => {
      store.commit('counter/SET_COUNT', 1)
      expect(store.getters['counter/isPositive']).toBe(true)
    })
  })
})
```

### Component testen mit createTestMountParameters

```typescript
// packages/plugins/Counter/__tests__/CounterComponent.spec.ts
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import CounterComponent from '../components/CounterComponent.vue'
import { createTestMountParameters } from '@polar/core/test-utils'

describe('CounterComponent', () => {
  let store
  
  beforeEach(() => {
    store = createStore({
      modules: {
        plugins: {
          namespaced: true,
          modules: {
            counter: {
              namespaced: true,
              state: { count: 0 },
              getters: { getCount: (state) => state.count },
              actions: { 
                increment: jest.fn(),
                decrement: jest.fn()
              }
            }
          }
        }
      }
    })
  })
  
  it('renders current count', () => {
    const wrapper = mount(CounterComponent, createTestMountParameters({ store }))
    expect(wrapper.text()).toContain('0')
  })
  
  it('calls increment action when + button clicked', async () => {
    const wrapper = mount(CounterComponent, createTestMountParameters({ store }))
    
    await wrapper.find('[data-testid="increment-btn"]').trigger('click')
    
    expect(store._actions['plugins/counter/increment']).toHaveBeenCalled()
  })
  
  it('displays updated count after state change', async () => {
    const wrapper = mount(CounterComponent, createTestMountParameters({ store }))
    
    store.state.plugins.counter.count = 5
    await wrapper.vm.$nextTick()
    
    expect(wrapper.text()).toContain('5')
  })
})
```

### createTestMountParameters erklärt

```typescript
// Vereinfachte Implementierung
export function createTestMountParameters(options = {}) {
  return {
    global: {
      plugins: [
        options.store || createStore({}),
        createVuetify() // Vuetify-Plugin für Tests
      ],
      mocks: {
        $t: (key) => key // i18n-Mock
      }
    }
  }
}
```

## 🌐 E2E-Tests mit Playwright

### Basis-Struktur

```typescript
// e2e/counter.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Counter Plugin', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173') // Snowbox
  })
  
  test('increments count on button click', async ({ page }) => {
    // Plugin ist sichtbar
    await expect(page.locator('.counter-plugin')).toBeVisible()
    
    // Initial-Wert ist 0
    await expect(page.locator('[data-testid="count-display"]')).toHaveText('0')
    
    // + Button klicken
    await page.click('[data-testid="increment-btn"]')
    
    // Count ist jetzt 1
    await expect(page.locator('[data-testid="count-display"]')).toHaveText('1')
  })
  
  test('decrements count on button click', async ({ page }) => {
    // Erst auf 5 erhöhen
    for (let i = 0; i < 5; i++) {
      await page.click('[data-testid="increment-btn"]')
    }
    
    // Dann dekrementieren
    await page.click('[data-testid="decrement-btn"]')
    
    await expect(page.locator('[data-testid="count-display"]')).toHaveText('4')
  })
})
```

### Map-Interaktionen testen

```typescript
test('zoom buttons change map zoom level', async ({ page }) => {
  await page.goto('http://localhost:5173')
  
  // Initial-Zoom ermitteln (via Browser-Console-Aufruf)
  const initialZoom = await page.evaluate(() => {
    return window.polarMap.getView().getZoom()
  })
  
  // Zoom-In klicken
  await page.click('[data-testid="zoom-in-btn"]')
  
  // Warten auf Animation
  await page.waitForTimeout(500)
  
  // Neuer Zoom sollte höher sein
  const newZoom = await page.evaluate(() => {
    return window.polarMap.getView().getZoom()
  })
  
  expect(newZoom).toBeGreaterThan(initialZoom)
})
```

## 📊 Coverage messen

```bash
# Alle Tests mit Coverage
npm run test:coverage

# Nur spezifisches Plugin
npm run test:coverage -- packages/plugins/Counter
```

### Coverage-Report interpretieren

```
File                     | % Stmts | % Branch | % Funcs | % Lines
-------------------------|---------|----------|---------|--------
Counter/index.ts         |   100   |   100    |   100   |   100
Counter/components/      |   95    |   80     |   100   |   95
-------------------------|---------|----------|---------|--------
All files                |   97.5  |   85     |   100   |   97.3
```

**Thresholds** (in `jest.config.ts`):
- Statements: ≥ 80%
- Branches: ≥ 75%
- Functions: ≥ 80%
- Lines: ≥ 80%

## 🛠️ Hands-on: Tests für Counter-Plugin

### Task 1: Unit-Tests schreiben

Erstelle `packages/plugins/Counter/__tests__/counter.spec.ts` mit:

1. **Store-Tests** (mindestens 8 Tests):
   - Mutations: SET_COUNT
   - Actions: increment, decrement, reset
   - Getters: getCount, isPositive, isNegative

2. **Component-Tests** (mindestens 5 Tests):
   - Rendering mit initialem Count
   - Button-Clicks triggern Actions
   - Conditional Rendering (z.B. Disable Decrement-Button bei count=0)

#### Acceptance Criteria
- ✅ Alle Tests passieren: `npm test Counter`
- ✅ Coverage ≥ 80% für alle Metriken
- ✅ Keine ESLint-Warnings

### Task 2: E2E-Test schreiben

Erstelle `e2e/counter.spec.ts` mit:

1. **Basic Flow**: Increment → Decrement → Reset
2. **Edge Case**: Decrement bei count=0 (Button sollte disabled sein)
3. **Persistence** (falls implementiert): Count bleibt nach Page-Reload erhalten

#### Acceptance Criteria
- ✅ E2E-Tests passieren: `npm run test:e2e`
- ✅ Test läuft in Chrome, Firefox und Safari (via Playwright-Config)

### Task 3: TDD für neue Feature

Implementiere "Increment by 10"-Feature **test-first**:

1. **Schreibe Test** (rot):
   ```typescript
   it('incrementByTen increases count by 10', async () => {
     await store.dispatch('counter/incrementByTen')
     expect(store.state.counter.count).toBe(10)
   })
   ```

2. **Test läuft fehl** (erwartungsgemäß)

3. **Implementiere Feature**:
   ```typescript
   actions: {
     incrementByTen({ commit, state }) {
       commit('SET_COUNT', state.count + 10)
     }
   }
   ```

4. **Test läuft durch** (grün)

5. **Refactor**: Optional Code-Optimierungen

## 📝 Knowledge Check

1. **Was ist der Unterschied zwischen Unit-Tests und E2E-Tests?**
   - Unit: Isolierte Komponenten/Funktionen (schnell, fokussiert)
   - E2E: Vollständiger User-Flow (langsam, integrativ)

2. **Warum sollte man Store-Logik separat von Components testen?**
   - Bessere Isolation (leichter zu debuggen)
   - Store ist oft wiederverwendbar (mehrere Components)
   - Einfachere Mocks

3. **Was macht `createTestMountParameters`?**
   - Konfiguriert Vue Test Utils für POLAR-Components
   - Fügt Vuetify, Store, Router hinzu
   - Mockt globale Dependencies (z.B. i18n)

4. **Wann sollte man Snapshots statt Assertions nutzen?**
   - Für komplexe HTML-Strukturen (z.B. gesamte Component)
   - Bei stabilem UI (wenig Änderungen erwartet)
   - **Vorsicht**: Snapshots können "blind" approven (immer reviewen!)

5. **Wie testet man asynchrone Actions?**
   - Mit `async/await` oder `.then()`
   - `flushPromises()` für Vue-Updates
   - Mock-Timer für Debounce/Throttle

## 🚀 Bonus-Challenge

1. **Visual Regression**: Playwright-Screenshot-Tests für Counter-UI
2. **Mutation-Testing**: Nutze `stryker-mutator` für Mutation-Testing
3. **Performance-Tests**: Messe Rendering-Zeit mit Playwright-Trace
4. **A11y-Tests**: Integriere `axe-playwright` für Accessibility-Checks
5. **CI-Integration**: GitHub Actions Workflow für Tests + Coverage-Report

---

**Checkpoint**: Dein Code sollte jetzt robust getestet sein. In Woche 5 lernst du Release-Prozesse und NPM-Publishing.

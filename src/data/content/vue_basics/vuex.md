# Vuex State Management Patterns

Vuex ist die zentrale State-Management-Lösung für Vue-Anwendungen. Es bietet einen **Single Source of Truth** für den gesamten Anwendungszustand und ermöglicht vorhersagbare State-Änderungen durch ein strukturiertes Pattern.

---

## Grundlegende Konzepte

### State
Der State ist das zentrale Datenobjekt deiner Anwendung. Alle Komponenten können darauf zugreifen, aber niemals direkt verändern.

```javascript
// store/modules/user.js
const state = {
  name: '',
  role: '',
  isAuthenticated: false
}
```

### Mutations
Mutations sind die **einzige** Möglichkeit, den State zu ändern. Sie müssen **synchron** sein.

```javascript
const mutations = {
  setUser(state, payload) {
    state.name = payload.name;
    state.role = payload.role;
    state.isAuthenticated = true;
  },
  
  clearUser(state) {
    state.name = '';
    state.role = '';
    state.isAuthenticated = false;
  }
}
```

> **Wichtig:** Mutations erhalten immer `state` als ersten Parameter und optional einen `payload` als zweiten.

### Actions
Actions enthalten **asynchrone** Logik (API-Calls, Timeouts) und committen Mutations.

```javascript
const actions = {
  async login({ commit }, credentials) {
    try {
      const response = await authApi.login(credentials);
      commit('setUser', response.data);
      return response.data;
    } catch (error) {
      console.error('Login fehlgeschlagen:', error);
      throw error;
    }
  },
  
  logout({ commit }) {
    commit('clearUser');
    // Optional: API-Call zum Invalidieren des Tokens
  }
}
```

### Getters
Getters sind berechnete Properties für den Store – ideal für abgeleitete Daten.

```javascript
const getters = {
  fullName: (state) => `${state.firstName} ${state.lastName}`,
  
  isAdmin: (state) => state.role === 'admin',
  
  // Getter können andere Getter verwenden
  greeting: (state, getters) => `Hallo, ${getters.fullName}!`
}
```

---

## Module mit Namespaces

Für größere Anwendungen organisierst du den Store in **namespaced modules**.

```javascript
// store/index.js
import { createStore } from 'vuex'
import user from './modules/user'
import progress from './modules/progress'
import map from './modules/map'

export default createStore({
  modules: {
    user,
    progress,
    map
  }
})
```

```javascript
// store/modules/progress.js
export default {
  namespaced: true,  // Wichtig!
  
  state: {
    completedLessons: [],
    moduleProgress: {}
  },
  
  mutations: {
    completeLesson(state, { moduleId, lessonId }) {
      const key = `${moduleId}-${lessonId}`;
      if (!state.completedLessons.includes(key)) {
        state.completedLessons.push(key);
      }
    }
  },
  
  getters: {
    moduleProgress: (state) => (moduleId) => {
      // Berechne Fortschritt für ein Modul
      const lessons = state.completedLessons.filter(
        key => key.startsWith(moduleId)
      );
      return lessons.length;
    }
  },
  
  actions: {
    async syncProgress({ commit, state }) {
      await api.saveProgress(state.completedLessons);
    }
  }
}
```

---

## Verwendung in Komponenten

### State & Getters abrufen

```vue
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// State direkt
const userName = computed(() => store.state.user.name)

// Mit Getter
const isAuthenticated = computed(() => store.getters['user/isAuthenticated'])

// Modularer Getter mit Parameter
const moduleProgress = computed(() => 
  store.getters['progress/moduleProgress']('js-fundamentals')
)
</script>
```

### Mutations committen

```javascript
// Ohne Namespace
store.commit('setUser', userData)

// Mit Namespace
store.commit('progress/completeLesson', {
  moduleId: 'js-fundamentals',
  lessonId: 'intro'
})
```

### Actions dispatchen

```javascript
// Asynchron mit await
const user = await store.dispatch('user/login', {
  email: 'user@example.com',
  password: 'secret'
})

// Oder mit Promise
store.dispatch('progress/syncProgress')
  .then(() => console.log('Gespeichert!'))
  .catch(err => console.error(err))
```

---

## ✅ Best Practices für unser Team

### 1. Modulstruktur spiegelt Backend-Konzepte
Organisiere Module analog zu Backend-Entities:

```
store/
├── modules/
│   ├── user.js       # Authentifizierung, Profil
│   ├── progress.js   # Lernfortschritt
│   ├── badges.js     # Errungenschaften
│   ├── tracks.js     # Track-Aktivierung
│   └── map.js        # Kartenzustand (Masterportal)
```

### 2. Getter für berechnete Daten
Vermeide Logik in Komponenten – lagere sie in Getter aus:

```javascript
// ❌ Schlecht: Logik in Komponente
const progress = computed(() => {
  const total = modules.value.length
  const completed = modules.value.filter(m => m.completed).length
  return Math.round((completed / total) * 100)
})

// ✅ Gut: Getter im Store
// store/getters.js
overallProgress: (state) => {
  const total = state.modules.length
  const completed = state.modules.filter(m => m.completed).length
  return Math.round((completed / total) * 100)
}
```

### 3. Mutations bleiben synchron
```javascript
// ❌ Niemals async in Mutations
mutations: {
  async loadUser(state) {  // FALSCH!
    const user = await api.getUser()
    state.user = user
  }
}

// ✅ Async-Logik in Actions
actions: {
  async loadUser({ commit }) {
    const user = await api.getUser()
    commit('setUser', user)
  }
}
```

### 4. Payload-Objekte statt mehrerer Parameter
```javascript
// ❌ Unübersichtlich
commit('updateLesson', moduleId, lessonId, completed, timestamp)

// ✅ Sauber mit Objekt
commit('updateLesson', {
  moduleId,
  lessonId,
  completed,
  timestamp
})
```

---

## 💼 Use Cases aus dieser Academy

### Use Case 1: Lesson Completion
```javascript
// In LessonRenderer.vue
const markCompleted = () => {
  store.commit('progress/completeLesson', {
    moduleId: props.moduleId,
    lessonId: props.lesson.id
  })
  
  // Badge-Logik wird durch Watcher getriggert
}
```

### Use Case 2: Badge-Vergabe mit Watchers
```javascript
// In DashboardView.vue
watch(
  () => store.getters['progress/moduleProgress']('vue-basics'),
  (progress) => {
    if (progress === 100) {
      const badge = getBadgeForModule('vue-basics')
      if (!store.getters['badges/hasBadge'](badge.id)) {
        store.commit('badges/earnBadge', badge.id)
      }
    }
  }
)
```

### Use Case 3: Track-Freischaltung
```javascript
// store/modules/tracks.js
mutations: {
  toggleTrack(state, trackId) {
    if (state.enabled.includes(trackId)) {
      state.enabled = state.enabled.filter(id => id !== trackId)
    } else {
      state.enabled.push(trackId)
    }
  }
}

getters: {
  isTrackEnabled: (state) => (trackId) => {
    return state.enabled.includes(trackId)
  }
}
```

---

## 🔍 Debugging-Tipps

### Vue DevTools
Nutze die Vue DevTools Browser-Extension:
- **Vuex Tab**: Sieh alle State-Änderungen in Echtzeit
- **Time Travel**: Springe zwischen Mutations zurück
- **State Inspector**: Untersuche den aktuellen Store-Zustand

### Console Logging
```javascript
mutations: {
  completeLesson(state, payload) {
    console.log('[MUTATION] completeLesson:', payload)
    // ... Mutation-Logik
  }
}
```

### Strict Mode (nur Development)
```javascript
export default createStore({
  strict: process.env.NODE_ENV !== 'production',
  // ...
})
```

> **Hinweis:** Im Strict Mode wirft Vuex einen Error, wenn State außerhalb von Mutations geändert wird. Dies hilft dir, unbeabsichtigte State-Änderungen zu vermeiden.

---

## 📝 Zusammenfassung

✅ **State** = Single Source of Truth
✅ **Mutations** = Synchrone State-Änderungen
✅ **Actions** = Asynchrone Logik + Mutations committen
✅ **Getters** = Berechnete/abgeleitete Daten
✅ **Modules** = Organisiere großen Store in logische Einheiten
✅ **Namespaces** = Vermeide Namenskonflikte zwischen Modulen

Studiere den Store dieser Academy (`src/store/`) als Referenz für Best Practices in echten Projekten!

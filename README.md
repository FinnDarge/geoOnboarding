# Onboarding Academy

A sleek Vue 3 + Vite application that guides junior developers through our onboarding curriculum: JavaScript basics, Vue/Vuex fundamentals, geo concepts with OpenLayers, Masterportal insights, testing philosophy, and a capstone project brief.

## Tech stack

- Vue 3 with `<script setup>`
- Vue Router for dashboard/module routing
- Vuex (state persisted to `localStorage`)
- Vite for development/build tooling
- OpenLayers for interactive map playgrounds
- Modern CSS with CSS variables + utility helpers

## Getting started

```bash
npm install
npm run dev
```

The dashboard lives at `http://localhost:5173`. Use the sidebar to switch between modules and lessons.

## Project structure

```
src/
  assets/          # global styles + utility classes
  components/      # UI building blocks (cards, quiz, map playground, etc.)
  data/            # Modules, quiz definitions, tasks, markdown content, geo configs
  layouts/         # AppLayout with sidebar + topbar
  router/          # Vue Router configuration
  store/           # Vuex modules (user, progress, quiz)
  views/           # Dashboard + Module experiences
```

Extend `src/data/modules.json` to add new modules/lessons and drop markdown/JSON resources into the matching folders.

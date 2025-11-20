JavaScript lets us orchestrate UX flows, wire APIs, and plug in geo libraries such as OpenLayers or Masterportal widgets. Use this refresher to align on fundamentals you will use throughout onboarding.

## Runtime & Execution Model
JavaScript runs single-threaded but handles concurrency via the event loop. The call stack executes synchronous code, while asynchronous tasks land in the task queue and move to the stack when idle.
```js
// Event loop example
console.log('sync 1');
queueMicrotask(() => console.log('microtask'));
setTimeout(() => console.log('timeout'), 0);
console.log('sync 2');
```

## Modern Syntax Essentials
Favor ES modules, destructuring, and optional chaining to keep code concise and explicit.
```js
// modules + destructuring + optional chaining
import { fetchLayer } from './layers.js';

const { id, metadata } = await fetchLayer('basemap');
const title = metadata?.title ?? 'Untitled';
console.log(`${id}: ${title}`);
```

## Data Flow & Errors
Prefer `const`/`let`, pure functions, and explicit error paths. Use `try`/`catch` around awaits that can fail and surface clear messages.
```js
// async/await with error handling
export async function loadGeoJSON(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Request failed: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Could not load GeoJSON', error);
    throw error;
  }
}
```

## DOM & Fetch Basics
Work with semantic DOM targets and keep network calls isolated in helpers. This keeps UI glue small and testable.
```js
// render a list of layer names
import { getLayers } from './layers.js';

const list = document.querySelector('#layers');
const layers = await getLayers();
list.innerHTML = layers.map(({ name }) => `<li>${name}</li>`).join('');
```

## Practical Exercises
Short, repeatable drills to keep syntax fresh.
```js
// map over features and compute a derived field
const featuresWithArea = features.map(({ geometry, properties }) => ({
  ...properties,
  areaSqKm: geometry.area / 1_000_000,
}));
```

## Further Reading
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) — canonical reference for core language behavior and APIs.
- [Eloquent JavaScript](https://eloquentjavascript.net/) — approachable deep dive into language mechanics and patterns.
- [JavaScript.info](https://javascript.info/) — tutorial-style coverage of modern JS with practical examples.
- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) — details on requests, responses, and streaming.

## Try It (Geo-focused)
- Fetch a public GeoJSON (e.g., OpenStreetMap data), parse it with `loadGeoJSON`, and log feature properties.
- Render a minimal map view using a geo library and add a click handler that logs coordinates with optional chaining for nested properties.
- Build a module that fetches layer metadata and updates the DOM list when a user toggles categories.

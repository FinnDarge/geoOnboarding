# Vue Basics in Masterportal Widgets

Vue embraces a declarative and reactive mindset. The following sections summarize core patterns you will encounter when extending Masterportal widgets.

## `script setup` Single File Components (SFC)
`script setup` keeps component logic concise and enables full type inference in `<script setup>` blocks. A minimal widget view often looks like:

```vue
<script setup lang="ts">
import {ref} from "vue";
import BaseButton from "@/components/BaseButton.vue";

const counter = ref(0);
const increment = () => counter.value++;
</script>

<template>
  <section class="mp-widget">
    <p>Counter: {{ counter }}</p>
    <BaseButton @click="increment">Add</BaseButton>
  </section>
</template>
```

Key takeaways for Masterportal widgets:
- Keep imports explicit; avoid unused options (Options API data/methods) when using `<script setup>`.
- Rely on props/emits macros (`defineProps`, `defineEmits`) for strongly typed widget inputs and events.
- Co-locate minimal styles in `<style scoped>` when widget-specific.
- Router-aware widgets can call `useRoute()` or `useRouter()` directly in the setup block to read query params that configure the widget state.

Further reading: [Vue SFC `<script setup>` guide](https://vuejs.org/api/sfc-script-setup.html), [Vue Router Composition API](https://router.vuejs.org/guide/advanced/composition-api.html).

## Composables for Extracting Logic
Composable functions let you share reactive logic across widgets (e.g., map interaction, layer toggling):

```ts
// composables/useLayerToggle.ts
import {ref} from "vue";

export function useLayerToggle(initialState = false) {
  const isVisible = ref(initialState);
  const toggle = () => (isVisible.value = !isVisible.value);

  return {isVisible, toggle};
}
```

```vue
<script setup lang="ts">
import {useLayerToggle} from "@/composables/useLayerToggle";

const {isVisible, toggle} = useLayerToggle(true);
</script>

<template>
  <label class="mp-widget-toggle">
    <input type="checkbox" v-model="isVisible" @change="toggle" />
    Show layer
  </label>
</template>
```

Guidelines for Masterportal:
- Keep composables UI-agnostic so different widgets (map, table, legend) can reuse them.
- Encapsulate shared API calls, router synchronization, or store access (e.g., Vuex modules) inside composables to avoid repeating logic.
- Document expected side effects (e.g., registering/unregistering map listeners) to make widget lifecycles predictable.

Further reading: [Vue Composition API](https://vuejs.org/guide/extras/composition-api-faq.html), [Composable patterns tutorial](https://vuejs.org/guide/reusability/composables.html).

## Lifecycle Hooks Compared to Options API
Composition API hooks mirror Options API hooks but work inside `setup()`. Mapping the two helps when migrating legacy widgets:

| Options API | Composition API | Typical Masterportal use |
| --- | --- | --- |
| `created` | `onBeforeMount` | Initialize widget configuration before DOM renders. |
| `mounted` | `onMounted` | Attach map listeners or fetch data once the DOM exists. |
| `beforeUnmount` | `onBeforeUnmount` | Clean up listeners/timers before removal. |
| `unmounted` | `onUnmounted` | Log analytics or commit final store updates. |

Example applying hooks:

```ts
<script setup lang="ts">
import {onMounted, onBeforeUnmount} from "vue";
import {useMap} from "@/composables/useMap";

const {map, registerClick, unregisterClick} = useMap();

onMounted(() => {
  registerClick(map.value, (coords) => console.debug("Clicked", coords));
});

onBeforeUnmount(() => {
  unregisterClick();
});
</script>
```

Guidelines for Masterportal widgets:
- Prefer `onMounted`/`onBeforeUnmount` for map interaction setup/teardown to avoid leaking listeners when widgets are toggled from the portal UI.
- When using Vue Router, watch route params in `watchEffect` or `watch` inside `setup()` rather than `beforeRouteUpdate` from the Options API.
- For Vuex modules, call `store.dispatch`/`store.commit` in `setup()` and clean up with `onBeforeUnmount` if you register dynamic modules or subscriptions.

Further reading: [Lifecycle hook reference](https://vuejs.org/api/composition-api-lifecycle.html), [Router navigation guards in setup](https://router.vuejs.org/guide/advanced/navigation-guards.html#in-component-guards), [Vuex store guide](https://vuex.vuejs.org/guide/).

## How It Fits Together for Masterportal
- Start each widget as a small `<script setup>` SFC that imports composables for map/state concerns and uses lifecycle hooks to manage listeners.
- Keep router awareness and Vuex integration inside composables to minimize coupling between widgets and the portal shell.
- Use the official docs and tutorials above to align implementations with Vue 3 best practices, making widgets easier to test and migrate.

For more in-depth examples, see:
- [Vue 3 Tutorial](https://vuejs.org/tutorial/)
- [Vue Router Guide](https://router.vuejs.org/guide/)
- [Vuex Essentials](https://vuex.vuejs.org/guide/)

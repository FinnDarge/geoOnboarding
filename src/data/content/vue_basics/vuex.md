## Vuex Patterns we rely on

- Keep modules namespaced for clarity.
- Mirror server concepts: `user`, `auth`, `progress`, `map`.
- Use getters for derived progress bars.
- Prefer mutations for synchronous updates and use actions when hitting APIs.

Study how the store inside this Academy mirrors our production repos.

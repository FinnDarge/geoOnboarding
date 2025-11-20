Testing Polar means proving that data pipelines and UI affordances stay in sync.

**Focus areas**
- Stub network calls for GeoJSON/WMTS endpoints so you can assert how layers render.
- Validate the map widget state when filters or searches are applied.
- Cover projection handling and interaction events to guard against regressions.

Keep your specs close to the Polar repository so reviewers can cross-reference implementation details
with the fixtures you add.

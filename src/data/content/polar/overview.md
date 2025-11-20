Polar is our lightweight map client built to consume modern tile services and vector layers.
Use this overview to understand how the repository is laid out before you dive into code.

**Core ideas to grasp**
- Packages are split into data access, UI, and rendering concerns.
- Map widgets stay presentational while data providers (GeoJSON, WMS/WMTS, MVT) handle fetching.
- Configuration lives alongside the Polar web package so environments can override defaults.

Skim the repository README and check how the sample applications wire sources and styles together.

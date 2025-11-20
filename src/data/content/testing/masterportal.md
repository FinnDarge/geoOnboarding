Use Mocha, Chai, and Sinon to prove that Masterportal extensions behave the way stakeholders expect.

**Focus areas**
- Exercise Vuex-driven stores that manipulate layers, legends, and query parameters.
- Mock OpenLayers interactions (clicks, zooms, drag events) so tests stay deterministic.
- Capture regression cases around configuration parsing to protect against broken layer lists.

Start by reading the existing Masterportal tests in the GitHub repo, then draft one happy-path and one
failure-path spec for the feature you are touching.

# Masterportal testing stack

The Masterportal codebase ships with Mocha, Chai, and Sinon preconfigured. Use the [core test folder](https://github.com/terrestris/marzipano-example/tree/master/test) as a reference for structure and helpers when you add new specs for widgets or layer adapters.

- Start with happy-path component tests that verify Vue rendering, store interactions, and emitted events for any extensions you create.
- Mock network responses for WMS/WFS calls with Sinon fakes to keep suites deterministic.
- Document fixtures alongside your specs so other teams can reuse them.

When your specs explain the intent of a change and verify both state and DOM outcomes, move on to the checklist.

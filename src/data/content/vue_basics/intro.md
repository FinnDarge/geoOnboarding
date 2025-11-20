Vue is the framework that powers our user interfaces and Masterportal widgets. It handles everything from rendering dynamic content to managing application state and responding to user interactions. Understanding Vue fundamentals is essential for building and maintaining the components you'll work with daily.

## Why Vue Matters

Vue gives us a declarative, reactive way to build interfaces. Instead of manually updating the DOM whenever data changes, Vue automatically keeps the UI in sync with your application state. This makes our code cleaner, more predictable, and easier to test. In Masterportal, Vue components wrap map interactions, layer controls, and configuration panels.

## What You Need to Know

You should be comfortable with:

- **Single File Components (SFC)** — how `<script setup>`, `<template>`, and `<style>` work together
- **Reactivity** — using `ref` and `reactive` to create data that triggers UI updates
- **Component communication** — props for passing data down, emits for sending events up
- **Lifecycle hooks** — when components mount, update, and unmount
- **Composables** — extracting and reusing reactive logic across components
- **Vuex patterns** — how we organize application state in modules

These concepts appear in every Vue component you'll encounter. Whether you're building a new widget, updating existing functionality, or debugging issues, you'll need to understand how Vue's reactivity system and component model work.

## Learning Path

Focus on the core concepts first. The external resources in later lessons provide detailed explanations and interactive examples. Pay special attention to the Composition API (with `<script setup>`) since that's what we use in our codebase, not the older Options API.

If reactive data, lifecycle hooks, or Vuex modules feel unclear, speak up early. Your mentors can walk you through practical examples from our actual widgets to make these patterns concrete before you start implementing features.

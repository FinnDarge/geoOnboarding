Vue ist das Framework, das unsere Benutzeroberflächen und Masterportal-Widgets antreibt. Es kümmert sich um alles — vom Rendern dynamischer Inhalte über das Verwalten des Anwendungszustands bis zum Reagieren auf Benutzerinteraktionen. Das Verständnis der Vue-Grundlagen ist essenziell für das Erstellen und Warten der Komponenten, mit denen du täglich arbeiten wirst.

## Warum Vue wichtig ist

Vue gibt uns eine deklarative, reaktive Art, Interfaces zu erstellen. Anstatt das DOM manuell zu aktualisieren, wenn sich Daten ändern, hält Vue die UI automatisch mit dem Anwendungszustand synchron. Das macht unseren Code sauberer, vorhersagbarer und einfacher zu testen. In Masterportal wrappen Vue-Komponenten Karten-Interaktionen, Layer-Controls und Konfigurationspanels.

## Was du wissen musst

Du solltest vertraut sein mit:

- **Single File Components (SFC)** — wie `<script setup>`, `<template>` und `<style>` zusammenarbeiten
- **Reaktivität** — Verwendung von `ref` und `reactive`, um Daten zu erstellen, die UI-Updates auslösen
- **Komponenten-Kommunikation** — Props zum Weitergeben von Daten nach unten, Emits zum Senden von Events nach oben
- **Lifecycle Hooks** — wann Komponenten mounten, updaten und unmounten
- **Composables** — Extrahieren und Wiederverwenden reaktiver Logik über Komponenten hinweg
- **Vuex Patterns** — wie wir den Anwendungszustand in Modulen organisieren

Diese Konzepte erscheinen in jeder Vue-Komponente, der du begegnen wirst. Egal ob du ein neues Widget baust, bestehende Funktionalität aktualisierst oder Probleme debuggst — du musst verstehen, wie Vues Reaktivitätssystem und Komponentenmodell funktionieren.

## Lernpfad

Fokussiere dich zuerst auf die Kernkonzepte. Die externen Ressourcen in späteren Lektionen bieten detaillierte Erklärungen und interaktive Beispiele. Achte besonders auf die Composition API (mit `<script setup>`), da wir diese in unserer Codebasis verwenden, nicht die ältere Options API.

Wenn reaktive Daten, Lifecycle Hooks oder Vuex-Module unklar sind, sprich früh an. Deine Mentor:innen können dich durch praktische Beispiele aus unseren echten Widgets führen, um diese Muster konkret zu machen, bevor du mit der Implementierung von Features beginnst.

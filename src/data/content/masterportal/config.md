# Praktische Übung: Deine erste Config-Anpassung

## Ziel dieser Lektion

Du wirst lernen, wie man in einer echten Masterportal-Umgebung arbeitet, indem du:

1. Eine **Sandbox-Config duplizierst** zum sicheren Experimentieren
2. Ein **WMS + WFS-Paar registrierst** 
3. Die Änderungen **in der UI validierst**
4. Deine Änderungen **dokumentierst** für zukünftige Teammitglieder

## Schritt 1: Sandbox-Config duplizieren

### Warum eine Sandbox?

Eine Sandbox-Config ist eine Kopie eines bestehenden Portals, in der du **gefahrlos experimentieren** kannst, ohne produktive Portale zu beeinträchtigen.

### Config duplizieren

```bash
cd masterportal/portal
cp -r basic sandbox-[dein-name]
cd sandbox-[dein-name]
```

Beispiel:
```bash
cp -r basic sandbox-maria
cd sandbox-maria
```

### Portal-Titel anpassen

Öffne `config.json` und ändere den Titel:

```json
{
  "portalConfig": {
    "portalTitle": {
      "title": "Sandbox - Maria",
      "logo": "https://www.masterportal.org/files/masterportal/img/Logo_Masterportal.svg"
    }
  }
}
```

### Testen

```bash
cd ../..
npm start
```

Öffne: `http://localhost:9001/portal/sandbox-maria/`

✅ Dein Sandbox-Portal sollte jetzt mit deinem Namen erscheinen!

## Schritt 2: WMS + WFS-Paar registrieren

### Was ist ein WMS + WFS-Paar?

Oftmals gibt es für denselben Datensatz zwei Services:

- **WMS:** Zeigt die Daten als **Rasterbild** (schnell, für Hintergrund)
- **WFS:** Liefert die **Vektordaten** (Features mit Attributen, interaktiv)

**Beispiel:** Krankenhäuser
- WMS: Rote Kreuze auf der Karte (Bild)
- WFS: Punkte mit Attributen (Name, Adresse, Bettenzahl)

### Schritt 2.1: WMS in services.json hinzufügen

Öffne `resources/services.json` und füge hinzu:

```json
[
  {
    "id": "wms_krankenhaeuser",
    "name": "Krankenhäuser (WMS)",
    "url": "https://geodienste.hamburg.de/HH_WMS_Krankenhaeuser",
    "typ": "WMS",
    "layers": "krankenhaus",
    "format": "image/png",
    "version": "1.3.0",
    "transparent": true,
    "singleTile": false
  },
  {
    "id": "wfs_krankenhaeuser",
    "name": "Krankenhäuser (WFS)",
    "url": "https://geodienste.hamburg.de/HH_WFS_Krankenhaeuser",
    "typ": "WFS",
    "featureType": "krankenhaus",
    "version": "2.0.0",
    "outputFormat": "application/json"
  }
]
```

**Anatomie eines Layer-Eintrags:**

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| `id` | Eindeutige Kennung (selbst gewählt) | `"wms_krankenhaeuser"` |
| `name` | Anzeigename für User | `"Krankenhäuser"` |
| `url` | Service-Endpoint | `"https://..."` |
| `typ` | Service-Typ | `"WMS"`, `"WFS"`, `"WCS"` |
| `layers` | Layer-Name (WMS) | `"krankenhaus"` |
| `featureType` | Feature-Typ (WFS) | `"krankenhaus"` |
| `version` | OGC-Version | `"1.3.0"`, `"2.0.0"` |
| `format` | Bildformat (WMS) | `"image/png"` |
| `outputFormat` | Datenformat (WFS) | `"application/json"` |

### Schritt 2.2: Layer in config.json aktivieren

Öffne `config.json` und füge die Layer unter `layerConfig` hinzu:

```json
{
  "layerConfig": {
    "subjectlayer": {
      "elements": [
        {
          "id": "wms_krankenhaeuser",
              "id": "wms_krankenhaeuser",
              "name": "Krankenhäuser (Rasterbild)",
              "visibility": false,
              "transparency": 50
            },
            {
              "id": "wfs_krankenhaeuser",
              "name": "Krankenhäuser (Interaktiv)",
              "visibility": true,
              "styleId": "krankenhaus_style",
              "mouseHoverField": "name"
            }
          ]
        }
      }
    }
  }
}
```

**Config-Flags erklärt:**

| Flag | Bedeutung | Werte |
|------|-----------|-------|
| `visibility` | Beim Start sichtbar? | `true` / `false` |
| `transparency` | Transparenz in % | `0` (opak) bis `100` (unsichtbar) |
| `styleId` | Referenz zu style.json | String (z.B. `"krankenhaus_style"`) |
| `mouseHoverField` | Welches Attribut bei Hover zeigen? | Attributname (z.B. `"name"`) |

### Schritt 2.3: Style definieren (optional)

Falls du WFS-Features stylen willst, öffne `resources/style.json`:

```json
[
  {
    "styleId": "krankenhaus_style",
    "rules": [
      {
        "style": {
          "type": "icon",
          "imageName": "hospital.svg",
          "imageScale": 1.2,
          "imageWidth": 32,
          "imageHeight": 32
        }
      }
    ]
  }
]
```

## Schritt 3: In der UI validieren

### Browser neu laden

Drücke `Strg + F5` (Cache-Refresh) oder starte `npm start` neu.

### Checkliste

✅ **Portal lädt ohne Fehler?**  
   → Öffne Browser-Console (F12), schaue nach Fehlermeldungen

✅ **Layer erscheinen im Menü?**  
   → Öffne das Layer-Menü, suche "Gesundheit" → "Krankenhäuser"

✅ **WFS-Layer ist interaktiv?**  
   → Klicke auf ein Feature, öffnet sich ein Info-Fenster?

✅ **WMS-Layer zeigt Bild?**  
   → Aktiviere den WMS-Layer, siehst du die Symbole?

### Häufige Probleme

**❌ Layer erscheint nicht im Menü**

Prüfe:
- ID in `services.json` und `config.json` identisch?
- JSON-Syntax korrekt? (keine Kommas am Ende)
- Browser-Cache geleert?

**❌ WMS zeigt nichts**

Prüfe:
- URL korrekt?
- Layer-Name korrekt? (Case-sensitive!)
- Im richtigen Kartenausschnitt? (Zoom rein/raus)

**❌ WFS-Features nicht klickbar**

Prüfe:
- `featureType` korrekt?
- WFS-Service antwortet? (Network-Tab in Browser-Console)
- GFI-Tool (GetFeatureInfo) aktiviert?

### Debugging mit Browser-Tools

**Console-Tab:**

Nutze die Browser Console (F12) um Fehler zu finden:

```javascript
// Fehler und Warnungen werden hier angezeigt
// Prüfe auf:
// - JSON Syntax-Fehler
// - 404 Fehler beim Laden von Config-Dateien
// - WMS/WFS Service-Fehler
```

**Network-Tab:**

- Filtere auf "wfs" oder "wms" um Service-Requests zu sehen
- Status Codes prüfen:
  - `200` = OK
  - `404` = Service nicht gefunden (URL prüfen)
  - `500` = Server-Fehler (Service-Problem)
  - `CORS-Fehler` = Service muss CORS-Header setzen

**Application-Tab:**

- Local Storage/Session Storage prüfen
- Gespeicherte Portal-Einstellungen ansehen

> 💡 **Tipp**: Mit den Vue DevTools (Browser-Extension) kannst du auch den Vuex Store inspizieren und sehen, welche Layer geladen sind.

## Schritt 4: Änderungen dokumentieren

### Warum dokumentieren?

**Für zukünftige Nachwuchskräfte** und dein Team:
- Was hast du geändert?
- Warum diese Konfiguration?
- Welche Flags bewirken was?

### Dokumentations-Template

Erstelle eine Datei `CHANGELOG.md` in deinem Portal-Ordner:

```markdown
# Sandbox-Maria Changelog

## 2026-01-09: WMS + WFS Krankenhäuser hinzugefügt

### Änderungen

1. **services.json:**
   - `wms_krankenhaeuser`: Rasterbild der Krankenhausstandorte
   - `wfs_krankenhaeuser`: Vektordaten mit Attributen

2. **config.json:**
   - Neuer Ordner "Gesundheit" unter Fachdaten
   - WFS-Layer standardmäßig sichtbar (visibility: true)
   - WMS-Layer mit 50% Transparenz

3. **style.json:**
   - `krankenhaus_style`: Rotes Kreuz-Icon

### Config-Flags erklärt

- **visibility: true** → Layer beim Start anzeigen
- **transparency: 50** → 50% durchsichtig
- **mouseHoverField: "name"** → Bei Hover über Feature: Name anzeigen
- **styleId** → Verbindet Layer mit Style-Definition

### Getestet

✅ Layer erscheinen im Menü  
✅ WFS-Features klickbar und zeigen Attribute  
✅ WMS-Layer zeigt Symbole an richtigen Positionen  
✅ Keine Console-Errors  

### Lessons Learned

- IDs müssen zwischen services.json und config.json **exakt** übereinstimmen
- Browser-Cache muss geleert werden nach Config-Änderungen
- WFS ist interaktiver aber langsamer als WMS
- Für viele Features: WMS verwenden, für Details: WFS
```

### Dokumentation ins Repo committen

```bash
git add CHANGELOG.md
git commit -m "docs: Add Krankenhäuser WMS+WFS layer documentation"
```

## Best Practices

### ✅ Do's

- **Sprechende IDs verwenden:** `wfs_krankenhaeuser` statt `layer_123`
- **Konsistente Benennung:** Wenn WMS + WFS, gleichen Namen verwenden
- **Ordner-Struktur nutzen:** Gruppiere Layer thematisch
- **Changelog pflegen:** Dokumentiere alle Änderungen
- **Testen auf verschiedenen Zoom-Levels:** Manche Layer nur auf bestimmten Scales sichtbar

### ❌ Don'ts

- **Keine Produktiv-Configs direkt ändern:** Immer erst in Sandbox testen!
- **Keine unvalidierte JSON:** Vor Commit mit jsonlint.com prüfen
- **Keine Hardcoded Credentials:** API-Keys gehören nicht in Configs
- **Nicht ohne Tests committen:** Immer lokal testen vor Push

## Zusammenfassung

Du hast gelernt:

1. ✅ Sandbox-Config erstellen und testen
2. ✅ Layer in `services.json` definieren
3. ✅ Layer in `config.json` aktivieren
4. ✅ Styles in `style.json` anpassen
5. ✅ In der UI validieren
6. ✅ Debugging mit Browser-Tools
7. ✅ Änderungen dokumentieren

## Nächste Schritte

- **Experimentiere** mit anderen Layer-Typen (XYZ, Vector Tiles, GeoJSON)
- **Erkunde** weitere Config-Flags in der offiziellen Dokumentation
- **Frage** erfahrene Teammitglieder nach Best Practices für dein Projekt
- **Bereite dich vor** auf Tool-Entwicklung (nächstes Modul)

Gut gemacht! Du bist jetzt bereit für komplexere Konfigurationen und eigene Tool-Entwicklung! 🎉

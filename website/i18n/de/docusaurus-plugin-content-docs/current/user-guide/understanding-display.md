# Das Display verstehen

Diese Seite erklärt, welche Informationen auf dem MyStation-Go E-Paper-Display angezeigt werden und wo.

---

## Die drei Anzeigemodi

MyStation-Go bietet drei Anzeigemodi, je nach Bedarf:

| Modus                | Was du siehst                                      |
|----------------------|----------------------------------------------------|
| **Halb & Halb**      | Wetter auf einer Hälfte, Abfahrten auf der anderen |
| **Wetter Vollbild**  | Vollständige Wetteranzeige mit Vorhersagediagramm  |
| **Abfahrt Vollbild** | Vollständige Abfahrtsliste mit mehr Einträgen      |

---

## Modus 1: Halb & Halb (Standard)

```
┌─────────────────────────────┐
│ Wetter       │ Abfahrten    │
│ Temp, Icon,  │ Nächste Züge │
│ Vorhersage   │ Busse usw.   │
└──────────────┴──────────────┘
```

**Wetterbereich:**

- Aktuelle Temperatur
- „Gefühlt wie"-Temperatur
- Wettersymbol und Beschreibung
- 12-Stunden-Temperaturvorhersagediagramm

**Abfahrtsbereich:**

- Verkehrsmittelsymbol (🚂 RE, 🚊 S-Bahn, 🚌 Bus)
- Liniennummer / -name
- Ziel
- Gleis- oder Haltestellennummer
- Abfahrtszeit oder Verspätung

**Fußzeile:**

- Akkustand
- WLAN-Status
- Zeitstempel der letzten Aktualisierung

---

## Modus 2: Wetter Vollbild

```
┌─────────────────────────────┐
│                             │
│   Großes Wettersymbol       │
│   Temperatur & Vorhersage   │
│   Wind, Luftfeuchtigkeit    │
│   Sonnenauf-/-untergang     │
│                             │
└─────────────────────────────┘
```

**Hauptbereich:**

- Großes Wettersymbol
- Aktuelle Temperatur und „gefühlt wie"
- 12-Stunden-Temperaturdiagramm

**Zusätzliche Details:**

- Sonnenaufgangs- und -untergangszeiten
- Luftfeuchtigkeit in Prozent
- Windgeschwindigkeit und -richtung
- Regenwahrscheinlichkeit
- Bewölkungsgrad

**Am besten geeignet für:**

- Wetterplanung vor dem Ausgehen
- Outdoor-Aktivitäten
- Tagesüberblick

### Tagesvorhersage-Ansicht

Im Wetter-Vollbildmodus kannst du mit den Tasten die Wettervorhersage der kommenden Tage durchblättern. Drücke **Taste 2**, um einen Tag vorwärts zu gehen, **Taste 3**, um zurückzugehen, und **Taste 1**, um zum heutigen Wetter zurückzukehren.

```
┌─────────────────────────────────────────┐
│  Do, 04. Sep                  Frankfurt │
├─────────────────────────────────────────┤
│ [Mo][Di][Mi][DO][Fr][Sa]                │
│               ^^                        │
│          (ausgewählter Tag)             │
├─────────────────────────────────────────┤
│                                         │
│   Temperatur- und Regendiagramm         │
│   06:00 ──────────────────── 00:00      │
│   (19-Stunden-Vorhersage für           │
│    den ausgewählten Tag)                │
│                                         │
└─────────────────────────────────────────┘
```

**Was du siehst:**

- **Kopfzeile**: Datum des ausgewählten Tages und Stadtname
- **Tagesübersicht**: 6 Vorhersagetage als kleine Vorschauen, der ausgewählte Tag ist hervorgehoben
- **Diagramm**: Temperatur- und Niederschlagsdiagramm über die volle Breite von 06:00 bis Mitternacht (00:00)

Das Display kehrt automatisch nach **2 Minuten** ohne Tastendruck zum heutigen Wetter zurück.

> 💡 Die Anzahl der verfügbaren Vorhersagetage hängt vom gewählten Wettermodell in deinen Einstellungen ab. Einige Modelle bieten weniger Tage als andere.

---

## Modus 3: Abfahrt Vollbild

```
┌─────────────────────────────┐
│                             │
│   Abfahrtsliste             │
│   Mehr Einträge sichtbar    │
│   Detaillierte Zeitangaben  │
│   Gleisnummern              │
│                             │
└─────────────────────────────┘
```

**Für jede Abfahrt:**

- Verkehrsmittelsymbol
- Liniennummer oder -name
- Endziel
- Wichtige Zwischenhalte (über)
- Gleis- oder Haltestellennummer
- Abfahrtszeit
- Verspätungsinformation (falls vorhanden)

**Verkehrsmitteltypen:**

- 🚂 **RE** — Regionalexpress
- 🚊 **S** — S-Bahn
- 🚆 **RB** — Regionalbahn
- 🚌 **Bus** — Linienbus
- 🚎 **Tram** — Straßenbahn
- 🚇 **U** — U-Bahn

**Zeitanzeige:**

- „jetzt" — Fährt sofort ab
- „in X Min" — Minuten bis zur Abfahrt
- „+X Min" — X Minuten Verspätung
- Genaue Uhrzeit (z.B. „14:35")

**Am besten geeignet für:**

- Pendeln zur Arbeit
- Verbindungen planen
- Mehrere Abfahrten prüfen

---

## Anzeigeelemente erklärt

### Wettersymbole

| Symbol | Bedeutung         |
|--------|-------------------|
| ☀️     | Klar / Sonnig     |
| ⛅      | Teilweise bewölkt |
| ☁️     | Bewölkt           |
| 🌧️    | Regen             |
| ⛈️     | Gewitter          |
| 🌨️    | Schnee            |
| 🌫️    | Nebel             |
| 🌬️    | Windig            |

### Temperaturdiagramm

Das 12-Stunden-Vorhersagediagramm zeigt:

- Wie sich die Temperatur im Laufe des Tages entwickelt
- Steigende Linie: Temperatur steigt
- Fallende Linie: Temperatur sinkt
- Hilft bei der Planung für den restlichen Tag

**Tagesvorhersage-Ansicht** (Wetter-Vollbildmodus, zukünftige Tage durchblättern):

- Erweitertes 19-Stunden-Diagramm von 06:00 bis 00:00 (Mitternacht)
- Zeigt Temperatur und Niederschlag für den ausgewählten Tag
- Umfasst den gesamten aktiven Teil des Tages

### Fußzeile

- **Akkustand** — Verbleibende Ladekapazität in Prozent
- **WLAN-Status** — Ob das Gerät verbunden ist
- **Letzte Aktualisierung** — Uhrzeit der letzten Datenabfrage

---

## E-Paper-Bildschirm — Normales Verhalten

Das MyStation-Go verwendet einen E-Paper-Bildschirm (wie ein Kindle). Das ist normal:

- ✅ Der Bildschirm **flackert kurz** beim Aktualisieren (schwarz-weißes Aufblinken)
- ✅ Das Aktualisieren dauert **3–4 Sekunden** — das ist die Technologie, keine Störung
- ✅ Das Bild **bleibt ohne Strom** erhalten — das ist der Vorteil von E-Paper
- ✅ Leichte **Geisterbilder** vom vorherigen Bild können sichtbar sein — verschwinden mit der Zeit

Das ist **kein Fehler:**

- ❌ Bildschirm bleibt dauerhaft leer
- ❌ Verzerrtes oder unlesbares Bild
- ❌ Aktualisiert sich nie

Probleme? Siehe [Hilfe & Problemlösung](troubleshooting.md).


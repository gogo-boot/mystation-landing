# Die Tasten benutzen

MyStation-Go hat **3 Tasten** an der Seite des Geräts. Diese Seite erklärt, was du damit tun kannst —
geordnet nach dem, was du erreichen möchtest.

---

## Tastenübersicht

![Gerät von der Seite mit beschrifteten Tasten: Taste 1 (links), Taste 2 (Mitte), Taste 3 (rechts)](/img/user-guide/IMG_0870-b123.jpeg)

---

## Anwendungsfälle — Was möchtest du tun?

### „Ich möchte alles auf einen Blick sehen"

**Taste 1 kurz drücken**

Das Display wechselt in den **Halb & Halb-Modus**:

- Linke Hälfte: Aktuelle Wetterzusammenfassung
- Rechte Hälfte: Nächste Abfahrten von deiner Haltestelle

Kehrt nach **2 Minuten** zum konfigurierten Anzeigemodus zurück.

---

### „Brauche ich einen Regenschirm? Wie ist das Wetter?"

**Taste 2 kurz drücken**

Das Display wechselt in den **Wetter-Vollbildmodus**:

- Großes Wettersymbol und Beschreibung
- Aktuelle Temperatur und „gefühlt wie"
- 12-Stunden-Temperaturvorhersagediagramm
- Wind, Luftfeuchtigkeit, Regenwahrscheinlichkeit
- Sonnenaufgangs- und -untergangszeiten

Kehrt nach **2 Minuten** zum konfigurierten Anzeigemodus zurück.

---

### „Wann fährt der nächste Zug / Bus?"

**Taste 3 kurz drücken**

Das Display wechselt in den **Abfahrt-Vollbildmodus**:

- Vollbild-Abfahrtsliste
- Mehr Abfahrten auf einmal sichtbar
- Liniennummer, Ziel, Abfahrtszeit
- Verspätungsinformationen und Gleisnummer

Kehrt nach **2 Minuten** zum konfigurierten Anzeigemodus zurück.

---

### „Ich möchte die Wettervorhersage für die nächsten Tage sehen"

**Dies funktioniert nur, wenn das Display auf Wetter Vollbild eingestellt ist.**

Drücke in der heutigen Wetteransicht **Taste 2**, um die Mehrtagesvorhersage zu öffnen
(beginnt mit morgen). Sobald du blätterst:

- **Taste 2 (kurz drücken)** — Nächster Tag (morgen → übermorgen → …)
- **Taste 3 (kurz drücken)** — Vorheriger Tag
- **Taste 1 (kurz drücken)** — Zurück zum heutigen Wetter

Die Vorhersageansicht zeigt:
- Datum und Stadtname oben
- 6-Tage-Übersicht mit hervorgehobenem ausgewählten Tag
- Temperatur- und Regendiagramm über die volle Breite (06:00 bis Mitternacht)

Nach **2 Minuten** kehrt das Display automatisch zum heutigen Wetter zurück.

> 💡 Die Anzahl der verfügbaren Vorhersagetage hängt vom gewählten Wettermodell in deinen Einstellungen ab. Einige Modelle bieten weniger Tage.

---

### „Wann erzeugen meine Solarmodule am meisten Strom?" (Sonnenstrom)

**Dies funktioniert nur, wenn das Display auf Wetter Vollbild eingestellt ist.**

Drücke in der heutigen Wetteransicht **Taste 3**, um die **Sonnenstrom**-Ansicht
(Sonneneinstrahlung) zu öffnen. Sie zeigt, wie stark die Sonne über den Tag scheint — so
siehst du, wann die Sonne und damit deine Solarmodule / dein Balkonkraftwerk am stärksten
sind. Sie beginnt mit **heute**. Sobald du blätterst:

- **Taste 3 (kurz drücken)** — öffnet Sonnenstrom, dann einen Tag zurück
- **Taste 2 (kurz drücken)** — Nächster Tag
- **Taste 1 (kurz drücken)** — Zurück zum heutigen Wetter

Die Sonnenstrom-Ansicht zeigt:
- „Sonnenstrom" und deine Stadt oben
- Eine 7-Tage-Übersicht **inklusive heute („Heute")**, jeder Tag mit seiner Gesamt-Sonnenenergie in **kWh/m²**
- Eine Sonnenstärke-Kurve über die volle Breite für den gewählten Tag — der **höchste Punkt der Kurve ist der Zeitpunkt mit der stärksten Sonne** an diesem Tag. Das Diagramm skaliert sich automatisch pro Tag (Achse in W/m²).

Nutze die täglichen **kWh/m²**-Werte, um Tage auf einen Blick zu vergleichen, und die Kurve,
um die besten Stunden für die Solarerzeugung zu planen.

Nach **2 Minuten** kehrt das Display automatisch zum heutigen Wetter zurück.

> 💡 **Zwischen Wettervorhersage und Sonnenstrom wechseln:** Während du blätterst, wechseln
> Taste 2 und Taste 3 nur zwischen den Tagen — nicht zwischen den Ansichten. Zum Wechseln
> drücke zuerst **Taste 1** (zurück zu heute), dann **Taste 2** für die Wettervorhersage oder
> **Taste 3** für Sonnenstrom.

> 💡 Sonnenstrom benötigt Solardaten von deinem Wettermodell. Hat ein Tag keine Solardaten,
> zeigt dieser Tag stattdessen die normale Temperatur-/Regenvorhersage.

---

### „Ich möchte meine Haltestelle, meinen Standort oder Einstellungen ändern"

**Taste 1 für 5 Sekunden halten**

MyStation-Go öffnet den **Konfigurationsmodus**:

- Das Display zeigt den Einrichtungsbildschirm
- MyStation-Go sendet einen WLAN-Hotspot (`MyStation-XXXXXXXX`)
- Verbinde dein Handy mit dem Hotspot und öffne `http://10.0.1.1`
- Alle vorherigen Einstellungen sind bereits geladen — ändere nur, was du brauchst

Vollständige Anleitung: [Einstellungen ändern](configure-mode.md)

---

### „Ich möchte Geräteinformationen und aktuelle Einstellungen sehen"

**Taste 2 für 5 Sekunden halten**

Das Display zeigt **Geräteinformationen**:

- Softwareversion
- Aktueller Anzeigemodus
- Konfigurierte Aktualisierungsintervalle (Wetter und Abfahrten)
- WLAN-Status und IP-Adresse
- Akkustand

---

### „Ich möchte die Software manuell aktualisieren"

**Taste 3 für 5 Sekunden halten**

Startet sofort ein **Softwareupdate**:

- MyStation-Go verbindet sich mit dem Update-Server
- Wenn eine neue Version verfügbar ist, wird sie heruntergeladen und installiert
- Das Gerät startet nach einem erfolgreichen Update neu

> 💡 Normalerweise musst du das nicht tun — Updates erfolgen automatisch über Nacht.
> Nutze dies, wenn du ein sofortiges Update erzwingen möchtest.

---

### „Das Gerät hängt oder verhält sich falsch"

**Den Einschalter auf AUS schieben**, dann wieder auf EIN schieben, um das Gerät neu zu starten.

> 💡 Dieses Gerät hat einen eingebauten Akku. Der Einschalter ist der richtige Weg, es neu zu starten.
> Alle gespeicherten Einstellungen bleiben nach einem Neustart erhalten.

---

### „Ich möchte das Gerät auf Werkseinstellungen zurücksetzen"

**Taste 1 + Taste 2 gleichzeitig für 5 Sekunden halten**

Führt einen **Werksreset** durch:

- Löscht alle gespeicherten Einstellungen (WLAN, Haltestelle, Konfiguration)
- Gerät startet neu wie fabrikneu
- Du musst die komplette Einrichtung erneut durchführen

> ⚠️ **Dies kann nicht rückgängig gemacht werden.** Nur verwenden, wenn du wirklich von vorne anfangen möchtest.

---

## Verhalten im temporären Modus

Wenn du eine Taste kurz drückst (Taste 1, 2 oder 3), ist der neue Modus **vorübergehend**:

- Dauer: **2 Minuten**
- Nach 2 Minuten kehrt das Display zum **konfigurierten Anzeigemodus** zurück
- Der temporäre Modus wird auf dem Display angezeigt

So kannst du schnell Wetter oder Abfahrten prüfen, ohne dauerhaft die Konfiguration zu ändern.

---

## Tastenübersichtstabelle

| Aktion                       | Taste       | Drücken       | Ergebnis                     |
|------------------------------|-------------|---------------|------------------------------|
| Halb & Halb-Ansicht          | Taste 1     | Kurz drücken  | Temporärer Modus (2 Min)     |
| Wetter-Vollbildansicht       | Taste 2     | Kurz drücken  | Temporärer Modus (2 Min)     |
| Abfahrt-Vollbildansicht      | Taste 3     | Kurz drücken  | Temporärer Modus (2 Min)     |
| Konfigurationsmodus öffnen   | Taste 1     | 5 Sek. halten | Einstellungsseite im Browser |
| Geräteinformationen anzeigen | Taste 2     | 5 Sek. halten | Geräteinfoanzeige            |
| Softwareupdate auslösen      | Taste 3     | 5 Sek. halten | Softwareupdate               |
| Werksreset                   | Taste 1 + 2 | 5 Sek. halten | Alle Einstellungen löschen   |

> 💡 **Wetter-Vollbildmodus:** Wenn das Display auf Wetter Vollbild eingestellt ist, wechseln die Tasten zur Tagesnavigation. Aus der heutigen Ansicht öffnet **Taste 2** die Mehrtages-Wettervorhersage und **Taste 3** die **Sonnenstrom**-Ansicht (Solar). Während du blätterst: Taste 2 = nächster Tag, Taste 3 = vorheriger Tag, Taste 1 = zurück zu heute. Siehe [„Wettervorhersage für die nächsten Tage"](#ich-möchte-die-wettervorhersage-für-die-nächsten-tage-sehen) und [„Sonnenstrom"](#wann-erzeugen-meine-solarmodule-am-meisten-strom-sonnenstrom) für Details.

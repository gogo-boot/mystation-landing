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

Im Wetter-Vollbildmodus ändern die Tasten ihre Funktion:

- **Taste 2 (kurz drücken)** — Vorhersage für den nächsten Tag anzeigen. Erneut drücken für den übernächsten Tag usw.
- **Taste 3 (kurz drücken)** — Einen Tag zurückgehen
- **Taste 1 (kurz drücken)** — Zurück zum heutigen Wetter

Die Vorhersageansicht zeigt:
- Datum und Stadtname oben
- 6-Tage-Übersicht mit hervorgehobenem ausgewählten Tag
- Temperatur- und Regendiagramm über die volle Breite (06:00 bis Mitternacht)

Nach **2 Minuten** kehrt das Display automatisch zum heutigen Wetter zurück.

> 💡 Die Anzahl der verfügbaren Vorhersagetage hängt vom gewählten Wettermodell in deinen Einstellungen ab. Einige Modelle bieten weniger Tage.

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

> 💡 **Wetter-Vollbildmodus:** Wenn das Display auf Wetter Vollbild eingestellt ist, wechseln die Tasten zur Tagesnavigation — Taste 2 vorwärts, Taste 3 zurück, Taste 1 zurück zu heute. Siehe [„Ich möchte die Wettervorhersage für die nächsten Tage sehen"](#ich-möchte-die-wettervorhersage-für-die-nächsten-tage-sehen) für Details.

# Einstellungsübersicht

Diese Seite erklärt jede Einstellung im MyStation-Go-Einstellungsbildschirm.

Um den Einstellungsbildschirm zu öffnen, halte **Taste 1 für 5 Sekunden** gedrückt.
Nicht sicher wie? Siehe [Einstellungen ändern](configure-mode.md).

---

## Anzeigemodus

Wähle, was während des normalen Betriebs auf dem Bildschirm erscheint.

| Modus                | Was du siehst                                            |
|----------------------|----------------------------------------------------------|
| **Halb & Halb**      | Wetter auf einer Seite, Abfahrten auf der anderen        |
| **Wetter Vollbild**  | Vollbild-Wetterdetails mit 12-Stunden-Vorhersagediagramm |
| **Abfahrt Vollbild** | Vollbild-Abfahrtsliste — mehr Einträge sichtbar          |

> 💡 Dies ist deine **dauerhafte** Einstellung. Das Drücken der Tasten wechselt die Ansicht vorübergehend
> für 2 Minuten, dann kehrt sie zu dieser Einstellung zurück. Siehe [Die Tasten benutzen](button-controls.md).

---

## Standort

### Wie MyStation-Go deinen Standort findet

Wenn du die Einstellungsseite öffnest, schätzt MyStation-Go deinen Standort automatisch
anhand nahegelegener WLAN-Netzwerke. Dies wird verwendet um:

- Haltestellen des ÖPNV in deiner Nähe zu finden
- Das Wetter für deine Region einzurichten

Dieser geschätzte Standort wird auf der Einstellungsseite angezeigt. In den meisten Fällen ist er
genau genug und du musst nichts ändern.

### Stadtname vs. Automatisch erkannter Standort

Du kannst auch einen Stadt- oder Ortsnamen manuell eingeben. Jedoch ist **die automatische Erkennung genauer**:

> 💡 **Warum die automatische Erkennung besser ist:**
> Wenn du einen Stadtnamen eingibst, wird das Wetter für den **genauen Mittelpunkt dieser Stadt** berechnet.
> Wenn du in einem Vorort oder am Stadtrand wohnst, kann dieser Mittelpunkt mehrere Kilometer entfernt sein,
> was zu leicht abweichenden Regen- oder Temperaturwerten führen kann.
>
> Der automatisch erkannte Standort basiert auf den WLAN-Netzwerken in deiner Umgebung und liegt damit
> viel näher an deinem tatsächlichen Zuhause — für eine genauere lokale Wettervorhersage.

**In der Praxis:**

- ✅ Lass den automatisch erkannten Standort, wenn er ungefähr stimmt
- ✏️ Gib deinen Stadtnamen nur manuell ein, wenn die automatische Erkennung einen völlig falschen Bereich zeigt

---

## Wettereinstellungen

### Wie oft das Wetter aktualisiert wird

Dies steuert, wie häufig MyStation-Go neue Wetterdaten abruft.

| Intervall                  | Akkuverbrauch  | Geeignet für           |
|----------------------------|----------------|------------------------|
| 1 Stunde                   | Höher          | Sehr häufige Updates   |
| 2 Stunden                  | Mittel         |                        |
| **3 Stunden** *(Standard)* | **Ausgewogen** | **Die meisten Nutzer** |
| 6 Stunden                  | Niedrig        | Akkusparen             |
| 12 Stunden                 | Am niedrigsten | Maximale Akkulaufzeit  |

> 🔋 Das Wetter ändert sich langsam. Alle 3 Stunden nachzusehen reicht für die meisten Tagesentscheidungen.

---

## Abfahrtseinstellungen

### Deine Haltestelle auswählen

Die Einstellungsseite zeigt eine Liste nahegelegener Haltestellen, sortiert nach Entfernung.
Wähle einfach die Haltestelle aus, die du am häufigsten nutzt.

Wenn deine Haltestelle nicht aufgelistet ist, überprüfe ob dein Standort korrekt erkannt wurde.

### Abfahrten vs. Verbindungen (Reisemodus)

Du kannst zwischen zwei ÖPNV-Anzeigemodi wählen:

| Modus | Was angezeigt wird |
|-------|-------------------|
| **Abfahrten** *(Standard)* | Nächste Abfahrten von deiner Haltestelle (alle Richtungen) |
| **Verbindungen** | Reiseverbindungen von deiner Haltestelle zu einem bestimmten Ziel |

**Verbindungsmodus** zeigt:
- Welche Linien zu nehmen sind (mit Umsteigesymbolen)
- Wo umgestiegen wird und wie lange man wartet
- Gesamte Reisezeit
- Verspätungs- und Ausfallinfos
- Wie viele Minuten bis zur Abfahrt

So aktivierst du den Verbindungsmodus:
1. Wähle **Verbindungen** in den Einstellungen
2. Gib deine Ziel-Haltestelle ein (Stadtname zuerst, dann aus Vorschlägen auswählen)
3. Speichern

> 💡 Besonders nützlich für Pendler, die immer zum selben Ziel fahren und auf einen Blick
> die schnellste Verbindung sehen möchten — ohne eine App zu öffnen.

### Wie oft Abfahrten aktualisiert werden

Dies steuert, wie häufig MyStation-Go neue Abfahrtszeiten abruft.

| Intervall                  | Akkuverbrauch  | Geeignet für           |
|----------------------------|----------------|------------------------|
| 1 Minute                   | Viel höher     | Nahezu Echtzeit        |
| 3 Minuten                  | Höher          | Häufig                 |
| **5 Minuten** *(Standard)* | **Ausgewogen** | **Die meisten Nutzer** |
| 10 Minuten                 | Niedriger      | Akkusparen             |
| 15 Minuten                 | Niedrig        |                        |
| 30 Minuten                 | Am niedrigsten | Maximale Akkulaufzeit  |

> 🔋 Abfahrtszeiten können sich durch Verspätungen ändern, daher sind kürzere Intervalle hier sinnvoller
> als beim Wetter. 5 Minuten sind eine gute Balance.

### Aktive Stunden für Abfahrtsupdates

Du kannst Abfahrtsupdates auf bestimmte Tageszeiten beschränken — zum Beispiel nur während
deiner Pendelzeiten. Außerhalb dieser Zeiten werden Abfahrtsupdates pausiert, um Akku zu sparen.

Beispiel: Aktiv von `06:00` bis `09:00`

### Gehzeit zur Haltestelle

Gib ein, wie viele Minuten du zu deiner Haltestelle läufst.
MyStation-Go verwendet dies, um hervorzuheben, welche Abfahrten noch erreichbar sind.

### Verkehrsmitteltypen

Wähle, welche Verkehrsmitteltypen angezeigt werden sollen. Aktiviere nur die Typen,
die tatsächlich an deiner Haltestelle fahren:

| Typ    | Was es ist                    |
|--------|-------------------------------|
| RE     | Regionalexpress / Regionalzug |
| S-Bahn | Stadtschnellbahn              |
| U-Bahn | Untergrundbahn / Metro        |
| Tram   | Straßenbahn                   |
| Bus    | Linienbus                     |

---

## Schlafplan

Lege Stunden fest, in denen das Gerät in den Tiefschlaf geht und vollständig aufhört zu aktualisieren.
Dies ist der **wirksamste Weg, die Akkulaufzeit zu verlängern**.

Beispiel: Schlafen von `22:30` bis `05:30`

> 💡 Das E-Paper-Display zeigt den letzten Inhalt weiterhin an, auch wenn das Gerät schläft —
> es braucht keine Energie, um das Bild zu halten.

---

## Wochenendmodus

Lege unterschiedliche Aktivzeiten und Schlafzeiten für Wochenenden (Samstag und Sonntag) fest.
Nützlich, wenn du am Wochenende einen anderen Tagesablauf hast.

Beispiel: Am Wochenende länger wach bleiben — schlafen von `23:00` bis `07:00`.

---

## Automatische Softwareupdates

MyStation-Go kann seine interne Software automatisch aktualisieren, während du schläfst.

| Einstellung       | Standard                                              |
|-------------------|-------------------------------------------------------|
| Updates aktiviert | ✅ Ja                                                  |
| Update-Uhrzeit    | Zufällig zwischen 1:00 und 4:59 Uhr beim ersten Start |

### Warum Updates wichtig sind

Die Dienste, die Wetter- und Abfahrtsdaten liefern (Deutscher Wetterdienst und RMV),
ändern gelegentlich, wie sie ihre Daten übermitteln. Wenn das passiert, braucht MyStation-Go
ein Softwareupdate, um weiterhin korrekt zu funktionieren.

Ohne Updates können Wetter- oder Abfahrtsinformationen irgendwann nicht mehr erscheinen
oder falsche Werte anzeigen.

> 💡 Updates erfolgen ruhig in den frühen Morgenstunden. Das Gerät lädt das Update herunter,
> installiert es und startet von selbst neu. Die aktualisierte Softwareversion siehst du beim
> nächsten Mal, wenn du die Geräteinformationen aufrufst (Taste 2 für 5 Sekunden halten).

Wir empfehlen, automatische Updates **eingeschaltet** zu lassen.


# Schnellstart

In ca. 5 Minuten betriebsbereit!

---

## Was du vor dem Start brauchst

- Deinen **WLAN-Namen** und dein **WLAN-Passwort**
- Ein Handy oder einen Computer mit Browser
- Dein WLAN muss **2,4 GHz** sein — 5 GHz wird **nicht unterstützt**
- Ein normales Heimnetzwerk (kein Hotel- oder öffentliches WLAN mit Anmeldeseite)

---

## Schritt 1: Gerät einschalten

Schiebe den **Einschaltschalter** in die EIN-Position. Nach ca. 3 Sekunden erscheint der Einrichtungsbildschirm.

---

## Schritt 2: Mit dem MyStation-Go-WLAN verbinden (1 Minute)

1. Öffne auf deinem Handy oder Computer die **WLAN-Einstellungen**
2. Suche das Netzwerk namens **`MyStation-XXXXXXXX`** (XXXXXXXX ist die eindeutige ID deines Geräts)
3. Verbinde dich damit — **kein Passwort erforderlich**
4. Falls sich keine Einrichtungsseite automatisch öffnet, öffne deinen Browser und gehe zu **`http://10.0.1.1`**
5. Die MyStation-Go-WLAN-Konfigurationsseite wird geladen

![Gerät zeigt den WLAN-Hotspot-Namen MyStation-XXXXXXXX auf dem Display](/img/user-guide/IMG_0875.jpeg)
---

## Schritt 3: WLAN konfigurieren

1. Wähle dein **Heimnetzwerk** aus der Liste aus
    - ⚠️ Stelle sicher, dass es ein **2,4 GHz**-Netzwerk ist
2. Gib dein **WLAN-Passwort** ein
3. Klicke auf **„Verbinden"**

> 💡 Nach der WLAN-Verbindung lädt die Konfigurationsseite automatisch unter der neuen IP-Adresse des Geräts neu.

---

## Schritt 4: App konfigurieren (2 Minuten)

MyStation-Go wird:

- Sich mit deinem Heimnetzwerk verbinden
- Deinen ungefähren Standort automatisch ermitteln
- Nahegelegene Haltestellen des ÖPNV finden

1. Verbinde dich mit deinem Heimnetzwerk.
2. Gib die auf dem MyStation-Go-Display angezeigte IP-Adresse oder `http://mystation.local` in deinem Browser ein.
![Gerät zeigt die IP-Adresse auf dem Display](/img/user-guide/IMG_0874.jpeg)
3. Konfiguriere die App-Einstellungen auf der Seite. Alle Einstellungen werden gespeichert, wenn du auf „Einstellungen speichern" klickst.
![Konfigurationsseite](/img/user-guide/config-screenshot-frankfurt.png)

### Anzeigemodus

Wähle, was auf dem Bildschirm angezeigt wird:

- **Halb & Halb** — Wetter links, Abfahrten rechts
- **Wetter Vollbild** — Detailliertes Wetter auf dem gesamten Bildschirm
- **Abfahrt Vollbild** — Abfahrtstafel auf dem gesamten Bildschirm

### Standort / Wetter

- Überprüfe den **automatisch erkannten Standort** auf der Seite
- Wenn er korrekt aussieht, lass ihn so — das gibt dir das genaueste Wetter für deinen Standort
- Wenn er falsch ist, gib deinen **Stadt- oder Ortsnamen** manuell ein

> 💡 Automatisch erkannte Koordinaten sind genauer als ein Stadtname. Ein Stadtname verwendet den geografischen
> Mittelpunkt der Stadt, der mehrere Kilometer von deinem tatsächlichen Standort entfernt sein kann.
> Mehr dazu: [Einstellungsübersicht](configuration.md#stadtname-vs-automatisch-erkannter-standort)

### Haltestelle

1. Schau dir die Liste der **nahegelegenen Haltestellen** an — nach Entfernung sortiert
2. Wähle deine bevorzugte Abfahrtshaltestelle aus
3. Wähle die **Verkehrsmitteltypen**, die angezeigt werden sollen (RE, S-Bahn, Bus, Straßenbahn usw.)

### Aktualisierungsintervalle

- **Wetterintervall**: Wie oft Wetterdaten aktualisiert werden (Standard: 3 Stunden)
- **Abfahrtsintervall**: Wie oft Abfahrtsdaten aktualisiert werden (Standard: 5 Minuten)

### Ruhestunden (Empfohlen)

Stille Stunden festlegen, um nachts Akku zu sparen. Beispiel: Schlaf von `22:30` bis `05:30`.

### Speichern

Klicke auf **„Einstellungen speichern"**. MyStation-Go speichert alle Einstellungen und **startet automatisch neu**.

---

## Schritt 6: Bereit! 🎉

Nach dem Neustart holt MyStation-Go Daten und aktualisiert das Display. Du solltest sehen:

- 🌤️ Aktuelle Wetterinformationen
- 🚌 Nächste Abfahrten von deiner gewählten Haltestelle
- ⏰ Zeitstempel der letzten Aktualisierung
- 🔋 Akkustand

![Gerät zeigt live Wetter- und Abfahrtsdaten](/img/user-guide/device-running.jpg)

---

## Neu konfigurieren?

Halte **Taste 1 für 5 Sekunden**, um jederzeit in den Konfigurationsmodus zu wechseln.
Alle vorherigen Einstellungen werden vorgeladen. Mehr dazu: [Einstellungen ändern](configure-mode.md)

---

## Häufige Probleme bei der Ersteinrichtung

### „Kann nicht mit dem MyStation-Go-WLAN verbinden"

- Warte 30–60 Sekunden nach dem Einschalten — das Gerät braucht Zeit zum Starten
- Stelle sicher, dass dein Handy nicht auf „Nur 5 GHz" eingestellt ist

### „WLAN-Verbindung fehlgeschlagen"

- ✅ Überprüfe, ob dein WLAN-Passwort korrekt ist (Groß-/Kleinschreibung beachten)
- ✅ Stelle sicher, dass dein Netzwerk 2,4 GHz ist
- ✅ Dein Netzwerk darf keine Browser-Anmeldung erfordern (Captive Portal)

### „Keine nahegelegenen Haltestellen gefunden"

- ✅ Überprüfe, ob eine Internetverbindung vorhanden ist
- ✅ Du musst dich in einem Gebiet befinden, das vom RMV abgedeckt wird

Weitere Hilfe: [Hilfe & Problemlösung](troubleshooting.md)


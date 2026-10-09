# Display & Buttons

MyStation-Go has **3 buttons** on the side of the device. This page explains how to control the
device with them — and what each display mode shows.

---

## Button Overview

![Device from the side with labeled buttons: Button 1 (left), Button 2 (middle), Button 3 (right)](/img/user-guide/IMG_0870-b123.jpeg)

---

## Button Summary Tables

The buttons do different things depending on **how long** you press and **which display mode**
you are in. Use the tables below as a quick overview.

### Global mode

These work the same **in every display mode** — a long press is always a system action.

| Buttons        | Hold 5 sec | Result                       |
|----------------|------------|------------------------------|
| Button 1       | ⏱️ 5 sec   | Enter Configuration Mode     |
| Button 2       | ⏱️ 5 sec   | Show Device Information       |
| Button 3       | ⏱️ 5 sec   | Trigger Software Update       |
| Button 1 + 2   | ⏱️ 5 sec   | Factory Reset (clears all)   |

### Half and Half display mode

In Half & Half, Weather Full, or Departure Full mode, a brief press temporarily switches the
view (**2 minutes**, then it returns to your configured mode).

| Button   | Brief press | Result                         |
|----------|-------------|--------------------------------|
| Button 1 | 👆 tap      | Half & Half view (weather + departures) |
| Button 2 | 👆 tap      | Weather full screen             |
| Button 3 | 👆 tap      | Departure full screen           |

### Weather Only mode (browsing)

In **Weather Only** mode the buttons browse the forecast instead of switching modes. Their
meaning depends on whether you are **already browsing**.

**From today's view (not browsing yet):**

| Button   | Brief press | Result                                   |
|----------|-------------|------------------------------------------|
| Button 1 | 👆 tap      | Stay on today's weather                  |
| Button 2 | 👆 tap      | Open **weather forecast** (starts tomorrow) |
| Button 3 | 👆 tap      | Open **Sonnenstrom** solar view (starts today) |

**While browsing (weather forecast or Sonnenstrom):**

| Button   | Brief press | Result                                   |
|----------|-------------|------------------------------------------|
| Button 1 | 👆 tap      | Back to today (leaves browsing)          |
| Button 2 | 👆 tap      | Next day                                 |
| Button 3 | 👆 tap      | Previous day                             |

> 💡 To switch between the weather forecast and Sonnenstrom, press **Button 1** first (back to
> today), then **Button 2** (weather) or **Button 3** (Sonnenstrom). While browsing, Button 2
> and Button 3 only move between days.

> 💡 **Temporary:** every brief press lasts **2 minutes**, then the display returns to your
> configured mode.

---

# What's on the Display

MyStation-Go offers three display modes, each optimized for different needs:

1. **Half & Half Mode** - Weather and departures split view
2. **Weather Only Mode** - Full-screen weather information
3. **Departures Only Mode** - Full-screen transport departures

## Display Mode 1: Half & Half (Default)

**Variant A — Weather + Departure board**

![half and half station on the MyStation-Go display](/img/IMG_0872.jpeg)

**Variant B — Weather + Connection board** (a specific route to your destination)

![half and half connection on the MyStation-Go display](/img/IMG_1391.jpeg)

> 💡 Which variant you see depends on whether you selected *Departures* or *Connections* in the transport settings.

### Information Displayed

**Top Section (Weather)**:

- Current temperature
- "Feels like" temperature
- Weather icon
- Weather description
- 12-hour temperature forecast graph

**Bottom Section (Departures)**:

- Transport type icon (🚂 RE, 🚊 S-Bahn, 🚌 Bus)
- Line number/name
- Destination
- Platform/track number
- Departure time or delay

**Footer**:

- Battery level (ESP32-S3 only)
- WiFi status
- Last update timestamp

## Display Mode 2: Weather Only

![Weather only full sceen view on the Mystation-Go display](/img/user-guide/IMG_1393.jpeg)

### Information Displayed

**Main Area**:

- Large weather icon
- Weather description
- Current temperature
- "Feels like" temperature
- Room temperature
- Room humidity
- Temperature graph (12-hour forecast)

**Additional Details**:

- Sunrise and sunset times
- Humidity percentage
- Wind speed and direction
- Precipitation probability
- Cloud coverage

**Best For**:

- Weather planning
- Outdoor activities
- Daily weather overview

### Day Forecast View

When the display is in Weather Only mode, you can browse the weather forecast for upcoming days using the buttons. Press **Button 2** to go forward one day, **Button 3** to go back, and **Button 1** to return to the weather full screen mode (today's weather).

![Weather day-forecast view on the MyStation-Go display](/img/user-guide/IMG_1395.jpeg)
![Weather day-forecast view on the MyStation-Go display](/img/user-guide/IMG_1396.jpeg)
![Weather day-forecast view on the MyStation-Go display](/img/user-guide/IMG_1397.jpeg)

**What you see:**

- **Header**: Date of the selected day and city name
- **Day overview row**: 6 forecast days shown as small previews, with the selected day highlighted
- **Graph**: Full-width temperature and precipitation graph from 06:00 to midnight (00:00)

The display returns to today's weather automatically after **2 minutes** without a button press.

> 💡 The number of available forecast days depends on the weather model selected in your settings. Some models provide fewer days than others.

### Solar Radiation View (Sonnenstrom)

When the display is in Weather Only mode, press **Button 3** from today's weather to open the
**Sonnenstrom** view — a solar radiation forecast that shows how strong the sunshine is across
the day. It starts with today; while browsing, **Button 2** goes to the next day, **Button 3**
the previous day, and **Button 1** returns to the weather full screen mode (today's weather).

![Solar Radiation day-forecast view on the MyStation-Go display](/img/user-guide/IMG_1398.jpeg)
![Solar Radiation day-forecast view on the MyStation-Go display](/img/user-guide/IMG_1399.jpeg)
![Solar Radiation day-forecast view on the MyStation-Go display](/img/user-guide/IMG_1400.jpeg)

**What you see:**

- **Header**: "Sonnenstrom" and your city name
- **Day overview row**: 7 days **including today ("Heute")**, each showing that day's total sun energy in **kWh/m²** — handy for comparing which days are sunniest
- **Graph**: A sunshine-strength curve for the selected day. The **peak of the curve is when the sun is strongest** — the best time for solar generation. The graph auto-scales each day (axis in W/m²).

This is useful if you have solar panels or a Balkonkraftwerk: the curve tells you *when* your
panels will produce the most, and the daily totals let you compare days.

The display returns to today's weather automatically after **2 minutes** without a button press.

> 💡 To switch between the weather forecast and Sonnenstrom while browsing, press **Button 1**
> first (back to today), then **Button 2** (weather) or **Button 3** (Sonnenstrom). If a day has
> no solar data from your weather model, it falls back to the normal temperature/rain forecast.

## Display Mode 3: Departures Only

![Departures only view on the MyStation-Go display](/img/user-guide/IMG_1394.jpeg)

### Information Displayed

**For Each Departure**:

- Transport type icon
- Line number or name
- Final destination
- Key intermediate stops (via)
- Platform or track number
- Departure time
- Delay information (if any)

**Transport Types**:

- 🚂 **RE** - Regional Express
- 🚊 **S** - S-Bahn (suburban rail)
- 🚆 **RB** - Regional train
- 🚌 **Bus** - Local bus
- 🚎 **Tram** - Tram/Streetcar
- 🚇 **U** - U-Bahn (metro)

**Time Display**:

- "now" - Departing immediately
- "in X min" - Minutes until departure
- "+X min" - Delayed by X minutes
- Exact time (e.g., "14:35")

**Best For**:

- Commuting
- Planning trips
- Checking multiple connections

## Display Elements Explained

### Header Bar

**Left Side**: Station or location name

- In Weather mode: City/location name
- In Departure mode: Transport station name
- In Half & Half: Station name

**Right Side**: Last update timestamp

- Format: "HH:MM" (24-hour format)
- Shows when data was last refreshed
- Helps verify information is current

### Weather Icons

MyStation-Go uses intuitive weather icons:

| Icon | Meaning       |
|------|---------------|
| ☀️   | Clear/Sunny   |
| ⛅    | Partly Cloudy |
| ☁️   | Cloudy        |
| 🌧️  | Rain          |
| ⛈️   | Thunderstorm  |
| 🌨️  | Snow          |
| 🌫️  | Fog           |
| 🌬️  | Windy         |

### Temperature Graph

**12-Hour Forecast**:

- X-axis: Time (now, +3h, +6h, +9h, +12h)
- Y-axis: Temperature in °C
- Line shows temperature trend
- Helps plan for temperature changes

**Day Forecast View** (Weather Only mode, browsing future days):

- Extended 19-hour graph from 06:00 to 00:00 (midnight)
- Shows temperature and precipitation for the selected day
- Covers the full active part of the day

**Reading the Graph**:

- Rising line: Temperature increasing
- Falling line: Temperature decreasing
- Steep changes: Rapid temperature shifts
- Flat line: Stable temperature

### Departure Information

**Transport Icons**:

- Visual identification of transport type
- Helps quickly find desired service
- Color-coded in original code (grayscale on e-paper)

**Delay Indicators**:

- Green: On time
- Yellow: Minor delay (1-5 minutes)
- Red: Major delay (> 5 minutes)
- Gray: No real-time data

**Platform/Track**:

- "Gl.X" - Gleis (German for platform/track)
- "Bus X" - Bus bay/stand
- "A", "B", "C" - Platform sections

### Footer Information

**Battery Level** (ESP32-S3 only):

- Shows remaining battery percentage
- Icons: 🔋 (full), 🪫 (low)
- Percentage: 0-100%
- Warning when < 20%

**WiFi Status**:

- "Connected" - WiFi working
- "Disconnected" - WiFi issue
- Signal strength indicator

**Update Time**:

- When data was last fetched
- Helps verify freshness

---

# Use Cases — What Do You Want to Do?

### "I want to see everything at a glance"

**Press Button 1 briefly**

The display switches to **Half & Half mode**:

- Left half: Current weather summary
- Right half: Next departures from your stop

Returns to the configured display mode after **2 minutes**.

---

### "Do I need an umbrella? What's the weather like?"

**Press Button 2 briefly**

The display switches to **Weather Full Screen mode**:

- Large weather icon and description
- Current temperature and "feels like"
- 12-hour temperature forecast graph
- Wind, humidity, rain probability
- Sunrise and sunset times

Returns to the configured display mode after **2 minutes**.

---

### "When does the next train / bus leave?"

**Press Button 3 briefly**

The display switches to **Departure Full Screen mode**:

- Full-screen departure list
- More departures visible at once
- Line number, destination, departure time
- Delay information and platform number

Returns to the configured display mode after **2 minutes**.

---

### "I want to see the weather forecast for the next days"

**This only works when the display is set to Weather Only mode.**

From today's weather view, press **Button 2** to open the multi-day forecast (starts with
tomorrow). Once you are browsing:

- **Button 2 (brief press)** — Next day (tomorrow → day after → …)
- **Button 3 (brief press)** — Previous day
- **Button 1 (brief press)** — Return to today's weather

The forecast view shows:
- Date and city name at the top
- 6-day overview with the selected day highlighted
- Full-width temperature and rain graph (06:00 to midnight)

After **2 minutes**, the display returns to today's weather automatically.

> 💡 The number of available forecast days depends on the weather model selected in your settings. Some models provide fewer days.

---

### "When will my solar panels generate the most power?" (Sonnenstrom)

**This only works when the display is set to Weather Only mode.**

From today's weather view, press **Button 3** to open the **Sonnenstrom** (solar radiation)
view. It shows how strong the sunshine is across the day, so you can see when the sun — and
your solar panels / Balkonkraftwerk — will be at their strongest. It starts with **today**.
Once you are browsing:

- **Button 3 (brief press)** — enters Sonnenstrom, then steps to the previous day
- **Button 2 (brief press)** — Next day
- **Button 1 (brief press)** — Return to today's weather

The Sonnenstrom view shows:
- "Sonnenstrom" and your city at the top
- A 7-day overview **including today ("Heute")**, each day showing its total sun energy in **kWh/m²**
- A full-width sunshine-strength curve for the selected day — the **peak of the curve is when the sun is strongest** that day. The graph auto-scales each day (axis in W/m²).

Use the daily **kWh/m²** totals to compare days at a glance, and the curve to plan the best
hours for solar generation.

After **2 minutes**, the display returns to today's weather automatically.

> 💡 **Switching between the weather forecast and Sonnenstrom:** while you are browsing,
> Button 2 and Button 3 only move between days — they do not switch views. To switch, press
> **Button 1** first (back to today), then press **Button 2** for the weather forecast or
> **Button 3** for Sonnenstrom.

> 💡 Sonnenstrom needs solar data from your weather model. If a day has no solar data, that
> day falls back to the normal temperature/rain forecast.

---

### "I want to change my stop, location, or settings"

**Hold Button 1 for 5 seconds**

MyStation-Go enters **Configuration Mode**:

- The display shows the setup screen
- MyStation-Go broadcasts a WiFi hotspot (`MyStation-XXXXXXXX`)
- Connect your phone to the hotspot and open `http://10.0.1.1`
- All previous settings are preloaded — just change what you need

Full guide: [Change Settings](configure-mode.md)

---

### "I want to see device information and current settings"

**Hold Button 2 for 5 seconds**

The display shows **Device Information**:

- Software version
- Current display mode
- Configured update intervals (weather and departures)
- WiFi status and IP address
- Battery level

---

### "I want to manually update the software"

**Hold Button 3 for 5 seconds**

Triggers an immediate **software update**:

- MyStation-Go connects to the update server
- If a new version is available, it is downloaded and installed
- The device restarts after a successful update

> 💡 You normally don't need to do this — updates happen automatically overnight.
> Use this if you want to force an immediate update.

---

### "The device is stuck or behaving incorrectly"

**Slide the power switch to OFF**, then back to ON to restart the device.

> 💡 This device has a built-in battery. The power switch is the correct way to restart it.
> All saved settings are preserved after a restart.

---

### "I want to factory reset the device"

**Hold Button 1 + Button 2 simultaneously for 5 seconds**

Performs a **factory reset**:

- Clears all saved settings (WiFi, stop, configuration)
- Device restarts as brand new
- You will need to complete the full setup again

> ⚠️ **This cannot be undone.** Only use if you truly want to start over.

---

## Temporary Mode Behavior

When you briefly press a button (Button 1, 2, or 3), the new mode is **temporary**:

- Duration: **2 minutes**
- After 2 minutes, the display returns to the **configured display mode**
- The temporary mode is indicated on the display

This lets you quickly check weather or departures without permanently changing the configuration.

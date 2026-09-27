# Using the Buttons

MyStation-Go has **3 buttons** on the side of the device. This page explains what you can do with them —
organized by what you want to achieve.

---

## Button Overview

![Device from the side with labeled buttons: Button 1 (left), Button 2 (middle), Button 3 (right)](/img/user-guide/IMG_0870-b123.jpeg)

---

## Use Cases — What Do You Want to Do?

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

---

## Button Summary Tables

The buttons do different things depending on **how long** you press and **which display mode**
you are in. Use the tables below as a quick overview.

### Long press (5 seconds) — global actions

These work the same **in every display mode** — a long press is always a system action.

| Buttons        | Hold 5 sec | Result                       |
|----------------|------------|------------------------------|
| Button 1       | ⏱️ 5 sec   | Enter Configuration Mode     |
| Button 2       | ⏱️ 5 sec   | Show Device Information       |
| Button 3       | ⏱️ 5 sec   | Trigger Software Update       |
| Button 1 + 2   | ⏱️ 5 sec   | Factory Reset (clears all)   |

### Short press — normal display modes

In Half & Half, Weather Full, or Departure Full mode, a brief press temporarily switches the
view (**2 minutes**, then it returns to your configured mode).

| Button   | Brief press | Result                         |
|----------|-------------|--------------------------------|
| Button 1 | 👆 tap      | Half & Half view (weather + departures) |
| Button 2 | 👆 tap      | Weather full screen             |
| Button 3 | 👆 tap      | Departure full screen           |

### Short press — Weather Only mode (browsing)

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

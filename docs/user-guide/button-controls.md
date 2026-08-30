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

When in Weather Only mode, the buttons change their function:

- **Button 2 (brief press)** — Show the next day's forecast. Press again to go further (tomorrow → day after → etc.)
- **Button 3 (brief press)** — Go back one day
- **Button 1 (brief press)** — Return to today's weather

The forecast view shows:
- Date and city name at the top
- 6-day overview with the selected day highlighted
- Full-width temperature and rain graph (06:00 to midnight)

After **2 minutes**, the display returns to today's weather automatically.

> 💡 The number of available forecast days depends on the weather model selected in your settings. Some models provide fewer days.

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

## Button Summary Table

| Action                    | Button     | Press          | Result                         |
|---------------------------|------------|----------------|--------------------------------|
| Half & Half view          | Button 1   | Brief press    | Temporary mode (2 min)         |
| Weather full screen       | Button 2   | Brief press    | Temporary mode (2 min)         |
| Departure full screen     | Button 3   | Brief press    | Temporary mode (2 min)         |
| Enter configuration mode  | Button 1   | Hold 5 sec     | Settings page in browser       |
| Show device information   | Button 2   | Hold 5 sec     | Device info display            |
| Trigger software update   | Button 3   | Hold 5 sec     | Software update                |
| Factory reset             | Button 1+2 | Hold 5 sec     | Clears all settings            |

> 💡 **Weather Only mode:** When the display is set to Weather Only, the buttons switch to day browsing — Button 2 goes forward, Button 3 goes back, Button 1 returns to today. See ["I want to see the weather forecast for the next days"](#i-want-to-see-the-weather-forecast-for-the-next-days) for details.

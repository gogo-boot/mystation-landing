# Understanding the Display

This guide explains what information is shown on your MyStation-Go e-paper display and where to find it.

## Display Layout

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

## Reading the Display

### Quick Glance (5 seconds)

**Half & Half Mode**:

1. Check time in header (is data fresh?)
2. Scan weather icon and temperature
3. Look at first 1-2 departures
4. Note any delays (red text)

**Weather Mode**:

1. Current temperature (big number)
2. Weather icon (what to expect)
3. Graph trend (warming/cooling)

**Departures Mode**:

1. Find your line
2. Check departure time
3. Note platform number
4. Check for delays

### Detailed Reading (30 seconds)

**Weather Information**:

- Compare "feels like" to actual temperature
- Check 24-hour trend for planning
- Note sunrise/sunset for daylight planning
- Check rain probability before going out
- Wind speed for outdoor activities

**Departure Information**:

- Review all available departures
- Compare different route options
- Note delays for time planning
- Check intermediate stops (via)
- Verify platform numbers

## Update Behavior

### How Often Display Updates

**Configured Interval** (default: 5 minutes):

- Device wakes from sleep
- Connects to WiFi (2.4 GHz)
- Fetches latest data
- Updates display
- Returns to sleep

**Why Not Continuous?**:

- Saves battery life
- E-paper doesn't need constant refresh
- Information doesn't change that quickly
- 5-minute updates provide good balance

### Display Refresh Process

1. **Wake from Sleep** (< 1 second)
2. **Connect to WiFi** (5-10 seconds)
3. **Fetch Weather Data** (2-5 seconds)
4. **Fetch Departure Data** (2-5 seconds)
5. **Render Display** (30-45 seconds)
    - E-paper refresh is slow (this is normal!)
    - You'll see the display flash/flicker
    - Final image appears after refresh
6. **Enter Deep Sleep** (until next update)

**Total cycle time**: ~40-70 seconds

### E-Paper Characteristics

**Normal Behavior**:

- ✅ Display "flickers" during refresh (black/white flash)
- ✅ Takes 3-4 seconds to fully update
- ✅ Image persists without power
- ✅ Slight "ghosting" from previous image

**Not Normal**:

- ❌ Display stays blank
- ❌ Corrupted/garbled image
- ❌ Never refreshes
- ❌ Only partial update

See [Troubleshooting](troubleshooting.md#display-issues) if you experience issues.


---

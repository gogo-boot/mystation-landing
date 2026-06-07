# Understanding the Display

This guide explains what information is shown on your MyStation-Go e-paper display and where to find it.

## Display Layout

MyStation-Go offers three display modes, each optimized for different needs:

1. **Half & Half Mode** - Weather and departures split view
2. **Weather Only Mode** - Full-screen weather information
3. **Departures Only Mode** - Full-screen transport departures

## Display Mode 1: Half & Half (Default)

```
┌─────────────────────────────┐
│ Weather Info │ Departures   │
│ Temp, Icon,  │ Next trains  │
│ Forecast     │ buses, etc.  │
└──────────────┴──────────────┘
```

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

```
┌─────────────────────────────┐
│                             │
│   Large Weather Display     │
│   Temperature Graph         │
│   Detailed Forecast         │
│   Wind, Humidity, etc.      │
│                             │
└─────────────────────────────┘
```

### Information Displayed

**Main Area**:

- Large weather icon
- Weather description
- Current temperature
- "Feels like" temperature
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

## Display Mode 3: Departures Only

```
┌─────────────────────────────┐
│                             │
│   Departure List            │
│   More departures visible   │
│   Detailed timing info      │
│   Platform numbers          │
│                             │
└─────────────────────────────┘
```

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

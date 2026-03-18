# RouteWise - Intelligent Event Route Planning & Management System

## 📁 Complete Project Structure

```
routewise/
├── src/
│   ├── app/
│   │   ├── components/           # Reusable React components
│   │   │   ├── Navbar.tsx        # Top navigation bar with logo and links
│   │   │   ├── CreateEvent.tsx   # Event creation form component
│   │   │   ├── LiveTracking.tsx  # Live map tracking with canvas animation
│   │   │   └── EventCard.tsx     # Event card display component
│   │   │
│   │   ├── pages/                # Page components
│   │   │   ├── Dashboard.tsx     # Main dashboard page
│   │   │   ├── Events.tsx        # Events management page
│   │   │   ├── LiveMap.tsx       # Live map tracking page
│   │   │   ├── AuthorityDashboard.tsx  # Authority analytics dashboard
│   │   │   └── NotFound.tsx      # 404 error page
│   │   │
│   │   ├── styles/               # Component-specific CSS files
│   │   │   ├── navbar.css
│   │   │   ├── dashboard.css
│   │   │   ├── create-event.css
│   │   │   ├── live-tracking.css
│   │   │   ├── event-card.css
│   │   │   ├── events.css
│   │   │   ├── live-map.css
│   │   │   ├── authority-dashboard.css
│   │   │   └── not-found.css
│   │   │
│   │   ├── App.tsx               # Main app component with RouterProvider
│   │   └── routes.ts             # React Router configuration
│   │
│   └── utils/                    # Utility functions and services
│       ├── api.ts                # Axios API configuration and endpoints
│       └── socket.ts             # Socket.io client configuration
│
├── package.json                  # Project dependencies
└── PROJECT_STRUCTURE.md          # This file
```

## 🎨 Features Implemented

### 1. Navigation System
- **Blue gradient navigation bar** with RouteWise branding
- Navigation links: Events, Live Map, Dashboard
- Logout button with icon
- Responsive mobile layout

### 2. Main Dashboard Page (`/`)
- **Two-column layout:**
  - Left: Create New Event form
    - Event name input
    - Description textarea
    - Date picker (with min date validation)
    - Start location dropdown
    - End location dropdown
    - Green gradient submit button
  - Right: Live Tracking map
    - Animated canvas-based map
    - Moving vehicle icon
    - Route visualization (start to end)
    - Live tracking banner
    - Emergency vehicle alert
    - Route information display

- **Bottom Section:**
  - Upcoming Events grid (3 cards)
  - Event cards with images from Unsplash
  - Event details and view button

### 3. Events Page (`/events`)
- Search functionality for events
- Filter dropdown (All, Upcoming, Ongoing, Completed)
- Full events grid display
- Create new event button
- Responsive card layout

### 4. Live Map Page (`/live-map`)
- Real-time tracking statistics cards:
  - Active Vehicles
  - Total Distance
  - Average Speed
  - Incidents
- Large live tracking map
- Active routes list with status badges
- Route details (vehicles, distance)

### 5. Authority Dashboard (`/dashboard`)
- Statistics overview cards:
  - Total Events
  - Active Events
  - Completed Events
  - Pending Approvals
- Interactive charts using Recharts:
  - Monthly Events Line Chart
  - Events by Type Bar Chart
- Recent activities timeline

## 🛠️ Technologies Used

- **React 18.3.1** - Functional components with hooks
- **React Router 7.13.0** - Data mode routing
- **Axios** - HTTP client for API calls
- **Socket.io-client** - Real-time WebSocket communication
- **Recharts** - Data visualization charts
- **Lucide React** - Icon library
- **date-fns** - Date formatting
- **Sonner** - Toast notifications
- **Vite** - Build tool
- **Tailwind CSS v4** - Utility-first CSS (with custom CSS modules)

## 🔧 API Configuration

### API Endpoints (`/src/utils/api.ts`)
All endpoints are configured with mock fallback data:

- `eventAPI.getAllEvents()` - Fetch all events
- `eventAPI.createEvent(data)` - Create new event
- `eventAPI.getEventById(id)` - Get event details
- `eventAPI.updateEvent(id, data)` - Update event
- `eventAPI.deleteEvent(id)` - Delete event
- `routeAPI.getRouteDetails(start, end)` - Get route information
- `trackingAPI.getVehicleLocation(vehicleId)` - Get vehicle location
- `trackingAPI.getEmergencyAlerts()` - Get emergency alerts
- `authAPI.login(credentials)` - User login
- `authAPI.logout()` - User logout

### Socket.io Events (`/src/utils/socket.ts`)

**Methods:**
- `connect()` - Connect to socket server
- `disconnect()` - Disconnect from socket
- `on(event, callback)` - Subscribe to event
- `off(event, callback)` - Unsubscribe from event
- `emit(event, data)` - Emit event
- `joinRoom(roomId)` - Join a room
- `leaveRoom(roomId)` - Leave a room

**Specialized Methods:**
- `subscribeToVehicleTracking(vehicleId, callback)`
- `unsubscribeFromVehicleTracking(vehicleId, callback)`
- `subscribeToEmergencyAlerts(callback)`
- `unsubscribeFromEmergencyAlerts(callback)`
- `subscribeToRouteUpdates(eventId, callback)`
- `unsubscribeFromRouteUpdates(eventId, callback)`

## 🎯 Key Features

### Live Tracking
- Canvas-based map rendering
- Animated vehicle movement along route
- Real-time speed updates
- Emergency alerts display
- Start/End markers on map
- Route path visualization

### Event Management
- Create, read, update, delete events
- Search and filter functionality
- Event status tracking
- Date validation
- Location selection

### Responsive Design
- Mobile-first approach
- Flexbox and Grid layouts
- Breakpoints at 768px and 1200px
- Touch-friendly UI elements

### Error Handling
- API error interceptors
- 404 page for invalid routes
- Form validation
- Loading states
- Empty states

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or pnpm

### Installation
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Configuration

**API Base URL:**
Update in `/src/utils/api.ts`:
```typescript
const API_BASE_URL = 'https://api.routewise.com';
```

**Socket URL:**
Update in `/src/utils/socket.ts`:
```typescript
const SOCKET_URL = 'https://api.routewise.com';
```

## 🔄 Mock Mode vs Real Backend

The application is currently running in **MOCK MODE** which means:

### Mock Mode (Current - No Backend Required) ✅
- ✅ No network errors
- ✅ Instant data loading
- ✅ Simulated real-time updates
- ✅ All features work out of the box
- ✅ Perfect for development and demos

**API Configuration (`/src/utils/api.ts`):**
- All API calls return mock data after a simulated delay
- No actual HTTP requests are made
- Data persists in memory during the session

**Socket Configuration (`/src/utils/socket.ts`):**
- `USE_REAL_SOCKET = false` (default)
- Mock intervals simulate real-time updates
- No actual WebSocket connection required

### Switching to Real Backend

When you have a real backend server ready:

1. **Update API configuration** in `/src/utils/api.ts`:
   ```typescript
   export const USE_REAL_API = true;
   export const API_CONFIG = {
     baseURL: 'https://your-api-url.com',
     timeout: 10000,
   };
   ```

2. **Update Socket configuration** in `/src/utils/socket.ts`:
   ```typescript
   export const USE_REAL_SOCKET = true;
   export const SOCKET_CONFIG = {
     url: 'https://your-socket-url.com',
     options: {
       reconnection: true,
       reconnectionAttempts: 5,
       reconnectionDelay: 1000,
     },
   };
   ```

3. **Implement real API calls** - Replace mock functions with actual axios calls
4. **Implement real Socket.io** - Replace mock listeners with actual socket.io-client

## 📱 Responsive Breakpoints

- **Desktop:** > 1200px - Full grid layout
- **Tablet:** 768px - 1200px - Adjusted columns
- **Mobile:** < 768px - Single column, stacked layout

## 🎨 Design System

### Color Palette
- **Primary Blue:** #3b82f6 → #2563eb (gradient)
- **Success Green:** #10b981 → #059669 (gradient)
- **Warning Orange:** #f59e0b → #d97706 (gradient)
- **Error Red:** #ef4444 → #dc2626 (gradient)
- **Purple:** #8b5cf6 → #7c3aed (gradient)

### Typography
- **Headings:** Bold weights (600-700)
- **Body:** Regular weight (400)
- **Labels:** Medium weight (500)

### Spacing
- Consistent padding/margin scale
- Border radius: 0.5rem (small), 1rem (large)
- Shadow levels: sm, md, lg

## 📝 Notes

- All API calls have mock fallback data for demonstration
- Socket connections are configured but require actual backend
- Canvas animation runs at ~60 FPS
- Form validation includes required fields and date constraints
- Charts automatically adjust to container width
- Toast notifications for user feedback

## 🔐 Authentication

Auth token storage in localStorage:
- Token added to all API requests via interceptor
- Automatic redirect to login on 401 errors
- Logout clears stored token

## 📊 Mock Data Included

- 3 sample events (Marathon, Tech Conference, Music Festival)
- Route data with waypoints
- Real-time vehicle movement simulation
- Emergency alert examples
- Activity timeline data
- Chart data for visualizations

## 🎯 Production Ready Features

✅ Clean folder structure
✅ Type-safe with TypeScript
✅ Modular components
✅ Reusable utilities
✅ Error handling
✅ Loading states
✅ Responsive design
✅ Accessibility features
✅ Performance optimized
✅ SEO friendly routing
✅ Toast notifications
✅ Form validation
✅ Mock data for testing

---

**Built with ❤️ using React + Vite + TypeScript**
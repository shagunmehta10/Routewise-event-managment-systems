// Mock data for demonstration purposes
// Replace with real API calls when backend is available

const MOCK_EVENTS = [
  {
    id: 1,
    name: 'City Marathon 2026',
    description: 'Annual city marathon event with 5000+ participants',
    date: '2026-03-15',
    startLocation: 'City Hall',
    endLocation: 'Central Park',
    status: 'upcoming',
  },
  {
    id: 2,
    name: 'Tech Conference',
    description: 'Technology conference with international speakers',
    date: '2026-04-20',
    startLocation: 'Convention Center',
    endLocation: 'Tech Hub',
    status: 'upcoming',
  },
  {
    id: 3,
    name: 'Music Festival',
    description: 'Summer music festival featuring local and international artists',
    date: '2026-06-10',
    startLocation: 'Beach Arena',
    endLocation: 'Coastal Plaza',
    status: 'upcoming',
  },
];

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// API Functions
export const eventAPI = {
  // Get all events
  getAllEvents: async () => {
    if (!USE_REAL_API) {
      await delay(300);
      return [...MOCK_EVENTS];
    }
    const response = await fetch(`${API_CONFIG.baseURL}/api/events`);
    if (!response.ok) throw new Error("Failed to fetch events");
    return await response.json();
  },

  // Create new event
  createEvent: async (eventData: any) => {
    if (!USE_REAL_API) {
      await delay(500);
      const newEvent = { ...eventData, id: Date.now(), status: 'upcoming' };
      MOCK_EVENTS.push(newEvent);
      return { success: true, message: 'Event created successfully', data: newEvent };
    }
    const response = await fetch(`${API_CONFIG.baseURL}/api/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData),
    });
    if (!response.ok) throw new Error("Failed to create event");
    return await response.json();
  },

  // Get event by ID
  getEventById: async (id: string) => {
    await delay(300);
    const event = MOCK_EVENTS.find((e) => e.id === parseInt(id));
    return event || null;
  },

  // Update event
  updateEvent: async (id: string, eventData: any) => {
    await delay(500);
    const index = MOCK_EVENTS.findIndex((e) => e.id === parseInt(id));
    if (index !== -1) {
      MOCK_EVENTS[index] = { ...MOCK_EVENTS[index], ...eventData };
      return {
        success: true,
        message: 'Event updated successfully',
        data: MOCK_EVENTS[index],
      };
    }
    return null;
  },

  // Delete event
  deleteEvent: async (id: string) => {
    await delay(500);
    const index = MOCK_EVENTS.findIndex((e) => e.id === parseInt(id));
    if (index !== -1) {
      MOCK_EVENTS.splice(index, 1);
      return {
        success: true,
        message: 'Event deleted successfully',
      };
    }
    return null;
  },
};

// Route API
export const routeAPI = {
  // Get route details
  getRouteDetails: async (startLocation: string, endLocation: string) => {
    await delay(300);
    return {
      distance: '12.5 km',
      duration: '25 minutes',
      startLocation,
      endLocation,
      waypoints: [
        { lat: 40.7128, lng: -74.006 },
        { lat: 40.7614, lng: -73.9776 },
      ],
    };
  },
};

// Tracking API
export const trackingAPI = {
  // Get live vehicle location
  getVehicleLocation: async (vehicleId: string) => {
    await delay(300);
    return {
      vehicleId,
      lat: 40.7128 + Math.random() * 0.01,
      lng: -74.006 + Math.random() * 0.01,
      heading: Math.random() * 360,
      speed: 30 + Math.random() * 20,
      timestamp: new Date().toISOString(),
    };
  },

  // Get emergency alerts
  getEmergencyAlerts: async () => {
    await delay(300);
    return [
      {
        id: '1',
        message: 'Emergency Vehicle Alert: Ambulance approaching from the north',
        severity: 'high' as const,
        timestamp: new Date().toISOString(),
      },
    ];
  },
};

// Auth API
export const authAPI = {
  login: async (credentials: { email: string; password: string }) => {
    await delay(500);
    // Mock login - always succeeds for demo
    const mockToken = 'mock-jwt-token-' + Date.now();
    localStorage.setItem('authToken', mockToken);
    return {
      success: true,
      token: mockToken,
      user: {
        email: credentials.email,
        name: 'Demo User',
      },
    };
  },

  logout: async () => {
    await delay(300);
    localStorage.removeItem('authToken');
    return {
      success: true,
      message: 'Logged out successfully',
    };
  },
};

// Helper function to check if API should use real backend
// Set this to true when you have a real backend available
export const USE_REAL_API = true;

// Real API configuration (for future use)
export const API_CONFIG = {
  baseURL: 'http://localhost:5000',
  timeout: 10000,
};

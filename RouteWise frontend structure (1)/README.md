# 🚗 RouteWise - Intelligent Event Route Planning & Management System

A premium, luxury event management dashboard built with React, TypeScript, Vite, and Tailwind CSS.

![RouteWise](https://img.shields.io/badge/RouteWise-Premium-gold)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Vite](https://img.shields.io/badge/Vite-6.3.5-purple)

## ✨ Features

- 🎨 **Premium Dark UI** - Luxury design with gold, purple, and teal accents
- 🗺️ **Live Tracking** - Real-time vehicle tracking and route visualization
- 📅 **Event Management** - Create and manage events with ease
- 📊 **Authority Dashboard** - Analytics and insights for administrators
- 🎭 **Glassmorphism** - Modern UI with backdrop blur effects
- 💫 **Smooth Animations** - Premium animations (shimmer, float, glow)
- 📱 **Responsive** - Works beautifully on all devices
- 🔄 **Mock Mode** - Runs without backend (simulated data)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or higher
- npm, pnpm, or yarn

### Installation

1. **Clone or download the repository**

2. **Install dependencies**

```bash
npm install
# or
pnpm install
# or
yarn install
```

3. **Start the development server**

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

4. **Open your browser**

Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📜 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📂 Project Structure

```
RouteWise/
├── src/
│   ├── app/
│   │   ├── components/         # React components
│   │   │   ├── ui/             # Reusable UI components
│   │   │   ├── CreateEvent.tsx
│   │   │   ├── EventCard.tsx
│   │   │   ├── LiveTracking.tsx
│   │   │   └── Navbar.tsx
│   │   ├── pages/              # Page components
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Events.tsx
│   │   │   ├── LiveMap.tsx
│   │   │   ├── AuthorityDashboard.tsx
│   │   │   └── NotFound.tsx
│   │   ├── styles/             # Component styles
│   │   │   └── premium-theme.css  # Premium design system
│   │   ├── App.tsx             # Main app component
│   │   └── routes.ts           # React Router configuration
│   ├── styles/                 # Global styles
│   │   ├── index.css
│   │   ├── theme.css
│   │   └── tailwind.css
│   ├── utils/                  # Utilities
│   │   ├── api.ts              # Mock API
│   │   └── socket.ts           # Mock Socket.io
│   └── main.tsx                # Entry point
├── guidelines/                 # Design system documentation
│   ├── README.md
│   ├── Guidelines.md
│   ├── UI_DESIGN_PROMPT.md
│   ├── PROMPT_FOR_AI.md
│   └── VISUAL_REFERENCE.md
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Design System

RouteWise uses a comprehensive premium design system with:

- **Dark Foundation**: #0f0f1e, #1a1a2e
- **Gold Accent**: #d4af37 (primary actions)
- **Purple Accent**: #7c3aed (secondary features)
- **Teal Accent**: #14b8a6 (stats, analytics)
- **Rose Accent**: #e91e63 (alerts, warnings)

See `/guidelines/` folder for complete documentation.

## 🗺️ Routes

- `/` - Main Dashboard (Overview with Create Event & Live Tracking)
- `/events` - Events Page (All events with search and filters)
- `/live-map` - Live Map (Full-screen tracking view)
- `/dashboard` - Authority Dashboard (Analytics and insights)

## 🔧 Technologies

- **React** 18.3.1 - UI library
- **TypeScript** - Type safety
- **Vite** 6.3.5 - Build tool
- **React Router** 7.13.0 - Routing
- **Tailwind CSS** 4.1.12 - Styling
- **Material-UI** 7.3.5 - UI components
- **Recharts** 2.15.2 - Charts
- **Axios** - HTTP client (mock)
- **Socket.io** - Real-time (mock)
- **Motion** - Animations
- **Sonner** - Toast notifications

## 🎯 Mock Mode

The application runs in **MOCK MODE** by default, which means:

- ✅ No backend server required
- ✅ Simulated API responses with realistic delays
- ✅ Mock real-time tracking updates
- ✅ Sample event data pre-loaded
- ✅ Perfect for development and demonstration

### Mock Services

- **API** (`/src/utils/api.ts`) - Mock HTTP requests
- **Socket** (`/src/utils/socket.ts`) - Mock real-time updates

## 🎨 VS Code Setup

### Recommended Extensions

- **Tailwind CSS IntelliSense** - Autocomplete for Tailwind classes
- **Prettier** - Code formatting
- **ESLint** - Code linting

Extensions are automatically recommended when you open the project in VS Code.

### Settings

VS Code settings are pre-configured in `.vscode/settings.json`:
- Format on save enabled
- Tailwind CSS support
- TypeScript workspace version

## 🌟 Key Features Explained

### Premium Cards
White cards with gradient top borders, shadows, and hover lift effects.

### Glassmorphism
Semi-transparent panels with backdrop blur for modern aesthetics.

### Live Tracking
Real-time vehicle tracking with animated markers and route visualization.

### Event Management
Create events with route planning, date/time selection, and vehicle assignment.

### Authority Dashboard
Analytics with charts, statistics, and real-time monitoring.

## 📱 Responsive Design

- **Mobile** (< 768px): Single column, simplified UI
- **Tablet** (768-1200px): Two columns, medium cards
- **Desktop** (> 1200px): Multi-column grids, full effects

## ♿ Accessibility

- WCAG AA compliant (minimum 4.5:1 contrast)
- Keyboard navigation supported
- Focus indicators with gradient outlines
- Reduced motion support

## 🚧 Development

### Adding New Components

1. Create component in `/src/app/components/`
2. Add styles using Tailwind and premium theme variables
3. Follow design system guidelines in `/guidelines/`

### Using Premium Theme

```tsx
// Use CSS variables
<div style={{ background: 'var(--premium-gold)' }}>
  Gold background
</div>

// Use utility classes
<div className="premium-card hover-lift">
  Premium card with hover effect
</div>

// Use gradient text
<h1 className="gradient-text">
  Animated gradient heading
</h1>
```

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 5173
npx kill-port 5173
```

### Module not found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a demonstration project. For modifications, please follow the design system guidelines in `/guidelines/`.

## 📞 Support

For questions or issues, refer to:
- `/guidelines/README.md` - Design system overview
- `/DESIGN_SYSTEM_SUMMARY.md` - Complete summary
- Component files for implementation examples

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

🎨 Premium Design | 🚀 High Performance | 📱 Fully Responsive

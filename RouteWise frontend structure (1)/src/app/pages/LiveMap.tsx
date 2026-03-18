import { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { LiveTracking } from '../components/LiveTracking';
import { Navigation2, Users, AlertCircle, TrendingUp } from 'lucide-react';
import '../styles/live-map.css';

interface TrackingStats {
  activeVehicles: number;
  totalDistance: string;
  avgSpeed: number;
  incidents: number;
}

export default function LiveMap() {
  const [stats, setStats] = useState<TrackingStats>({
    activeVehicles: 12,
    totalDistance: '245.8 km',
    avgSpeed: 42,
    incidents: 2,
  });

  // Simulate real-time stats updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        activeVehicles: prev.activeVehicles + Math.floor(Math.random() * 3 - 1),
        avgSpeed: Math.max(20, Math.min(60, prev.avgSpeed + Math.floor(Math.random() * 6 - 3))),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="live-map-page">
      <Navbar />

      <main className="live-map-main">
        <div className="page-header">
          <h1 className="page-title">Live Map Tracking</h1>
          <p className="page-subtitle">Real-time vehicle and route monitoring</p>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon-container blue">
              <Navigation2 size={24} />
            </div>
            <div className="stat-content">
              <p className="stat-label">Active Vehicles</p>
              <p className="stat-value">{stats.activeVehicles}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-container green">
              <TrendingUp size={24} />
            </div>
            <div className="stat-content">
              <p className="stat-label">Total Distance</p>
              <p className="stat-value">{stats.totalDistance}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-container purple">
              <Users size={24} />
            </div>
            <div className="stat-content">
              <p className="stat-label">Avg Speed</p>
              <p className="stat-value">{stats.avgSpeed} km/h</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-container orange">
              <AlertCircle size={24} />
            </div>
            <div className="stat-content">
              <p className="stat-label">Incidents</p>
              <p className="stat-value">{stats.incidents}</p>
            </div>
          </div>
        </div>

        {/* Live Map Component */}
        <div className="map-section">
          <LiveTracking />
        </div>

        {/* Active Routes List */}
        <div className="active-routes-section">
          <h2 className="section-title">Active Routes</h2>
          <div className="routes-list">
            <div className="route-item">
              <div className="route-badge active">Active</div>
              <div className="route-details">
                <h3 className="route-name">Route A - City Marathon</h3>
                <p className="route-path">City Hall → Central Park</p>
              </div>
              <div className="route-stats">
                <span className="route-stat">3 vehicles</span>
                <span className="route-stat">12.5 km</span>
              </div>
            </div>

            <div className="route-item">
              <div className="route-badge active">Active</div>
              <div className="route-details">
                <h3 className="route-name">Route B - Tech Conference</h3>
                <p className="route-path">Convention Center → Tech Hub</p>
              </div>
              <div className="route-stats">
                <span className="route-stat">5 vehicles</span>
                <span className="route-stat">8.2 km</span>
              </div>
            </div>

            <div className="route-item">
              <div className="route-badge pending">Pending</div>
              <div className="route-details">
                <h3 className="route-name">Route C - Music Festival</h3>
                <p className="route-path">Beach Arena → Coastal Plaza</p>
              </div>
              <div className="route-stats">
                <span className="route-stat">0 vehicles</span>
                <span className="route-stat">15.7 km</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

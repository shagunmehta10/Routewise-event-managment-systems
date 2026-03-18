import { useEffect, useState, useRef } from 'react';
import { Navigation, AlertTriangle, Radio } from 'lucide-react';
import socketService from '../../utils/socket';
import '../styles/live-tracking.css';

interface VehicleLocation {
  lat: number;
  lng: number;
  heading: number;
  speed: number;
  timestamp: string;
}

interface EmergencyAlert {
  id: string;
  message: string;
  severity: 'low' | 'medium' | 'high';
  timestamp: string;
}

export function LiveTracking() {
  const [vehicleLocation, setVehicleLocation] = useState<VehicleLocation>({
    lat: 40.7128,
    lng: -74.006,
    heading: 45,
    speed: 35,
    timestamp: new Date().toISOString(),
  });

  const [emergencyAlerts, setEmergencyAlerts] = useState<EmergencyAlert[]>([]);
  const [isLive, setIsLive] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  // Simulate vehicle movement for demonstration
  useEffect(() => {
    const simulateMovement = () => {
      setVehicleLocation((prev) => ({
        ...prev,
        lat: prev.lat + (Math.random() - 0.5) * 0.001,
        lng: prev.lng + (Math.random() - 0.5) * 0.001,
        heading: (prev.heading + (Math.random() - 0.5) * 10) % 360,
        speed: Math.max(0, Math.min(60, prev.speed + (Math.random() - 0.5) * 5)),
        timestamp: new Date().toISOString(),
      }));

      animationRef.current = requestAnimationFrame(simulateMovement);
    };

    if (isLive) {
      animationRef.current = requestAnimationFrame(simulateMovement);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isLive]);

  // Socket connection for live tracking
  useEffect(() => {
    // Connect to socket
    socketService.connect();

    // Subscribe to vehicle tracking
    const handleLocationUpdate = (data: VehicleLocation) => {
      setVehicleLocation(data);
    };

    const handleEmergencyAlert = (alert: EmergencyAlert) => {
      setEmergencyAlerts((prev) => [alert, ...prev].slice(0, 5));
    };

    socketService.subscribeToVehicleTracking('vehicle-001', handleLocationUpdate);
    socketService.subscribeToEmergencyAlerts(handleEmergencyAlert);

    setIsLive(true);

    // Cleanup
    return () => {
      socketService.unsubscribeFromVehicleTracking('vehicle-001', handleLocationUpdate);
      socketService.unsubscribeFromEmergencyAlerts(handleEmergencyAlert);
    };
  }, []);

  // Draw map on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw background
    ctx.fillStyle = '#e8f4f8';
    ctx.fillRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = '#d0e8f0';
    ctx.lineWidth = 1;
    for (let i = 0; i < width; i += 40) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, height);
      ctx.stroke();
    }
    for (let i = 0; i < height; i += 40) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(width, i);
      ctx.stroke();
    }

    // Draw route path
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 4;
    ctx.setLineDash([10, 5]);
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.quadraticCurveTo(width / 2, height / 3, width - 50, height - 50);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw start marker
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(50, 50, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('S', 50, 54);

    // Draw end marker
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(width - 50, height - 50, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.fillText('E', width - 50, height - 46);

    // Calculate vehicle position on path (animated)
    const progress = ((Date.now() / 50) % 100) / 100;
    const t = progress;
    const x = Math.pow(1 - t, 2) * 50 + 2 * (1 - t) * t * (width / 2) + Math.pow(t, 2) * (width - 50);
    const y = Math.pow(1 - t, 2) * 50 + 2 * (1 - t) * t * (height / 3) + Math.pow(t, 2) * (height - 50);

    // Draw vehicle
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((vehicleLocation.heading * Math.PI) / 180);

    // Draw vehicle icon (car shape)
    ctx.fillStyle = '#1e40af';
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(0, -15);
    ctx.lineTo(10, -5);
    ctx.lineTo(10, 10);
    ctx.lineTo(-10, 10);
    ctx.lineTo(-10, -5);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw direction indicator
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.moveTo(0, -20);
    ctx.lineTo(5, -15);
    ctx.lineTo(-5, -15);
    ctx.closePath();
    ctx.fill();

    ctx.restore();

    // Request next frame
    const animate = () => {
      requestAnimationFrame(() => {
        if (canvasRef.current) {
          const newCtx = canvasRef.current.getContext('2d');
          if (newCtx) {
            // Redraw only the vehicle part for smooth animation
            const newProgress = ((Date.now() / 50) % 100) / 100;
            const newT = newProgress;
            const newX = Math.pow(1 - newT, 2) * 50 + 2 * (1 - newT) * newT * (width / 2) + Math.pow(newT, 2) * (width - 50);
            const newY = Math.pow(1 - newT, 2) * 50 + 2 * (1 - newT) * newT * (height / 3) + Math.pow(newT, 2) * (height - 50);

            // Clear old vehicle position
            newCtx.clearRect(0, 0, width, height);

            // Redraw background and route
            newCtx.fillStyle = '#e8f4f8';
            newCtx.fillRect(0, 0, width, height);

            // Draw grid
            newCtx.strokeStyle = '#d0e8f0';
            newCtx.lineWidth = 1;
            for (let i = 0; i < width; i += 40) {
              newCtx.beginPath();
              newCtx.moveTo(i, 0);
              newCtx.lineTo(i, height);
              newCtx.stroke();
            }
            for (let i = 0; i < height; i += 40) {
              newCtx.beginPath();
              newCtx.moveTo(0, i);
              newCtx.lineTo(width, i);
              newCtx.stroke();
            }

            newCtx.strokeStyle = '#3b82f6';
            newCtx.lineWidth = 4;
            newCtx.setLineDash([10, 5]);
            newCtx.beginPath();
            newCtx.moveTo(50, 50);
            newCtx.quadraticCurveTo(width / 2, height / 3, width - 50, height - 50);
            newCtx.stroke();
            newCtx.setLineDash([]);

            // Redraw markers
            newCtx.fillStyle = '#10b981';
            newCtx.beginPath();
            newCtx.arc(50, 50, 12, 0, Math.PI * 2);
            newCtx.fill();
            newCtx.fillStyle = '#fff';
            newCtx.font = 'bold 12px Arial';
            newCtx.textAlign = 'center';
            newCtx.fillText('S', 50, 54);

            newCtx.fillStyle = '#ef4444';
            newCtx.beginPath();
            newCtx.arc(width - 50, height - 50, 12, 0, Math.PI * 2);
            newCtx.fill();
            newCtx.fillStyle = '#fff';
            newCtx.fillText('E', width - 50, height - 46);

            // Draw vehicle at new position
            newCtx.save();
            newCtx.translate(newX, newY);
            newCtx.rotate((vehicleLocation.heading * Math.PI) / 180);

            newCtx.fillStyle = '#1e40af';
            newCtx.strokeStyle = '#fff';
            newCtx.lineWidth = 2;

            newCtx.beginPath();
            newCtx.moveTo(0, -15);
            newCtx.lineTo(10, -5);
            newCtx.lineTo(10, 10);
            newCtx.lineTo(-10, 10);
            newCtx.lineTo(-10, -5);
            newCtx.closePath();
            newCtx.fill();
            newCtx.stroke();

            newCtx.fillStyle = '#fbbf24';
            newCtx.beginPath();
            newCtx.moveTo(0, -20);
            newCtx.lineTo(5, -15);
            newCtx.lineTo(-5, -15);
            newCtx.closePath();
            newCtx.fill();

            newCtx.restore();
          }
        }
        animate();
      });
    };

    animate();
  }, [vehicleLocation.heading]);

  return (
    <div className="live-tracking-container">
      {/* Live Tracking Banner */}
      <div className="tracking-banner">
        <div className="banner-content">
          <Radio className={`live-icon ${isLive ? 'pulse' : ''}`} size={20} />
          <span className="banner-text">Live Tracking Active</span>
        </div>
        <div className="tracking-stats">
          <span className="stat-item">
            <Navigation size={16} />
            Speed: {vehicleLocation.speed.toFixed(1)} km/h
          </span>
        </div>
      </div>

      {/* Map Canvas */}
      <div className="map-container">
        <canvas
          ref={canvasRef}
          width={800}
          height={500}
          className="tracking-canvas"
        />
      </div>

      {/* Emergency Alert */}
      {emergencyAlerts.length > 0 ? (
        <div className="emergency-alert">
          <AlertTriangle size={20} />
          <span>{emergencyAlerts[0].message}</span>
        </div>
      ) : (
        <div className="emergency-alert demo-alert">
          <AlertTriangle size={20} />
          <span>Emergency Vehicle Alert: Ambulance approaching from the north - ETA 2 minutes</span>
        </div>
      )}

      {/* Route Info */}
      <div className="route-info">
        <div className="info-item">
          <span className="info-label">From:</span>
          <span className="info-value">City Hall</span>
        </div>
        <div className="info-divider">→</div>
        <div className="info-item">
          <span className="info-label">To:</span>
          <span className="info-value">Central Park</span>
        </div>
        <div className="info-item">
          <span className="info-label">Distance:</span>
          <span className="info-value">12.5 km</span>
        </div>
        <div className="info-item">
          <span className="info-label">ETA:</span>
          <span className="info-value">18 mins</span>
        </div>
      </div>
    </div>
  );
}
import { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { CreateEvent } from '../components/CreateEvent';
import { LiveTracking } from '../components/LiveTracking';
import { EventCard } from '../components/EventCard';
import { eventAPI } from '../../utils/api';
import '../styles/dashboard.css';

export default function Dashboard() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const data = await eventAPI.getAllEvents();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleEventCreated = () => {
    fetchEvents();
  };

  // Event images from Unsplash
  const eventImages = [
    'https://images.unsplash.com/photo-1695655300485-d3da8bc72076?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJhdGhvbiUyMHJ1bm5pbmclMjBldmVudHxlbnwxfHx8fDE3NzIyOTUwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1592758080692-b6a5dbe9c725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29uZmVyZW5jZSUyMHN0YWdlfGVufDF8fHx8MTc3MjI5NTA1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1672841821756-fc04525771c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwY29uY2VydCUyMGNyb3dkfGVufDF8fHx8MTc3MjI5NTA1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  return (
    <div className="dashboard-page">
      <Navbar />

      <main className="dashboard-main">
        {/* Main Content Grid */}
        <div className="dashboard-grid">
          {/* Left Side - Create Event */}
          <div className="dashboard-left">
            <CreateEvent onEventCreated={handleEventCreated} />
          </div>

          {/* Right Side - Live Map */}
          <div className="dashboard-right">
            <LiveTracking />
          </div>
        </div>

        {/* Upcoming Events Section */}
        <section className="upcoming-events-section">
          <h2 className="section-title">Upcoming Events</h2>

          {loading ? (
            <div className="loading-message">Loading events...</div>
          ) : events.length > 0 ? (
            <div className="events-grid">
              {events.slice(0, 3).map((event, index) => (
                <EventCard
                  key={event.id}
                  {...event}
                  imageUrl={eventImages[index % eventImages.length]}
                />
              ))}
            </div>
          ) : (
            <div className="no-events-message">
              No upcoming events. Create one to get started!
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

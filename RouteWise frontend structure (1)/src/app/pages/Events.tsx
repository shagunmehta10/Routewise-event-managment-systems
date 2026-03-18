import { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { EventCard } from '../components/EventCard';
import { eventAPI } from '../../utils/api';
import { Search, Filter, Plus } from 'lucide-react';
import '../styles/events.css';

export default function Events() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    fetchEvents();
  }, []);

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

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || event.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const eventImages = [
    'https://images.unsplash.com/photo-1695655300485-d3da8bc72076?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJhdGhvbiUyMHJ1bm5pbmclMjBldmVudHxlbnwxfHx8fDE3NzIyOTUwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1592758080692-b6a5dbe9c725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29uZmVyZW5jZSUyMHN0YWdlfGVufDF8fHx8MTc3MjI5NTA1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1672841821756-fc04525771c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwY29uY2VydCUyMGNyb3dkfGVufDF8fHx8MTc3MjI5NTA1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  return (
    <div className="events-page">
      <Navbar />

      <main className="events-main">
        <div className="events-header">
          <h1 className="page-title">Events Management</h1>
          <button className="create-event-btn">
            <Plus size={20} />
            Create New Event
          </button>
        </div>

        {/* Search and Filter Bar */}
        <div className="search-filter-bar">
          <div className="search-container">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-container">
            <Filter size={20} className="filter-icon" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Events</option>
              <option value="upcoming">Upcoming</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        {/* Events List */}
        {loading ? (
          <div className="loading-state">Loading events...</div>
        ) : filteredEvents.length > 0 ? (
          <div className="events-grid-full">
            {filteredEvents.map((event, index) => (
              <EventCard
                key={event.id}
                {...event}
                imageUrl={eventImages[index % eventImages.length]}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No events found</p>
            <p className="empty-state-subtitle">
              {searchTerm ? 'Try adjusting your search' : 'Create your first event to get started'}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

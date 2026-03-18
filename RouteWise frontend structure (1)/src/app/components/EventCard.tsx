import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import '../styles/event-card.css';

interface EventCardProps {
  id: number;
  name: string;
  description: string;
  date: string;
  startLocation: string;
  endLocation: string;
  imageUrl?: string;
}

export function EventCard({
  name,
  description,
  date,
  startLocation,
  endLocation,
  imageUrl,
}: EventCardProps) {
  const formattedDate = format(new Date(date), 'MMM dd, yyyy');

  return (
    <div className="event-card">
      {/* Event Image */}
      <div className="event-image-container">
        <img
          src={imageUrl || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400'}
          alt={name}
          className="event-image"
        />
        <div className="event-badge">Upcoming</div>
      </div>

      {/* Event Content */}
      <div className="event-content">
        <h3 className="event-title">{name}</h3>
        <p className="event-description">{description}</p>

        {/* Event Details */}
        <div className="event-details">
          <div className="detail-item">
            <Calendar size={16} className="detail-icon" />
            <span>{formattedDate}</span>
          </div>
          <div className="detail-item">
            <MapPin size={16} className="detail-icon" />
            <span className="location-text">
              {startLocation} <ArrowRight size={14} className="arrow-icon" /> {endLocation}
            </span>
          </div>
        </div>

        {/* View Details Button */}
        <button className="view-details-button">
          View Details
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

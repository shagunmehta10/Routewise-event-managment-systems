import { useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { eventAPI } from '../../utils/api';
import { toast } from 'sonner';
import '../styles/create-event.css';

interface CreateEventProps {
  onEventCreated?: () => void;
}

export function CreateEvent({ onEventCreated }: CreateEventProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    startLocation: '',
    endLocation: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock location options
  const locations = [
    'City Hall',
    'Central Park',
    'Convention Center',
    'Tech Hub',
    'Beach Arena',
    'Coastal Plaza',
    'Downtown Square',
    'Sports Stadium',
    'Airport Terminal',
    'University Campus',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.date || !formData.startLocation || !formData.endLocation) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (formData.startLocation === formData.endLocation) {
      toast.error('Start and End locations must be different');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await eventAPI.createEvent(formData);
      
      if (response.success || response.id) {
        toast.success('Event created successfully!');
        
        // Reset form
        setFormData({
          name: '',
          description: '',
          date: '',
          startLocation: '',
          endLocation: '',
        });

        // Callback to refresh events list
        if (onEventCreated) {
          onEventCreated();
        }
      }
    } catch (error) {
      toast.error('Failed to create event. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="create-event-card">
      <h2 className="card-title">Create New Event</h2>

      <form onSubmit={handleSubmit} className="event-form">
        {/* Event Name */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Event Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter event name"
            className="form-input"
            required
          />
        </div>

        {/* Description */}
        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter event description"
            className="form-textarea"
            rows={3}
          />
        </div>

        {/* Date */}
        <div className="form-group">
          <label htmlFor="date" className="form-label">
            <Calendar size={16} />
            Date *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="form-input"
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>

        {/* Start Location */}
        <div className="form-group">
          <label htmlFor="startLocation" className="form-label">
            <MapPin size={16} />
            Start Location *
          </label>
          <select
            id="startLocation"
            name="startLocation"
            value={formData.startLocation}
            onChange={handleInputChange}
            className="form-select"
            required
          >
            <option value="">Select start location</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* End Location */}
        <div className="form-group">
          <label htmlFor="endLocation" className="form-label">
            <MapPin size={16} />
            End Location *
          </label>
          <select
            id="endLocation"
            name="endLocation"
            value={formData.endLocation}
            onChange={handleInputChange}
            className="form-select"
            required
          >
            <option value="">Select end location</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Creating...' : 'Create Event'}
        </button>
      </form>
    </div>
  );
}

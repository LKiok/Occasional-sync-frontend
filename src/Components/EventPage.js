// src/components/EventPage.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function EventPage() {
  const { id } = useParams();
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    // Fetch the list of events when the component mounts
    axios.get('https://event-hub-huwl.onrender.com/events')
      .then((response) => {
        setEvents(response.data.events);
      })
      .catch((error) => {
        console.error('Error fetching events', error);
      });
  }, []);

  useEffect(() => {
    // Fetch event details when the ID parameter changes
    if (id) {
      axios.get(`/search-events/${id}`)
        .then((response) => {
          setSelectedEvent(response.data.event);
        })
        .catch((error) => {
          console.error('Error fetching event details', error);
        });
    }
  }, [id]);

  return (
    <div>
      <h2>Event Page</h2>
      <div className="flex">
        <div className="w-1/2">
          <h3>Event List</h3>
          <ul>
            {events.map((event) => (
              <li key={event.event_id}>
                <Link to={`/events/${event.event_id}`}>{event.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2">
          {selectedEvent ? (
            <div>
              <h3>Event Details</h3>
              <p>Name: {selectedEvent.name}</p>
              <p>Date: {selectedEvent.date}</p>
              <p>Location: {selectedEvent.location}</p>
              <p>Description: {selectedEvent.description}</p>
              {/* Add more event details as needed */}
            </div>
          ) : (
            <p>Select an event from the list to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventPage;

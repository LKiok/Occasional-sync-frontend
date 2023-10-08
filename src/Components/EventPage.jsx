import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import SweetAlert2 from "sweetalert2";

const EventCard = ({
  event,
  isSelected,
  onToggleSelect,
  onRegister,
  onCancelRegistration

}) => {
  const cardStyle = {
    borderRadius: "8px",
    margin: "10px",
    padding: "10px",
    backgroundColor: "white",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "6px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease-in-out, filter 0.3s ease-in-out",
  };

  const buttonStyle = {
    backgroundColor: isSelected ? "red" : "blue",
    color: "white",
    padding: "4px 8px",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
    border: "none",
  };

  return (
    <div style={cardStyle} onClick={onToggleSelect}>
      <div className="event-image-container">
        <img
          style={imageStyle}
          src={event.poster}
          alt={event.name}
          loading="lazy"
        />
      </div>
      <div className="event-name">
        <h3 className="font-semibold text-xl tracking-wider font-signature text-black">
          {event.name}
        </h3>
      </div>
      <div className="event-details text-center">
        <p className="text-black">Location: {event.location}</p>
        <p className="text-yellow-500">Date: {event.date}</p>
      </div>
      <div className="event-description bg-white p-4 rounded mt-4 text-center">
        <p className="text-gray-600">Descrpition: {event.description}</p>
      </div>
      <button
        style={buttonStyle}
        onClick={(e) => {
          e.stopPropagation(); 
          isSelected ? onCancelRegistration() : onRegister();
        }}
      >
        {isSelected ? "Cancel Registration" : "Register Now"}
      </button>
    </div>
  );
};

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    // Fetch events when the component mounts
    const accessToken = localStorage.getItem("accessToken");

    axios
      .get("https://event-hub-huwl.onrender.com/events", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setEvents(response.data.events);
      })
      .catch((error) => {
        console.error("Error fetching events", error);
      });
  }, []);

  const handleToggleSelect = (id) => {
    setSelectedEvents((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((eventId) => eventId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const handleRegister = (id) => {
    setSelectedEvents((prevSelected) => [...prevSelected, id]);

    SweetAlert2.fire({
      title: "Success!",
      text: "Registration successful",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#f1cc17",
    });
  };

  const handleCancelRegistration = (id) => {
    setSelectedEvents((prevSelected) =>
      prevSelected.filter((eventId) => eventId !== id)
    );

    SweetAlert2.fire({
      title: "Success!",
      text: "Registration canceled successfully",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#f1cc17",
    });
  };

  const handleEventClick = (eventId) => {
    axios
      .get(`/search-events/${eventId}`)
      .then((response) => {
        setSelectedEvent(response.data.event);
      })
      .catch((error) => {
        console.error("Error fetching event details", error);
      });
  };

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const eventListStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "20px",
  };

  return (
    <div>
      <Navbar />
      <div className="w-full mx-auto text-center mt-20 mb-10">
        <h2 className="font-semibold text-xl tracking-wide text-blue-500 mt-5 section-title">
          Upcoming Events
        </h2>
        <div className="w-full px-4 md:px-10 mt-6">
          <input
            type="text"
            placeholder="Search by event name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-200 text-gray-800 px-1 py-1 rounded mb-4"
          />
          <div style={eventListStyle}>
            {filteredEvents.map((event) => (
              <EventCard
                key={event.event_id}
                event={event}
                isSelected={selectedEvents.includes(event.event_id)}
                onToggleSelect={() => handleToggleSelect(event.event_id)}
                onRegister={() => handleRegister(event.event_id)}
                onCancelRegistration={() =>
                  handleCancelRegistration(event.event_id)
                }
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:px-10">
        {selectedEvent && (
          <div>
            <h3 className="font-semibold text-2xl text-blue-500">
              Event Details
            </h3>
            <div className="bg-white p-4 rounded mt-4 text-center">
              <p className="text-black">Name: {selectedEvent.name}</p>
              <p className="text-black">Date: {selectedEvent.date}</p>
              <p className="text-black">Location: {selectedEvent.location}</p>
              <p className="text-black">
                Description: {selectedEvent.description}
              </p>
              <p className="text-black">Capacity: {selectedEvent.capacity}</p>
              <div className="mt-4">
                <img
                  src={selectedEvent.poster}
                  alt={selectedEvent.name}
                  className="rounded-lg shadow-md mx-auto"
                />
              </div>
              <button
                style={buttonStyle}
                onClick={isSelected ? handleCancelRegistration : handleRegister}
                className="mt-4"
              >
                {isSelected ? "Cancel Registration" : "Register Now"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventPage;

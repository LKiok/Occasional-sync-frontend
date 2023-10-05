// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UserRegistration from './components/UserRegistration';
import UserLogin from './components/UserLogin';
import EventPage from './components/EventPage'; // Use EventPage for events

function App() {
  return (
    <Router>
      <Navbar /> {/* Place your Navbar component here */}
      <div className="container mx-auto mt-4">
        {/* Define your routes using Route components */}
        <Route path="/" exact component={Home} />
        <Route path="/register" component={UserRegistration} />
        <Route path="/login" component={UserLogin} />
        <Route path="/events/:id?" component={EventPage} /> {/* Use EventPage for events */}
        {/* Add more routes as needed */}
      </div>
    </Router>
  );
}

export default App;


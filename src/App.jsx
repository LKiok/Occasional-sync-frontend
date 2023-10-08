import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./Components/Home";
import UserRegistration from "./Components/UserRegistration";
import UserLogin from "./Components/UserLogin";
import EventPage from "./Components/EventPage";
import EventCreation  from "./Components/EventCreation";
import AboutPage from "./Components/AboutPage";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<UserRegistration />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/create-events" element={<EventCreation />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


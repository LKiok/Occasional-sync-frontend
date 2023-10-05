import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Make sure to import Routes

import Home from "./Components/Home";
import UserRegistration from "./Components/UserRegistration";
import UserLogin from "./Components/UserLogin";
import EventPage from "./Components/EventPage";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="Background">
        {" "}
        {/* Add your background class here */}
        <Routes>
          {" "}
          {/* Wrap your Routes within a Routes component */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/events/:id?" element={<EventPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


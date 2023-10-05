import React, { useState } from "react";
import axios from "axios";
import "./UserRegistration.css";

function UserRegistration() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/register", formData);
      console.log("Registration successful", response.data);
      // Redirect to the login page or handle as needed
    } catch (error) {
      console.error("Registration error", error.response.data);
    }
  };

  return (
    <div className="user-registration-container">
      <h2 className="registration-title">User Registration</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-field">
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default UserRegistration;

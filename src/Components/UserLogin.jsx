import React, { useState } from "react";
import axios from "axios";
import "./UserLogin.css";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

function UserLogin() {
  const [formData, setFormData] = useState({
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
      const response = await axios.post("/login", formData);
      console.log("Login successful", response.data);
      // Redirect to a protected page or handle as needed
    } catch (error) {
      console.error("Login error", error.response.data);
    }
  };

  return (
    <div className="user-login-container">
      {/* <Navbar /> */}
      <div className="login-box">
        <h2 className="login-title">User Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-field">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="input"
            />
          </div>
          <div className="form-field">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="input"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
      {/* <Footer />  */}
    </div>
  );
}

export default UserLogin;

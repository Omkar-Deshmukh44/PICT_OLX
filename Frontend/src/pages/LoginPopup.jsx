import React, { useState } from "react";
import axios from "axios";
import "./LoginPopup.css";

const LoginPopup = ({ isOpen, onClose, onLogin }) => {
  const [isLoginState, setIsLoginState] = useState(true);
  const [formData, setFormData] = useState({ fullname: "", email: "", password: "" });
  const [error, setError] = useState("");

  if (!isOpen) return null; // Do not render if not open

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      if (isLoginState) {
        // Login API call
        const response = await axios.post("http://localhost:4001/user/login", {
          email: formData.email,
          password: formData.password,
        });
        alert("Login successful!");
        onLogin(response.data.user); // Pass user data to parent
      } else {
        // Register API call
        const response = await axios.post("http://localhost:4001/user/signup", {
          fullname: formData.fullname,
          email: formData.email,
          password: formData.password,
        });
        alert("Registration successful! Please log in.");
        setIsLoginState(true); // Switch to login state
      }
      onClose(); // Close the popup
      setFormData({ fullname: "", email: "", password: "" }); // Reset form data
    } catch (err) {
      console.error("Error during submission:", err.response?.data || err);
      setError(err.response?.data?.message || "Something went wrong!");
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token or user data
    localStorage.removeItem("Users");
    window.location.reload(); // Refresh or redirect to login
  };
  
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{isLoginState ? "Login" : "Create Account"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLoginState && (
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">{isLoginState ? "Login" : "Register"}</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <div className="toggle-state">
          {isLoginState ? (
            <p className="register-state">
              Don't have an account?{" "}
              <span onClick={() => setIsLoginState(false)}>Register</span>
            </p>
          ) : (
            <p className="login-state">
              Already have an account?{" "}
              <span onClick={() => setIsLoginState(true)}>Login</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;

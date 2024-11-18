import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Sell from './pages/Sell';
import Buy from './pages/Buy';
import Profile from './pages/Profile';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks login state
  const [user, setUser] = useState(null); // Stores the logged-in user's name
  const [token, setToken] = useState(null); // Stores the authentication token

  // Function to handle login
  const login = async (username, password) => {
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsLoggedIn(true);
        setUser(data.username); // Assuming the backend returns the username
        setToken(data.token); // Store the token if needed for authenticated requests
        alert('Login successful!');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  // Function to handle logout
  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setToken(null);
    alert('Logged out successfully.');
  };

  return (
    <Router>
      <div className="container">
        {/* Pass props to Navbar */}
        <Navbar isLoggedIn={isLoggedIn} user={user} login={login} logout={logout} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/buy" element={<Buy />} />
          <Route
            path="/profile"
            element={
              isLoggedIn ? (
                <Profile user={user} />
              ) : (
                <div>
                  <h2>Please login to access your profile</h2>
                </div>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

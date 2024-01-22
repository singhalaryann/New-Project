import React, { useState } from 'react';
import './Homepage.css';
import logo_icon from '../ASSETS/logo.png';  // Adjust the path accordingly
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // Added state for dropdown

  const handleSignupClick = () => {
    setShowRegistration(true);
    setShowDropdown(true); // Show dropdown when signup is clicked
  };

  const handleOptionSelect = (option) => {
    // Handle the selected option
    console.log(`Selected Option: ${option}`);
    setShowDropdown(false); // Hide dropdown after option is selected
  };

  return (
    <>
      <header>
        <div className="logo-container">
          <img src={logo_icon} alt="Logo" className="logo" />
        </div>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact Us</a>
        <a href="/">Service</a>
        <a href="/">Login</a>
        <a href="/" onClick={handleSignupClick}>Signup</a>

        {showDropdown && (
          <div className="dropdown">
            <button className="dropbtn">Select Option</button>
            <div className="dropdown-content">
              <div onClick={() => handleOptionSelect('Borrower')}>Borrower</div>
              <div onClick={() => handleOptionSelect('Lender')}>Lender</div>
              <div onClick={() => handleOptionSelect('Underwriter')}>Underwriter</div>
            </div>
          </div>
        )}
      </header>

      <div className="container">
        <h1>WELCOME!</h1>
        {/* Your homepage content goes here */}
      </div>
      {/* Render the registration form conditionally */}
      {showRegistration && <RegistrationForm />}
    </>
  );
};

const RegistrationForm = () => {
  return (
    <div className="registration-form">
      {/* Registration form content goes here */}
    </div>
  );
};

export default Homepage;

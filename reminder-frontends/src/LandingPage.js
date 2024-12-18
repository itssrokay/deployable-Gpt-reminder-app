import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to WhatsApp Reminder</h1>
        <p>Never forget important tasks with our easy-to-use reminder system.</p>
        <div className="auth-options">
          <Link to="/login" className="auth-button login">Login</Link>
          <Link to="/signup" className="auth-button signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
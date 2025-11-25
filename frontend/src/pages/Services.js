// src/pages/Services.js
import React, { useState, useEffect } from 'react';
import './Services.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'; // ✅ Added for Link

const services = [
  {
    icon: 'fa-solid fa-qrcode',
    title: 'QR Code Scan Tool',
    description: 'Quickly scan codes for easy access to workouts and equipment info.'
  },
  {
    icon: 'fa-brands fa-youtube',
    title: 'Exclusive Training Videos',
    description: 'Watch professional workout tutorials anytime.'
  },
  {
    icon: 'fa-solid fa-phone',
    title: 'One-tap Contact Options',
    description: 'Instantly call trainers or support.'
  },
  {
    icon: 'fa-solid fa-message',
    title: 'Instant Messaging',
    description: 'Chat with trainers or support staff directly.'
  },
  {
    icon: 'fa-solid fa-dumbbell',
    title: 'State-of-the-art Equipment',
    description: 'Stay updated on gym gear and usage tips.'
  },
  {
    icon: 'fa-solid fa-user-tie',
    title: 'Certified Trainers',
    description: 'Access expert guidance and personalized coaching.'
  },
  {
    icon: 'fa-solid fa-clock',
    title: '24/7 Gym Access',
    description: 'Workout whenever you want with round-the-clock availability.'
  },
  {
    icon: 'fa-solid fa-utensils',
    title: 'Meal & Nutrition Plans',
    description: 'Get customized dietary advice to complement your workouts.'
  },
  {
    icon: 'fa-solid fa-calculator',
    title: 'Built-in BMI Calculator',
    description: 'Track your health stats easily.'
  },
  {
    icon: 'fa-solid fa-dumbbell',
    title: 'Daily Workout Plan',
    description: 'Follow tailored daily exercises for better results.'
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Member Progress Tracking',
    description: 'Monitor your fitness journey over time.'
  },
  {
    icon: 'fa-solid fa-comments',
    title: 'Testimonials & FAQs',
    description: 'Read success stories and find answers to common questions.'
  }
];

const Services = ({ darkMode }) => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false); // ✅ Added

  useEffect(() => {
  document.body.classList.add('services-page');
  if (darkMode) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }

  return () => {
    document.body.classList.remove('services-page');
    document.body.classList.remove('dark');
  };
}, [darkMode]);


  const handleLogout = () => { // ✅ Added
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className={`services-container ${darkMode ? 'dark' : ''}`}>
      <h2 className="services-title">
        <i className="fa-solid fa-layer-group section-icon"></i> Our services
      </h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <i className={`${service.icon} service-icon`}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          fontSize: "14px",
          color: darkMode ? "#fff" : "#000",
          maxWidth: "400px",
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: 1.6,
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          fontWeight: "600",
        }}
      >
        {localStorage.getItem("email") ? (
          <>
            <p style={{ marginBottom: "10px", fontWeight: "600" }}>
              You’re logged in as{" "}
              <span style={{ fontWeight: "600", color: "#007bff" }}>
                {localStorage.getItem("email")}
              </span>
            </p>
            <p>
              Want to logout?{" "}
              <span
                onClick={() => setShowLogoutModal(true)}
                style={{
                  color: "#007bff",
                  fontWeight: "600",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                Logout
              </span>
            </p>
          </>
        ) : (
          <>
            <p style={{ marginBottom: "10px", fontWeight: "600" }}>
              Ready to crush your fitness goals? Whether you're returning or new here, we’ve got you covered.
            </p>
            <p>
              Already have an account?{" "}
              <Link
                to="/login?tab=signin"
                state={{ darkMode }}
                style={{
                  color: "#007bff",
                  textDecoration: "none",
                  cursor: "pointer",
                  fontWeight: "600",
                  marginRight: "6px",
                }}
              >
                Sign In
              </Link>
              or
              <Link
                to="/login?tab=signup"
                state={{ darkMode }}
                style={{
                  color: "#007bff",
                  textDecoration: "none",
                  cursor: "pointer",
                  fontWeight: "600",
                  marginLeft: "6px",
                }}
              >
                Sign Up
              </Link>{" "}
              to get started with your personalized training journey today!
            </p>

            <div className="admin-login-link" style={{ marginTop: "10px" }}>
              <p>
                Are you an admin?{" "}
                <Link to="/admin-login" className="admin-link">Login here</Link>
              </p>
            </div>
          </>
        )}
      </div>

      {/* ✅ Logout Modal */}
      {showLogoutModal && (
        <div className="logout-modal-overlay">
          <div
            className="logout-modal"
            style={{
              backgroundColor: darkMode ? "#333" : "#fff",
              color: darkMode ? "#fff" : "#000",
            }}
          >
            <div
              className="top-icon-wrapper"
              onClick={() => setShowLogoutModal(false)}
              style={{ textAlign: "right", cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </div>
            <h3>
              Are you sure you want to log out?<br />
              You will need to sign in again to access your account.
            </h3>
            <div className="logout-buttons">
              <button onClick={handleLogout} className="yes-btn">Yes</button>
              <button onClick={() => setShowLogoutModal(false)} className="no-btn">No</button>
            </div>
          </div>
        </div>
      )}

      <div className="con">
        <div className="contacts">
          <br /><br /><br /><br />
          <i id="santosh" className="fa-brands fa-whatsapp" style={{ fontSize: 25 }}></i>
          <i id="santosh" className="fa-solid fa-envelope" style={{ fontSize: 25 }}></i>
          <i id="santosh" className="fa-brands fa-facebook-f" style={{ fontSize: 25 }}></i>
          <i id="santosh" className="fa-brands fa-twitter" style={{ fontSize: 25 }}></i>
        </div>
      </div>
    </div>
  );
};

export default Services;

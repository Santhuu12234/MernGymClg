// Abou
import './About.css';
import { useNavigate, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const About = ({ darkMode }) => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false); // ✅ Added

  // ✅ Optional: Add dark mode class to <body> for full-page theming
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    return () => {
      document.body.classList.remove("dark-mode");
    };
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.clear();
    localStorage.setItem("darkMode", darkMode); // ✅ store theme
    navigate("/login");
  };

  return (
    <div className={`about-page ${darkMode ? 'dark' : ''}`}>

      {/* About the Gym */}
      <section className="about-section gym-section">
        <h2><i className="fa-solid fa-dumbbell section-icon"></i> About the Gym</h2>
        <p>
          <strong>SK Fitness</strong> is a state-of-the-art fitness facility offering strength training, cardio, CrossFit,
          and personal training programs. We combine technology, motivation, and expert guidance to help you reach your goals.
        </p>
        <p>
          Whether you're a beginner or a professional athlete, SK Fitness has the tools, trainers, and support system you need to thrive.
        </p>
      </section>

      {/* About the Website */}
      <section className="about-section website-section">
        <h2><i className="fa-solid fa-globe section-icon"></i> About the Website</h2>
        <p>
          The SK Fitness digital platform extends your gym experience into your lifestyle. Track workouts, view videos, connect with trainers,
          and stay motivated — all from your mobile or desktop.
        </p>
        <ul>
          <li><i className="fa-solid fa-qrcode"></i> QR Code Scan Tool — Quickly scan codes for easy access to workouts and equipment info.</li>
          <li><i className="fa-brands fa-youtube"></i> Exclusive Training Videos — Watch professional workout tutorials anytime.</li>
          <li><i className="fa-solid fa-phone"></i> One-tap Contact Options — Instantly call trainers or support.</li>
          <li><i className="fa-solid fa-message"></i> Instant Messaging — Chat with trainers or support staff directly.</li>
          <li><i className="fa-solid fa-dumbbell"></i> State-of-the-art Equipment — Stay updated on gym gear and usage tips.</li>
          <li><i className="fa-solid fa-user-tie"></i> Certified Trainers — Access expert guidance and personalized coaching.</li>
          <li><i className="fa-solid fa-clock"></i> 24/7 Gym Access — Workout whenever you want with round-the-clock availability.</li>
          <li><i className="fa-solid fa-utensils"></i> Meal & Nutrition Plans — Get customized dietary advice to complement your workouts.</li>
          <li><i className="fa-solid fa-calculator"></i> Built-in BMI Calculator — Track your health stats easily.</li>
          <li><i className="fa-solid fa-dumbbell"></i> Daily Workout Plan — Follow tailored daily exercises for better results.</li>
          <li><i className="fa-solid fa-chart-line"></i> Member Progress Tracking — Monitor your fitness journey over time.</li>
          <li><i className="fa-solid fa-comments"></i> Testimonials & FAQs — Read success stories and find answers to common questions.</li>
        </ul>
      </section>

      {/* About Booking a Session */}
      <section className="about-section booking-section">
        <h2><i className="fa-solid fa-calendar-check section-icon"></i> Book a Session</h2>
        <p>
          At SK Fitness, convenience meets flexibility with our seamless online session booking system. Whether you’re at home, at work, or on the go, you can <strong>reserve your preferred workout slot easily and instantly</strong>.
        </p>
        <p>
          No need to visit the gym or make a call—simply use our website or mobile app to select a date and time that suits your schedule. This advanced booking system helps you plan your fitness routine ahead, ensuring your session fits perfectly into your busy lifestyle.
        </p>
        <p>
          Our booking platform also helps maintain safe gym capacity limits, so you can enjoy a comfortable workout environment without overcrowding. Plus, with reminders and easy rescheduling options, managing your fitness commitments has never been simpler.
        </p>
        <p>
          Experience the freedom to train on your terms and stay committed to your goals with SK Fitness’s hassle-free online booking.
        </p>
      </section>

      {/* About the Owner */}
      <section className="about-section owner-section">
        <h2><i className="fa-solid fa-user section-icon"></i> About the Owner</h2>
        <p>
          <strong>Santosh Kumar</strong>, founder of SK Fitness, built this gym and platform with the vision of merging traditional fitness with smart, modern tools.
          His mission is to make professional fitness guidance accessible to everyone.
        </p>
        <p>
          With a background in training and technology, he ensures members get a motivating experience both inside the gym and online.
        </p>
        <p><strong>Contact:</strong> <a href="tel:+919705635139">+91 97056 35139</a></p>
      </section>

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
          fontWeight: "400",
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
            <p style={{fontWeight:600}}>
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
            <p style={{fontWeight:600}}>
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
              to get started with your personalized training journey today..  !
            </p>

            {/* ✅ Admin Login */}
            <div className="admin-login-link" style={{ marginTop: "10px",fontWeight:600}}>
              <p>
                Are you an admin?{" "}
                <Link
                  to="/admin-login"
                  state={{ darkMode }}
                  style={{ fontWeight: "600", color: "#007bff", textDecoration: "none" }}
                >
                  Login here
                </Link>{" "}
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
            <div className="top-icon-wrapper" onClick={() => setShowLogoutModal(false)}>
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
      <br />
      <br />
    </div>
  );
};

export default About;

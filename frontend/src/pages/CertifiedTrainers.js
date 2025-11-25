// src/pages/CertifiedTrainers.jsx
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./CertifiedTrainers.css";
import img1 from './images1/img1.jpg';
import img2 from './images1/img2.jpg';
import img3 from './images1/img3.jpg';
import img4 from './images1/img4.jpg';
import img5 from './images1/img5.jpg';
import img6 from './images1/img6.jpg';
import img7 from './images1/img7.jpg';
import img8 from './images1/img8.jpg';
import img9 from './images1/img9.jpg';
import img10 from './images1/img10.jpg';
import img11 from './images1/img11.jpg';
import img12 from './images1/img12.jpg';
import img13 from './images1/img13.jpg';
import img14 from './images1/img14.jpg';

const equipmentList = [
  { title: 'Rahul Verma', description: 'Certified strength coach specializing in muscle gain and functional training programs.', image: img1 },
  { title: 'Sneha Reddy', description: 'Expert in cable resistance and body toning workouts with a decade of experience.', image: img2 },
  { title: 'Arjun Mehta', description: 'Cardio and endurance specialist with a focus on low-impact fitness strategies.', image: img3 },
  { title: 'Divya Nair', description: 'Lower-body transformation coach helping clients achieve powerful leg development.', image: img4 },
  { title: 'Vikram Singh', description: 'Glute and hamstring expert offering personalized strength routines.', image: img5 },
  { title: 'Neha Kapoor', description: 'Upper-body sculpting coach with a focus on chest and shoulder stability.', image: img6 },
  { title: 'Karan Malhotra', description: 'Bodyweight training specialist improving strength through pull-up variations.', image: img7 },
  { title: 'Pooja Deshmukh', description: 'Lat development and upper back posture correction expert.', image: img8 },
  { title: 'Ramesh Iyer', description: 'HIIT and cardio coach using full-body movement for stamina building.', image: img9 },
  { title: 'Ishita Sharma', description: 'Mobility and rehab trainer using resistance bands for pain-free progress.', image: img10},
  { title: 'Manoj Yadav', description: 'Chest and shoulder coach focusing on controlled pressing techniques.', image: img11 },
  { title: 'Anjali Mishra', description: 'Back and biceps strength specialist ensuring balanced muscle development.', image: img12},
  { title: 'Farhan Qureshi', description: 'Fat loss and leg endurance coach with high-energy stair routines.', image: img13 },
  { title: 'Priya Das', description: 'Cycling and stamina improvement trainer with joint-friendly routines.', image: img14 },
];


// Unique contact info per trainer
const messageData = [
  {
    whatsapp: "919111111111",
    facebook: "trainerA",
    instagram: "trainerA.ig",
    email: "trainerA@example.com"
  },
  {
    whatsapp: "919222222222",
    facebook: "trainerB",
    instagram: "trainerB.ig",
    email: "trainerB@example.com"
  },
  {
    whatsapp: "919222222222",
    facebook: "trainerB",
    instagram: "trainerB.ig",
    email: "trainerB@example.com"
  },
  {
    whatsapp: "919222222222",
    facebook: "trainerB",
    instagram: "trainerB.ig",
    email: "trainerB@example.com"
  },
  {
    whatsapp: "919222222222",
    facebook: "trainerB",
    instagram: "trainerB.ig",
    email: "trainerB@example.com"
  },
  {
    whatsapp: "919222222222",
    facebook: "trainerB",
    instagram: "trainerB.ig",
    email: "trainerB@example.com"
  },
  {
    whatsapp: "919222222222",
    facebook: "trainerB",
    instagram: "trainerB.ig",
    email: "trainerB@example.com"
  },
  {
    whatsapp: "919222222222",
    facebook: "trainerB",
    instagram: "trainerB.ig",
    email: "trainerB@example.com"
  },
  {
    whatsapp: "919222222222",
    facebook: "trainerB",
    instagram: "trainerB.ig",
    email: "trainerB@example.com"
  },
  {
    whatsapp: "919222222222",
    facebook: "trainerB",
    instagram: "trainerB.ig",
    email: "trainerB@example.com"
  },
  {
    whatsapp: "919222222222",
    facebook: "trainerB",
    instagram: "trainerB.ig",
    email: "trainerB@example.com"
  },
  {
    whatsapp: "919222222222",
    facebook: "trainerB",
    instagram: "trainerB.ig",
    email: "trainerB@example.com"
  },
  {
    whatsapp: "919222222222",
    facebook: "trainerB",
    instagram: "trainerB.ig",
    email: "trainerB@example.com"
  },
  {
    whatsapp: "919222222222",
    facebook: "trainerB",
    instagram: "trainerB.ig",
    email: "trainerB@example.com"
  },
  // ... Add for all 14 trainers
  // Make sure you have one entry per equipmentList item
];


function CertifiedTrainers({ darkMode }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [modalIndex, setModalIndex] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("email");
    setShowLogoutModal(false);
    window.location.reload();
  };

  const handleMessageClick = (index) => {
    setModalIndex(index);
  };
  const warningMessageRef = useRef(null);

useEffect(() => {
  const message = "Alert..!!: You may be subject to disciplinary action under relevant sections for sending inappropriate or disrespectful messages to certified trainers. Please maintain professional conduct at all times...";

  const typeWarningMessage = (text, element, speed) => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        element.innerHTML = text.slice(0, i + 1) + '<span class="typing-cursor"></span>';
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
  };

  const warningMessageElement = warningMessageRef.current;
  if (warningMessageElement) {
    warningMessageElement.innerHTML = '';
    typeWarningMessage(message, warningMessageElement, 100);
  }
}, []);


  return (
    <section
      className={`trainer-section ${darkMode ? "dark" : ""}`}
      style={{ minHeight: "100vh" }}
    >
      <div className="hero-container">
        <section className="hero" style={{
    paddingTop: "25px",
    paddingBottom: "15px"
  }}>
          <br /><br /><br />
          <h1 id="S">Certified Trainers</h1>
          <p>Elite professionals to guide your fitness journey.</p>
          
          <form method="POST">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Link to="/contact" className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>
            <i className="fa fa-phone" style={{ fontSize: 25, marginRight: '10px' }}></i>
            <h3 className="orbitron-heading">Contact Owner</h3>
          
          </Link>
          
                </div>
              </form>
              <div className="warning-box" style={{ textAlign: "center", marginTop: "20px" }}>
  <div
    id="warningMessage"
    className="warning-message"
    ref={warningMessageRef}
    style={{
      fontSize: "14px",
      color: darkMode ? "#e7e7e7ff" : "#ffffffff",
      fontWeight: "600",
      fontFamily: "monospace",
    }}
  ></div>
</div>

        </section>
      </div>

      <div
        style={{ backgroundColor: darkMode ? "#3c3c3c" : "#d8d8d8ff" }}
        className={`equipment-page ${darkMode ? 'dark' : ''}`}
      >
        <div className="equipment-grid">
          {equipmentList.map((item, index) => (
            <div className="equipment-card" key={index}>
              <div className="equipment-img-wrapper">
                <img src={item.image} alt={`Equipment ${index}`} className="equipment-img" />
              </div>
              <div className="equipment-text">
                <p style={{paddingBottom:"0px"}}>{item.description}</p>
                <h4 className="equipment-title">{item.title}</h4>
                <button className={`book-btn`} onClick={() => handleMessageClick(index)}>
                  Message{" "}{" "}<i 
  className="fa-solid fa-message"
  style={{
    color: darkMode ? "rgba(27, 27, 27, 0.9)" : 'rgba(58, 58, 58, 0.9)',  // White in dark mode, black in light mode
    marginRight: '8px',
    fontSize: '18px',
    verticalAlign: 'middle'
  }}
></i>

                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Existing user/account block (unchanged) */}
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
            <p style={{ marginBottom: "10px" }}>
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
            <p>Ready to crush your fitness goals? We’ve got you covered.</p>
            <p>
              Already have an account?{" "}
              <Link to="/login?tab=signin" state={{ darkMode, from: "/contact" }} style={{ color: "#007bff" }}>
                Sign In
              </Link>{" "}
              or{" "}
              <Link to="/login?tab=signup" state={{ darkMode, from: "/contact" }} style={{ color: "#007bff" }}>
                Sign Up
              </Link>
              {" "}to get started today!
            </p>
            <div className="admin-login-link" style={{ marginTop: "10px" }}>
              <p>
                Are you an admin? <Link to="/admin-login" className="admin-link">Login here</Link>
              </p>
            </div>
          </>
        )}
      </div>

      <br />

      {/* Logout modal (unchanged) */}
      {showLogoutModal && (
        <div className="logout-modal-overlay">
          <div
            className="logout-modal"
            style={{
              backgroundColor: darkMode ? "#333" : "#fff",
              color: darkMode ? "#fff" : "#000",
            }}
          >
            <div className="top-icon-wrapper">
              <FontAwesomeIcon icon={faXmark} onClick={() => setShowLogoutModal(false)} />
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

      {/* Message Modal */}
      {modalIndex !== null && messageData[modalIndex] && (
        <div className="logout-modal-overlay">
          <div className="logout-modal">
            <div className="top-icon-wrapper" onClick={() => setModalIndex(null)}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
            <h3>Connect with {equipmentList[modalIndex].title}</h3>
            <div className="logout-buttons">
              <button className="icon-btn" onClick={() => window.open(`https://wa.me/${messageData[modalIndex].whatsapp}`, '_blank')}>
                <i className="fa-brands fa-square-whatsapp"></i>
              </button>
              <button className="icon-btn" onClick={() => window.open(`https://m.me/${messageData[modalIndex].facebook}`, '_blank')}>
                <i className="fa-brands fa-square-facebook"></i>
              </button>
              <button className="icon-btn" onClick={() => window.open(`https://www.instagram.com/${messageData[modalIndex].instagram}`, '_blank')}>
                <i className="fa-brands fa-square-instagram"></i>
              </button>
              <button className="icon-btn" onClick={() => window.open(`mailto:${messageData[modalIndex].email}`)}>
                <i className="fa-solid fa-square-envelope"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer (as requested) */}
      <footer
        style={{
          backgroundColor: darkMode ? "#222" : "white",
          color: darkMode ? "#fff" : "black",
          paddingTop: "20px",
          paddingBottom: "0px",
          height: "40px",
          textAlign: "center",
          fontWeight: 600,
        }}
      >
        © 2025 SK Fitness..All rights reserved.
      </footer>
    </section>
  );
}

export default CertifiedTrainers;

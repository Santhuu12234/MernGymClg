// src/pages/FAQs.js
import React, { useState, useEffect } from 'react';
import './FAQs.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';


const faqData = [
  {
    question: "How do I book gym equipment?",
    answer: "Go to the 'Equipment Booking' page, choose the equipment, and select a 2-hour slot between 6 AM and 10 PM."
  },
  {
    question: "Can I book multiple slots per day?",
    answer: "Yes, but only one slot per equipment per day to ensure fair access for everyone."
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer: "Yes. Visit your dashboard and manage your booking at least 1 hour before the session."
  },
  {
    question: "How does QR code scanning work?",
    answer: "On the 'Scan Equipment' page, use your camera to scan the QR code on any machine to view its details."
  },
  {
    question: "What happens if the QR code is invalid?",
    answer: "If the QR code is not found in the database, you’ll see a 'Equipment not available' message. Please notify admin."
  },
  {
    question: "Do I need to install an app for scanning?",
    answer: "No, the scan tool is built into the website. Just use your camera on the scan page."
  },
  {
    question: "Can admins see my bookings?",
    answer: "Yes, but only the admin responsible for your area (pincode) can view and manage your data."
  },
  {
    question: "What if someone uses my booked slot?",
    answer: "Show your booking confirmation from your dashboard. If needed, report the issue to admin immediately."
  },
  {
    question: "How can I view my previous bookings?",
    answer: "Open the 'Booking History' section in your dashboard to see all past bookings."
  },
  {
    question: "How do I know which equipment is available?",
    answer: "Available slots are shown on the booking page. If a slot is taken, it will be marked as unavailable."
  },
  {
    question: "What if I forget to scan the QR code?",
    answer: "You can still manually search for the equipment details or book it if it’s available."
  },
  {
    question: "How do I contact gym support?",
    answer: "Use the 'Contact Us' button in your dashboard or email gymadmin@example.com for help."
  },
  {
    question: "Can I book equipment for someone else?",
    answer: "No. Bookings are linked to your user ID and cannot be transferred to others."
  }
];

const FAQs = ({ darkMode }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
  localStorage.clear();
  navigate("/login");
};


  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode-body' : 'light-mode-body';
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
    return () => {
      document.body.className = '';
      document.body.style.height = '';
    };
  }, [darkMode]);
useEffect(() => {
  document.body.classList.toggle("dark-mode", darkMode);
}, [darkMode]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  return (
    <div className="faq-wrapper">
      <h1 className="faq-title">Gym Help Center - FAQs</h1>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {item.question}
            <span className="faq-icon">{openIndex === index ? '-' : '+'}</span>
          </div>
          <div
            className="faq-answer"
            style={{
              maxHeight: openIndex === index ? '200px' : '0px',
              paddingTop: openIndex === index ? '10px' : '0px',
              opacity: openIndex === index ? 1 : 0
            }}
          >
            {item.answer}
          </div>
        </div>
      ))}
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
                  <p style={{ marginBottom: "10px", fontWeight: "500" }}>
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
                  <p style={{ marginBottom: "10px", fontWeight: "500" }}>
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
      
                  {/* ✅ Admin Login */}
                  <div className="admin-login-link" style={{ marginTop: "10px" }}>
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
    </div>
  );
};

export default FAQs;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BmiCalculator.css";

const bmiCategories = [
  { max: 18.5, label: "Underweight" },
  { max: 24.9, label: "Normal weight" },
  { max: 29.9, label: "Overweight" },
  { max: Infinity, label: "Obesity" },
];

const getBmiCategory = (bmi) =>
  bmiCategories.find((cat) => bmi <= cat.max) || bmiCategories[3];

function BmiCalculator({ darkMode }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState("metric");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState(null);
  const [error, setError] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-body");
    } else {
      document.body.classList.remove("dark-body");
    }
  }, [darkMode]);

  useEffect(() => {
    if (weight && height && !error) {
      let bmiValue;
      if (unit === "metric") {
        const heightM = height / 100;
        bmiValue = weight / (heightM * heightM);
      } else {
        bmiValue = (703 * weight) / (height * height);
      }
      bmiValue = +bmiValue.toFixed(1);
      setBmi(bmiValue);
      setCategory(getBmiCategory(bmiValue));
    } else {
      setBmi(null);
      setCategory(null);
    }
  }, [weight, height, unit, error]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("email") !== null;
    if (!isLoggedIn) {
      setShowLoginModal(true);
    } else {
      const storedName = localStorage.getItem("name");
      if (storedName) setUserName(storedName);
    }
  }, []);

  const validateNumber = (value) => /^\d*\.?\d*$/.test(value);

  const handleWeightChange = (e) => {
    const val = e.target.value;
    if (validateNumber(val)) {
      setWeight(val);
      setError("");
    } else {
      setError("Please enter a valid number for weight");
    }
  };

  const handleHeightChange = (e) => {
    const val = e.target.value;
    if (validateNumber(val)) {
      setHeight(val);
      setError("");
    } else {
      setError("Please enter a valid number for height");
    }
  };

  const toggleUnit = () => {
    if (unit === "metric") {
      if (weight) setWeight((weight * 2.20462).toFixed(1));
      if (height) setHeight((height / 2.54).toFixed(1));
      setUnit("imperial");
    } else {
      if (weight) setWeight((weight / 2.20462).toFixed(1));
      if (height) setHeight((height * 2.54).toFixed(1));
      setUnit("metric");
    }
  };

  const confirmLoginRedirect = () => {
    setShowLoginModal(false);
    navigate("/login", {
      state: {
        from: "/bmicalculator",
        darkMode: darkMode,
      },
    });
  };

  return (
    <div
      className="bmi-page"
      style={{
        "--bg-color": darkMode ? "#222222" : "#f0f0f0",
        "--text-color": darkMode ? "#fff" : "#222",
      }}
    >
      <div
        className="bmi-container"
        style={{
          backgroundColor: darkMode ? "rgba(11, 11, 11, 0.5)" : "#fff",
          boxShadow: darkMode
            ? "0 0 20px 0px rgba(54, 54, 54, 0.5)"
            : "0 0 20px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2 className="bmi-title">BMI Calculator</h2>

        <button
          onClick={toggleUnit}
          className="bmi-toggle-btn"
          style={{
            backgroundColor: darkMode ? "#333" : "#ddd",
            color: darkMode ? "#fff" : "#222",
          }}
        >
          {unit === "metric" ? "Switch to Imperial" : "Switch to Metric"}
        </button>

        <div className="bmi-field">
          <label htmlFor="weight">Weight ({unit === "metric" ? "kg" : "lb"})</label>
          <input
            id="weight"
            type="text"
            value={weight}
            onChange={handleWeightChange}
            placeholder={`Enter weight in ${unit === "metric" ? "kg" : "lb"}`}
            style={{
              background: darkMode ? "#2d2d2d" : "#fff",
              color: darkMode ? "#eee" : "#222",
              border: `2px solid ${darkMode ? "#555" : "#ccc"}`,
            }}
          />
        </div>

        <div className="bmi-field">
          <label htmlFor="height">
            Height ({unit === "metric" ? "cm" : "inches"})
          </label>
          <input
            id="height"
            type="text"
            value={height}
            onChange={handleHeightChange}
            placeholder={`Enter height in ${unit === "metric" ? "cm" : "inches"}`}
            style={{
              background: darkMode ? "#2d2d2d" : "#fff",
              color: darkMode ? "#eee" : "#222",
              border: `2px solid ${darkMode ? "#555" : "#ccc"}`,
            }}
          />
        </div>

        {error && <div className="bmi-error">{error}</div>}

        <div className="bmi-result">
          {bmi && category ? (
            <>
              <div>
                {userName && <span>{userName}, </span>}Your BMI:{" "}
                <strong>{bmi}</strong> — <strong>{category.label}</strong>
              </div>
              <BMIAdvice bmi={bmi} darkMode={darkMode} />
            </>
          ) : (
            <div style={{ opacity: 0.3 }}>Your BMI result will appear here.</div>
          )}
        </div>
      </div>

      {showLoginModal && (
        <div className="logout-modal-overlay">
          <div
            className="logout-modal"
            style={{
              backgroundColor: darkMode ? "#1e1e1e" : "#fff",
              color: darkMode ? "#fff" : "#000",
            }}
          >
            <h3>Please login to access this page.</h3>
            <div className="modal-btns">
              <button onClick={confirmLoginRedirect} className="yes-btn">
                OK
              </button>
              <button onClick={() => setShowLoginModal(false)} className="no-btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const BMIAdvice = ({ bmi, darkMode }) => {
  const color = darkMode ? "#ccc" : "#444";
  const style = {
    marginTop: 8,
    fontSize: "0.9rem",
    fontWeight: "400",
    color,
    lineHeight: 1.4,
  };

  if (bmi < 18.5)
    return <p style={style}>You are underweight. A nutritious diet and professional guidance are recommended.</p>;
  if (bmi < 25)
    return <p style={style}>You have a normal weight. Keep maintaining a healthy lifestyle!</p>;
  if (bmi < 30)
    return <p style={style}>You are overweight. Consider regular physical activity and a balanced diet.</p>;
  return <p style={style}>You are obese. Please consult a healthcare provider for proper support.</p>;
};

export default BmiCalculator;

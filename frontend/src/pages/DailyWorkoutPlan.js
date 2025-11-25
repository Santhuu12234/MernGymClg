import React, { useState, useEffect } from 'react';
import './DailyWorkoutPlan.css';

const getWorkoutPlan = (age, level, goal) => {
  let plan = [];

  if (age < 20) {
    plan = {
      Monday: ['Full Body Stretch', 'Push-Ups', 'Squats'],
      Tuesday: ['Plank', 'Lunges', 'Jump Rope'],
      Wednesday: ['Rest Day'],
      Thursday: ['Burpees', 'Sit-Ups', 'Dumbbell Press'],
      Friday: ['Mountain Climbers', 'Squats', 'Pull-Ups'],
      Saturday: ['HIIT Cardio', 'Push-Ups', 'Crunches'],
      Sunday: ['Rest Day']
    };
  } else if (age <= 40) {
    if (level === 'Beginner' && goal === 'Fat Loss') {
      plan = {
        Monday: ['Walking (30min)', 'Plank'],
        Tuesday: ['HIIT Beginner', 'Leg Raises'],
        Wednesday: ['Rest'],
        Thursday: ['Push-Ups', 'Jumping Jacks'],
        Friday: ['Jogging', 'Mountain Climbers'],
        Saturday: ['Yoga', 'Light Cycling'],
        Sunday: ['Rest']
      };
    } else if (level === 'Intermediate' && goal === 'Strength') {
      plan = {
        Monday: ['Deadlifts', 'Overhead Press'],
        Tuesday: ['Rest'],
        Wednesday: ['Pull-Ups', 'Bench Press'],
        Thursday: ['Barbell Squats', 'Plank'],
        Friday: ['Chin-Ups', 'Incline Press'],
        Saturday: ['Light Jog', 'Stretching'],
        Sunday: ['Rest']
      };
    } else if (goal === 'Muscle Gain') {
      plan = {
        Monday: ['Chest: Bench Press', 'Incline Dumbbell Press'],
        Tuesday: ['Back: Pull-Ups', 'Deadlifts'],
        Wednesday: ['Legs: Squats', 'Leg Press'],
        Thursday: ['Shoulders: Military Press', 'Lateral Raises'],
        Friday: ['Arms: Biceps Curls', 'Tricep Dips'],
        Saturday: ['Cardio or Rest'],
        Sunday: ['Full Body Stretch & Recovery']
      };
    }
  } else {
    plan = {
      Monday: ['Brisk Walk', 'Chair Squats'],
      Tuesday: ['Stretching', 'Wall Push-Ups'],
      Wednesday: ['Rest'],
      Thursday: ['Resistance Band Workouts'],
      Friday: ['Yoga', 'Light Dumbbells'],
      Saturday: ['Rest'],
      Sunday: ['Meditation & Walk']
    };
  }

  return plan;
};

function DailyWorkoutPlan({ darkMode }) {
  const [age, setAge] = useState('');
  const [level, setLevel] = useState('');
  const [goal, setGoal] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [weeklyPlan, setWeeklyPlan] = useState({});

  useEffect(() => {
    if (submitted) {
      setWeeklyPlan(getWorkoutPlan(parseInt(age), level, goal));
    }
  }, [submitted, age, level, goal]);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`workout-wrapper ${darkMode ? 'dark' : 'light'}`}>
      <h1 className="title">Weekly Workout Plan</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              min="10"
              required
            />
          </div>

          <div className="form-row">
            <label>Fitness Level:</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              required
            >
              <option value="">--Choose Level--</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Expert</option>
            </select>
          </div>

          <div className="form-row">
            <label>Goal:</label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              required
            >
              <option value="">--Choose Goal--</option>
              <option>Muscle Gain</option>
              <option>Strength</option>
              <option>Fat Loss</option>
            </select>
          </div>

          <button type="submit">Generate Plan</button>
        </form>
      ) : (
        <>
          <div className="week-plan">
            {Object.keys(weeklyPlan).map((day, index) => (
              <div key={index} className="day-box">
                <h3>{day}</h3>
                <ul>
                  {weeklyPlan[day].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="preferences">
            <p><strong>Preferences:</strong> Want to make changes?</p>
            <button className="reset-btn" onClick={() => setSubmitted(false)}>
              Change Preferences
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default DailyWorkoutPlan;

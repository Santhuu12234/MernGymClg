import React, { useState } from 'react';
import './MealPlans.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function MealPlans({ darkMode }) {
  const [age, setAge] = useState('');
  const [level, setLevel] = useState('');
  const [goal, setGoal] = useState('');
  const [showPlan, setShowPlan] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (age && level && goal) {
      setShowPlan(true);
    }
  };

  const getAgeCategory = (age) => {
    if (age < 18) return 'Teen';
    if (age <= 40) return 'Adult';
    return 'Senior';
  };

  const mealPlans = {
    Beginner: {
      'Lose Weight': {
        Teen: ['Fruit bowl', 'Veg sandwich', 'Soup'],
        Adult: ['Oats + banana', 'Roti + sabzi', 'Soup + veggies'],
        Senior: ['Apple + porridge', 'Khichdi', 'Light curry + roti'],
      },
      'Gain Muscle': {
        Teen: ['Eggs + milk', 'Rice + dal + paneer', 'Salad + curd'],
        Adult: ['3 eggs + toast', 'Chicken + rice', 'Paneer + roti'],
        Senior: ['Dalia + milk', 'Dal + veggies', 'Boiled egg + soup'],
      },
      'Maintain Health': {
        Teen: ['Cheese sandwich', 'Dal + rice', 'Fruits + salad'],
        Adult: ['Fruits + yogurt', 'Dal + rice + veggies', 'Khichdi'],
        Senior: ['Milk + banana', 'Roti + sabzi', 'Oats'],
      },
    },
    Intermediate: {
      'Lose Weight': {
        Teen: ['Green smoothie', 'Grilled veggies', 'Soup'],
        Adult: ['Sprouts + coffee', 'Brown rice + tofu', 'Soup + salad'],
        Senior: ['Banana + nuts', 'Khichdi', 'Steamed veggies'],
      },
      'Gain Muscle': {
        Teen: ['Eggs + peanut butter', 'Paneer + rice', 'Salad + shake'],
        Adult: ['Eggs + toast', 'Chicken + rice', 'Fish + sweet potato'],
        Senior: ['Dalia + milk', 'Lentils + veggies', 'Tofu + salad'],
      },
      'Maintain Health': {
        Teen: ['Fruits + milk', 'Dal + rice', 'Roti + sabzi'],
        Adult: ['Smoothie + nuts', 'Roti + dal', 'Khichdi'],
        Senior: ['Milk + fruits', 'Roti + sabzi', 'Veg soup'],
      },
    },
    Expert: {
      'Lose Weight': {
        Teen: ['Shake + oats', 'Quinoa + veggies', 'Eggs + cucumber'],
        Adult: ['Protein shake', 'Chicken + quinoa', 'Eggs + soup'],
        Senior: ['Porridge', 'Steamed tofu', 'Light curry + veggies'],
      },
      'Gain Muscle': {
        Teen: ['Egg whites', 'Chicken + rice', 'Salad + paneer'],
        Adult: ['5 egg whites', 'Chicken breast + rice', 'Paneer + chapati'],
        Senior: ['Dalia + dry fruits', 'Boiled egg + rice', 'Soup + curd'],
      },
      'Maintain Health': {
        Teen: ['Milk + sandwich', 'Roti + sabzi', 'Fruits + curd'],
        Adult: ['Muesli', 'Millet roti + dal', 'Veg curry'],
        Senior: ['Rice + dal', 'Steamed veggies', 'Khichdi + curd'],
      },
    },
  };

  const renderPlan = () => {
    const category = getAgeCategory(parseInt(age));
    const plan = mealPlans[level]?.[goal]?.[category];
    return plan ? (
      <ul className="meal-list">
        {plan.map((item, idx) => (
          <li key={idx}>
            <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
            {item}
          </li>
        ))}
      </ul>
    ) : (
      <p className="no-plan">No plan found for the selected combination.</p>
    );
  };

  return (
    <div className={`mealplans-wrapper ${darkMode ? 'dark' : ''}`}>
      <form className="mealplans-form" onSubmit={handleSubmit}>
        <h1>
          <FontAwesomeIcon icon={faUtensils} /> Meal & Nutrition Plans
        </h1>

        <label>
          Age:
          <input
            type="number"
            value={age}
            min="10"
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </label>

        <div className="select-group">
          <label>
            Fitness Level:
            <select value={level} onChange={(e) => setLevel(e.target.value)} required>
              <option value="">--Choose--</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Expert</option>
            </select>
          </label>

          <label>
            Goal:
            <select value={goal} onChange={(e) => setGoal(e.target.value)} required>
              <option value="">--Choose--</option>
              <option>Lose Weight</option>
              <option>Gain Muscle</option>
              <option>Maintain Health</option>
            </select>
          </label>
        </div>

        <button type="submit">Get Plan</button>

        <div className="result-space">
          {showPlan && (
            <>
              <h2>Your Plan ({getAgeCategory(parseInt(age))} - {level} - {goal})</h2>
              {renderPlan()}
            </>
          )}
        </div>
      </form>
    </div>
  );
}

export default MealPlans;

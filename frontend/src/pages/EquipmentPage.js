import React from 'react';
import './EquipmentPage.css';

import AdjustableGymBench from './images/AdjustableGymBench.jpg';
import CableMachine from './images/CableMachine.jpg';
import EllipticalTrainer from './images/EllipticalTrainer.jpg';
import HackSquatMachine from './images/HackSquatMachine.jpg';
import LegPressMachine from './images/LegPressMachine.jpg';
import PecDeckMachine from './images/PecDeckMachine.jpg';
import PullUpBarStand from './images/PullUpBarStand.jpg';
import PulldownMachine from './images/PulldownMachine.jpg';
import RealisticRowingMachine from './images/RealisticRowingMachine.jpg';
import ResistanceBands from './images/ResistanceBands.jpg';
import SeatedChestPressMachine from './images/SeatedChestPressMachine.jpg';
import SeatedRowMachine from './images/SeatedRowMachine.jpg';
import StairClimberMachine from './images/StairClimberMachine.jpg';
import StationaryExerciseBike from './images/StationaryExerciseBike.jpg';
import T_BarRowMachine from './images/T_BarRowMachine.jpg';
import Treadmill from './images/Treadmill.jpg';

const equipmentList = [
  {
    title: 'Adjustable Gym Bench',
    description: 'Great for incline, flat, and decline exercises targeting chest, shoulders, and triceps effectively.',
    image: AdjustableGymBench,
  },
  {
    title: 'Cable Machine',
    description: 'Offers countless variations to isolate or compound muscles with adjustable height and resistance.',
    image: CableMachine,
  },
  {
    title: 'Elliptical Trainer',
    description: 'Low-impact cardio tool that burns calories while improving endurance and joint mobility smoothly.',
    image: EllipticalTrainer,
  },
  {
    title: 'Hack Squat Machine',
    description: 'Builds powerful quads and glutes with controlled motion, reducing stress on your spine.',
    image: HackSquatMachine,
  },
  {
    title: 'Leg Press Machine',
    description: 'Strengthens hamstrings, quads, and glutes while offering back support during heavy resistance.',
    image: LegPressMachine,
  },
  {
    title: 'Pec Deck Machine',
    description: 'Targets chest muscles effectively while supporting arms and reducing shoulder joint strain safely.',
    image: PecDeckMachine,
  },
  {
    title: 'Pull-Up Bar Stand',
    description: 'Simple bodyweight tool for increasing back, biceps, and grip strength without extra weights.',
    image: PullUpBarStand,
  },
  {
    title: 'Pulldown Machine',
    description: 'Develops lats, biceps, and upper back strength with adjustable weight and controlled motion.',
    image: PulldownMachine,
  },
  {
    title: 'Rowing Machine',
    description: 'Full-body cardio workout combining leg drive, core engagement, and upper-body pulling action.',
    image: RealisticRowingMachine,
  },
  {
    title: 'Resistance Bands',
    description: 'Portable training tools that help with stretching, rehab, strength training, and warm-ups easily.',
    image: ResistanceBands,
  },
  {
    title: 'Seated Chest Press Machine',
    description: 'Replicates bench press motion, safely strengthening chest, triceps, and shoulders under control.',
    image: SeatedChestPressMachine,
  },
  {
    title: 'Seated Row Machine',
    description: 'Targets mid-back and arms to improve posture, balance, and pulling strength over time.',
    image: SeatedRowMachine,
  },
  {
    title: 'Stair Climber Machine',
    description: 'Excellent cardio and leg-toning tool that simulates stair climbing for high-calorie burn.',
    image: StairClimberMachine,
  },
  {
    title: 'Exercise Bike',
    description: 'Low-impact cycling tool that enhances stamina, burns fat, and protects joints from strain.',
    image: StationaryExerciseBike,
  },
  {
    title: 'T-Bar Row Machine',
    description: 'Targets back thickness and strength with supported torso and heavy compound movement range.',
    image: T_BarRowMachine,
  },
  {
    title: 'Treadmill',
    description: 'Versatile cardio machine for walking, jogging, or running with customizable incline and speed.',
    image: Treadmill,
  },
];

function EquipmentPage({ darkMode }) {
  return (
    <div className={`equipment-page ${darkMode ? 'dark' : ''}`}>
      <h1>State-Of-The-Art Gym Equipment</h1>
      <p className="intro">
        Discover our advanced fitness machines — each crafted to boost results and elevate your workout routine.
      </p>

      <div className="equipment-grid">
        {equipmentList.map((item, index) => (
          <div className="equipment-card" key={index}>
            <div className="equipment-img-wrapper">
              <img src={item.image} alt={`Equipment ${index}`} className="equipment-img" />
            </div>
            <div className="equipment-text">
  <p>{item.description}</p>
  <h4 className="equipment-title">{item.title}</h4>
</div>


          </div>
        ))}
      </div>
    </div>
  );
}

export default EquipmentPage;

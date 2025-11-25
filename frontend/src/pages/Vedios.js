import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Vedios.css';

const videoData = {
  Beginner: {
    title: "Beginner Gym Workout | Step-by-Step",
    iframe: `<iframe 
      width="100%" 
      height="280" 
      src="https://www.youtube.com/embed/ziCRIWMOjGo?controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen>
    </iframe>`
  },
  Intermediate: {
    title: "Intermediate Gym Machine Workout",
    iframe: `<iframe width="100%" height="280" src="https://www.youtube.com/embed/7JLl35hliZA?si=ZhfdDdM8aXA1qvfH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  Expert: {
    title: "Pro Gym Workout | Advanced Full Body Routine",
    iframe: `<iframe 
      width="100%" 
      height="280" 
      src="https://www.youtube.com/embed/fYvtLAHT-cE?si=7kL3Z9EeuH5Kqz7I&controls=1" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen>
    </iframe>`
  }
};

const Vedios = ({ darkMode }) => {
  const [selectedLevel, setSelectedLevel] = useState('Intermediate');
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = (e) => {
      e.preventDefault();
      navigate('/', { replace: true });
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);

  const currentVideo = videoData[selectedLevel];

  return (
    <div className={`vedios-page ${darkMode ? 'dark' : 'light'}`}>
      <h1 className="vedios-title">Gym success formula</h1>

      <div className="vedios-filter-bar">
        <ul className="vedios-filter-list">
          {Object.keys(videoData).map((level) => (
            <li
              key={level}
              className={`filter-option ${selectedLevel === level ? 'active' : ''}`}
              onClick={() => setSelectedLevel(level)}
            >
              {level}
            </li>
          ))}
        </ul>
      </div>

      <h2 className="vedios-level-heading">{selectedLevel} Level</h2>
      <div className="vedios-grid">
        <div className="vedios-card">
          {currentVideo.iframe ? (
            <div
              className="vedios-video"
              dangerouslySetInnerHTML={{ __html: currentVideo.iframe }}
            />
          ) : (
            <video
              className="vedios-video"
              src={currentVideo.src}
              controls
              preload="auto"
            />
          )}
          <p className="vedios-caption">{currentVideo.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Vedios;

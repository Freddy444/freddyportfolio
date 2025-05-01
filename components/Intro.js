import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Intro.css';

const Intro = ({ onEnter }) => {
  const navigate = useNavigate();
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleEnter = () => {
    onEnter();
    navigate('/landing');
  };

  const handleConnect = () => {
    window.open('https://www.linkedin.com/in/freddy-fabian-784395223/', '_blank');
  };

  const handleAbout = () => {
    onEnter();
    navigate('/about');
  };

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="intro-elevated-container">
      <div className="intro-content">
      <motion.h1
        className="intro-elevated-name"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Freddy <br /> Fabian
      </motion.h1>

      <motion.p
        className="intro-elevated-subtitle"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Creative Developer
      </motion.p>

      <motion.div
        className="intro-elevated-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.button className="intro-elevated-button" onClick={handleEnter}>
          Work
        </motion.button>
        <motion.button className="intro-elevated-button" onClick={handleAbout}>
          About
        </motion.button>
        <motion.button className="intro-elevated-button" onClick={handleConnect}>
          Connect
        </motion.button>
      </motion.div>
      </div>
      <div
        className="custom-cursor"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />
    </div>
  );
};

export default Intro;
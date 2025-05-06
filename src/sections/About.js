import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import HamburgerMenu from '../components/HamburgerMenu';

const About = () => {
  const navigate = useNavigate();
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="landing-container">
      {/* Top nav */}
      <div className="top-nav-buttons">
        
      {/* Desktop header */}
      <div className="desktop-only">
        <h2 className="landing-name-clickable" onClick={() => handleNavigate('/')}>
          FREDDY FABIAN
        </h2>
        <div className="nav-links">
          <span onClick={() => handleNavigate('/landing')}>Work</span>
          <span onClick={() => handleNavigate('/about')} className="active">About</span>
          <span onClick={() => window.open('https://www.linkedin.com/in/freddy-fabian-784395223/', '_blank')}>
            Connect
          </span>
        </div>
      </div>

      {/* Mobile header */}
      <div className="mobile-header mobile-only">
        <HamburgerMenu />
        <h2 className="mobile-name" onClick={() => handleNavigate('/')}>
          FREDDY FABIAN
        </h2>
      </div>
    </div>

      {/* Main content */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-left">
            <div className="about-image-container">
              <img src={require('./mefreddy.png')} alt="Freddy Fabian" className="about-image" />
            </div>
          </div>

          <div className="about-right">
            <h2 className="about-title">About Me</h2>
            <p className="about-text">
              I’m a multidisciplinary engineer building interactive experiences at the intersection of code and design. My work explores how visual art and technology can be tools for creative control and exploration.
            </p>
            <p className="about-text">
              In projects like Link, I combine image processing and node-based tools to make user-driven drawing more intuitive. As a former Lead Backend Developer for OurCampus, I merged full-stack engineering with interface thinking to make campus life smoother.
            </p>
            <p className="about-text">
              I’m passionate about building digital environments that are expressive, functional, and a little weird in the best way.
            </p>

            <div className="contact-info">
              <h3>Contact</h3>
              <p>Phone: (860) 879-8609</p>
              <p>Email: <a href="mailto:ffabian@wesleyan.edu">ffabian@wesleyan.edu</a></p>
              <p><a href="https://www.linkedin.com/in/freddy-fabian-784395223/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Cursor */}
      {window.innerWidth > 768 && (
        <div
          className="custom-cursor"
          style={{ left: cursorPos.x, top: cursorPos.y }}
        />
      )}
    </div>
  );
};

export default About;

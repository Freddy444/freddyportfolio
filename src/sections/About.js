import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <section id="about" className="about-section">
      
      <h2 className="landing-name-clickable" onClick={() => handleNavigate('/')}>
        FREDDY FABIAN
      </h2>

      <div className="desktop-links desktop-only">
        <button
          className="nav-button"
          onClick={() => handleNavigate('/landing')}
        >
          Work
        </button>
        <button
          className="nav-button active" // because you're on About
          onClick={() => handleNavigate('/about')}
        >
          About
        </button>
        <button
          className="nav-button"
          onClick={() => window.open('https://www.linkedin.com/in/freddy-fabian-784395223/', '_blank')}
        >
          Connect
        </button>
      </div>

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
  );
};

export default About;

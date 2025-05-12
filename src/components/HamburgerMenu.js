import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <div className="hamburger-wrapper">
      <div className="hamburger-icon" onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </div>
      {open && (
        <div className="hamburger-dropdown">
        <button
          className={currentPath === '/landing' ? 'active' : ''}
          onClick={() => { navigate('/landing'); closeMenu(); }}
        >
          Work
        </button>
        <button
          className={currentPath === '/about' ? 'active' : ''}
          onClick={() => { navigate('/about'); closeMenu(); }}
        >
          About
        </button>
        <button
          onClick={() => { window.open('https://www.linkedin.com/in/freddy-fabian-784395223/', '_blank'); closeMenu(); }}
        >
          Connect
        </button>
      </div>      
      )}
    </div>
  );
};

export default HamburgerMenu;

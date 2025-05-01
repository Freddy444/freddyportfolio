import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <div className="hamburger-wrapper">
      <div className="hamburger-icon" onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </div>
      {open && (
        <div className="hamburger-dropdown">
          <button onClick={() => { navigate('/landing'); closeMenu(); }}>Work</button>
          <button onClick={() => { navigate('/about'); closeMenu(); }}>About</button>
          <button onClick={() => { window.open('https://www.linkedin.com/in/freddy-fabian-784395223/', '_blank'); closeMenu(); }}>Connect</button>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;

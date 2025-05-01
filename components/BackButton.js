// BackButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './BackButton.css';

const BackButton = ({ text = "Back" }) => {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate('/')}>
      <ArrowLeft size={18} style={{ marginRight: '8px' }} />
      {text}
    </button>
  );
};

export default BackButton;

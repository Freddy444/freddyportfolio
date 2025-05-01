import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Intro from './components/Intro';
import Landing from './sections/Landing';
import About from './sections/About';
import ProjectPage from './sections/ProjectPage';  // Create a component for individual project pages
import './App.css';

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

const AppRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    if (!hasNavigated && location.pathname !== '/') {
      navigate('/');
    }
  }, [location, navigate, hasNavigated]);

  return (
    <Routes>
      <Route path="/" element={<Intro onEnter={() => setHasNavigated(true)} />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/project/:projectId" element={<ProjectPage />} />
    </Routes>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ project, isActive }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = project.images;

  // Reset to the first image whenever the card becomes active
  useEffect(() => {
    if (isActive) {
      setCurrentIndex(0);
    }
  }, [isActive]);

  // Auto-slide images every 1.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3>{project.title}</h3>
      <div className="slideshow-wrapper">
        <img
          src={images[currentIndex]}
          alt={`${project.title} ${currentIndex + 1}`}
          className="project-image"
        />
        <div className="slideshow-dots">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
      <p className="project-type"><strong>Type:</strong> {project.type}</p>
      <p className="project-tools"><strong>Tools:</strong> {project.tools}</p>
    </motion.div>
  );
};

export default ProjectCard;

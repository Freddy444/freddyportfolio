import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ project, isActive, index }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = project.images;

  const isMobile = window.innerWidth < 768;
  const shouldNudge = isMobile && index === 0;

  useEffect(() => {
    if (isActive) setCurrentIndex(0);
  }, [isActive]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      className="project-card"
      initial={shouldNudge ? { x: 0 } : { opacity: 0, y: 50 }}
      animate={shouldNudge ? { x: [0, -92, 12, -6, 0] } : { opacity: 1, y: 0 }}
      transition={shouldNudge 
        ? { duration: 1.4, delay: 1, ease: 'easeInOut' } 
        : { duration: 0.9 }
      }
      viewport={{ once: true }}
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

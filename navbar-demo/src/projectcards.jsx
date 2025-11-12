import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const ProjectCard = ({ id, activeId, setActiveId, imageSrc, title, description, altTag }) => {
  const [isMobile, setIsMobile] = useState(false);
  const isActive = activeId === id;

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setActiveId(activeId === id ? null : id);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <Card
      className={`project-card ${isActive ? 'active' : ''}`}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${title}`}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
    >
      {/* Image Area */}
      <div className="project-card-image-container">
        <img
          src={imageSrc}
          alt={altTag}
          className="project-card-image"
          loading="lazy"
        />

        {/* Description Overlay with Title */}
        <div className="description-overlay">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Card>
  );
};

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
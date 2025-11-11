import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

// Props: { imageSrc, title, description, altTag }

const ProjectCard = ({ imageSrc, title, description, altTag }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const handleCardClick = () => {
    if (window.innerWidth < 1024) {
      // On small screens, toggle the description overlay
      setIsDescriptionVisible((v) => !v);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick();
    }
  };

  return (
    <Card
      className="project-card"
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${title}`}
      onMouseEnter={() => {
        if (window.innerWidth >= 1024) {
          setIsDescriptionVisible(true);
        }
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 1024) {
          setIsDescriptionVisible(false);
        }
      }}
    >
      {/* Image Area */}
      <div className="project-card-image-container">
        <img
          src={imageSrc}
          alt={altTag}
          className="project-card-image"
          loading="lazy"
        />

        {/* Title Bar Overlay */}
        <div className="title-overlay">
          <h3>{title}</h3>
        </div>

        {/* Description Overlay */}
        <div
          className={`description-overlay ${
            isDescriptionVisible
              ? 'visible'
              : ''
          }`}
        >
          <div className="text-center">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;

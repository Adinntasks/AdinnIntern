import React from 'react';
import './projects.css';

const ProjectCard = ({
  id,
  activeId,
  setActiveId,
  imageSrc,
  title,
  description,
  altTag,
  notchRadius = 40
}) => {
  const isActive = activeId === id;
  const arrowSize = notchRadius * 0.6; // Slightly larger icon since container is transparent

  const handleInteraction = (e) => {
    // Only trigger click logic on screens smaller than 1024px
    if (window.innerWidth < 1024) {
      e.stopPropagation();
      const newActiveId = activeId === id ? null : id;
      setActiveId(newActiveId);
    }
  };

  return (
    <div 
      className={`project-card ${isActive ? 'active' : ''}`}
      onClick={handleInteraction} // Allow clicking anywhere on card for mobile friendliness
    >
      {/* Image Area */}
      <div className="project-card-image-container">
        <img
          src={imageSrc}
          alt={altTag}
          className="project-card-image"
          loading="lazy"
        />

        {/* Description Overlay */}
        <div className={`description-overlay ${isActive ? 'active' : ''}`}>
          
          {/* Chevron / Toggle Area 
              Attached to the top of the overlay via negative margin/top 
          */}
          <div
            className="card-arrow-container"
            role="button"
            aria-label={isActive ? "Close details" : "Show details"}
            style={{
              width: `${notchRadius * 2}px`, 
              height: `${notchRadius}px`,
              top: `-${notchRadius * 0.8}px`, // Pull it up
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <div
              className="card-arrow"
              style={{
                width: `${arrowSize}px`,
                height: `${arrowSize}px`,
              }}
            />
          </div>

          {/* Text Content */}
          <div className="overlay-content">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
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
  notchRadius = 50
}) => {
  const isActive = activeId === id;
  const arrowSize = notchRadius * 0.6;

  const handleArrowClick = (e) => {
    e.stopPropagation();
    const newActiveId = activeId === id ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <div className={`project-card ${isActive ? 'active' : ''}`}>
      {/* Image Area */}
      <div className="project-card-image-container">
        <img
          src={imageSrc}
          alt={altTag}
          className="project-card-image"
          loading="lazy"
        />

        {/* Description Overlay */}
        <div className="description-overlay">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>

      {/* Arrow embedded in notch */}
      <div
        className="card-arrow-container"
        onClick={handleArrowClick}
        role="button"
        aria-label="Show details"
        style={{
          width: `${notchRadius * 2}px`,
          height: `${notchRadius}px`,
          left: `calc(50% - ${notchRadius}px)`,
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
    </div>
  );
};

export default ProjectCard;


import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const ProjectCard = ({ id, activeId, setActiveId, imageSrc, title, description, altTag }) => {
  const isActive = activeId === id;

  const handleArrowClick = (e) => {
    console.log('Arrow clicked');
    e.stopPropagation(); // prevent card click from firing
    const newActiveId = activeId === id ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <Card
      className={`project-card ${isActive ? 'active' : ''}`}
    >
      {/* Image Area */}
      <div className="project-card-image-container">
        <img
          src={imageSrc}
          alt={altTag}
          className="project-card-image"
          loading="lazy"
          onClick={(e) => { console.log('Image clicked'); e.stopPropagation(); }}
        />

        {/* Description Overlay with Title */}
        <div className="description-overlay">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div
          className="card-arrow-container"
          onClick={handleArrowClick}
          role="button"
          aria-label="Show details"
      >
          <div className="card-arrow"></div>
      </div>
    </Card>
  );
};

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;


import React from 'react';
import { Card } from '@/components/ui/card';

// Props: { imageSrc, title, description, altTag }

const ProjectCard = ({ imageSrc, title, description, altTag }) => {
  const scale = 1 + description.length / 200; // Dynamic scale based on description length

  return (
    <Card
      className="project-card"
      style={{ '--scale': scale }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${title}`}
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
        <div className="description-overlay">
          <div className="text-center">
            <p>{description}</p>
            <p className="explore-text">Explore vehicle specs →</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;

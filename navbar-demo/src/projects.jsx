import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './projectcards.jsx';

import './projects.css';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  const projects = [
    {
      id: 1,
      imageSrc: './images/proj1.png',
      title: 'Stage Setup Roadshow',
      description: 'A comprehensive stage setup designed for maximum audience engagement and brand visibility.',
      altTag: 'stage setup roadshow',
    },
    {
      id: 2,
      imageSrc: './images/proj2.png',
      title: 'Interactive Roadshow Shell',
      description: 'An immersive interactive experience shell that brings products to life through engagement.',
      altTag: 'interactive roadshow shell',
    },
    {
      id: 3,
      imageSrc: './images/proj3.png',
      title: 'Product Display Roadshow',
      description: 'Strategic product display solutions that highlight key features and drive customer interest.',
      altTag: 'product display roadshow',
    },
    {
      id: 4,
      imageSrc: './images/proj4.png',
      title: 'Promotional Roadshow Van',
      description: 'Mobile promotional solution bringing brand experiences directly to target audiences.',
      altTag: 'promotional roadshow van',
    },
    {
      id: 5,
      imageSrc: './images/proj5.png',
      title: 'Experiential Roadshow Setup',
      description: 'Complete experiential setup creating memorable brand interactions and lasting impressions.',
      altTag: 'experiential roadshow setup',
    },
    {
      id: 6,
      imageSrc: './images/proj6.png',
      title: 'Interactive Booth Environment',
      description: 'Dynamic booth environment designed for optimal visitor flow and engagement opportunities.',
      altTag: 'interactive booth environment',
    },
  ];

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        {
          scale: 0.8,
          opacity: 0,
          y: 30,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
          },
        }
      );
    }

    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.project-card');
      gsap.fromTo(
        cards,
        {
          y: 80,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <div>
      {/* Heading */}
      <div ref={headingRef} className="projects-heading">
        <div className="projects-heading-title">
          <h2>Projects</h2>
        </div>
      </div>

      {/* Project Grid */}
      <div
        ref={cardsRef}
        className="project-grid"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            altTag={project.altTag}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;

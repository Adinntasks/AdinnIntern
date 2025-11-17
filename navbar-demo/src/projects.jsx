import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './projectcards.jsx';

import './projects.css';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef(null);
  const [activeId, setActiveId] = useState(null);

  // Removed global click handler - using backdrop instead

  const projects = [
    {
      id: 1,
      imageSrc: './images/proj1.png',
      title: 'Stage Setup Roadshow',
      description: 'Our roadshow trucks are designed to take your brand directly to your audiece. With vibrant display panels and eye-catching designs, they create instant visibility wherever they go. A perfect way to turn everyday spaces into powerful brand touchpoints.',
      altTag: 'stage setup roadshow',
    },
    {
      id: 2,
      imageSrc: './images/proj2.png',
      title: 'Interactive Roadshow Shell',
      description: 'Bring energy and excitement to your campaigns with dynamic stage roadshows. Equipped with glowing screens, banners, and lighting, these setups transform outdoor spaces into live brand experiences. An engaging way to connect with crowds and leave a lasting impression.',
      altTag: 'interactive roadshow shell',
    },
    {
      id: 3,
      imageSrc: './images/proj3.png',
      title: 'Product Display Roadshow',
      description: 'Step into an interactive brand space with our custom roadshow stalls. Designed with counters, banners, and digital displays, these booths encourage people to explore and engage. A creative platform that blends interaction with brand storytelling.',
      altTag: 'product display roadshow',
    },
    {
      id: 4,
      imageSrc: './images/proj4.png',
      title: 'Promotional Roadshow Van',
      description: 'Showcase your products in style with open display roadshow vehicles. From launches to live demos, these mobile showcases highlight your offerings in a professional way. A smart approach to capture attention and spark curiosity on the move.',
      altTag: 'promotional roadshow van',
    },
    {
      id: 5,
      imageSrc: './images/proj5.png',
      title: 'Experiential Roadshow Setup',
      description: 'Take your brand anywhere with compact promotional vans that are flexible and creative. Designed with vibrant graphics and digital screens, they deliver strong visibility even in tight spaces. A mobile solution that combines convenience with high impact.',
      altTag: 'experiential roadshow setup',
    },
    {
      id: 6,
      imageSrc: './images/proj6.png',
      title: 'Interactive Booth Environment',
      description: 'Turn campaigns into memorable experiences with interactive experiential setups. Featuring activity zones, product demos, and live engagement spaces, they invite people to connect with your brand in a personal way. A perfect blend of fun, interaction, and brand recall.',
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

      {/* Click overlay to close active cards */}
      {activeId && (
        <div
          className="project-overlay-backdrop"
          onClick={() => setActiveId(null)}
        />
      )}

      {/* Project Grid */}
      <div
        ref={cardsRef}
        className="project-grid"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            activeId={activeId}
            setActiveId={setActiveId}
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

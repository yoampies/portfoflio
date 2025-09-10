import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../assets/constants';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after a short delay to trigger the animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden mx-auto">
      <Navbar />
      <div className="flex h-full grow flex-col">
        <main className="flex-1 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold leading-tight text-[var(--text-primary)] md:text-5xl">My Creative Work</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">A selection of my best work, showcasing my skills and experience in frontend development.</p>
            </div>
            <div className="flex justify-center mx-10">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {projects.map((p, index) => (
                  <ProjectCard
                    key={p.id}
                    title={p.title}
                    description={p.description}
                    imgURL={p.imgURL}
                    link={`/projects/${p.id}`}
                    // Pass a prop to conditionally apply animation classes
                    animationDelay={index * 0.1} // Stagger animation
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Projects;
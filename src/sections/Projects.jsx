import React, { useState, useEffect } from 'react'; // useState for managing component state, useEffect for side effects
import Navbar from '../components/Navbar'; // Import the Navbar component
import ProjectCard from '../components/ProjectCard'; // Import the ProjectCard component
import { projects } from '../assets/constants'; // Import the projects data from constants

// Define the Projects functional component
function Projects() {
  // State to control the visibility of project cards for animation purposes
  const [isVisible, setIsVisible] = useState(false);

  // useEffect hook to manage the visibility state and trigger animations
  useEffect(() => {
    // Set isVisible to true after a short delay to trigger the animation
    const timer = setTimeout(() => {
      setIsVisible(true); // Set state to true to make cards visible
    }, 100); // A small delay (100 milliseconds) to ensure the component is mounted before animation

    // Cleanup function to clear the timer if the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  // Return the JSX structure for the Projects page
  return (
    // Main container div with relative positioning, full size, and hidden overflow
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden mx-auto">
      {/* Render the Navbar component */}
      <Navbar />
      {/* Inner container for main content, allows content to grow */}
      <div className="flex h-full grow flex-col">
        {/* Main content area */}
        <main className="flex-1 px-4 py-12 sm:px-6 lg:px-8"> {/* Padded content area */}
          {/* Container for centering content and setting max width */}
          <div className="mx-auto max-w-7xl">
            {/* Section for the page title and description */}
            <div className="mb-1 text-center">
              {/* Page title */}
              <h2 className="text-4xl font-bold leading-tight text-[var(--text-primary)] md:text-5xl">My Creative Work</h2>
              {/* Page description */}
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">A selection of my best work, showcasing my skills and experience in frontend development. For a better experience view these models on a laptop or desktop devide, since the mobile versions are still in development.</p>
            </div>
            {/* Container for centering the project cards */}
            <div className="flex justify-center mx-10">
              {/* Grid layout for project cards */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Map over the projects array to render a ProjectCard for each project */}
                {projects.map((p, index) => (
                  <ProjectCard
                    key={p.id} // Unique key for each project card
                    title={p.title} // Pass the project title as a prop
                    description={p.description} // Pass the project description as a prop
                    imgURL={p.imgURL} // Pass the project image URL as a prop
                    link={`/projects/${p.id}`} // Construct the link to the project details page
                    // Pass a prop to conditionally apply animation classes
                    animationDelay={index * 0.1} // Stagger animation based on index
                    isVisible={isVisible} // Pass the visibility state to control animation
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

// Export the Projects component as the default export
export default Projects;
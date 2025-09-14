// Import necessary React hooks and components
import React from 'react'; // Standard React import
import { Link } from 'react-router-dom'; // For creating navigation links
import Navbar from '../components/Navbar'; // Importing the Navbar component
import SkillCard from '../components/SkillCard'; // Importing the SkillCard component to display technologies
import { useParams } from 'react-router-dom'; // Hook to access URL parameters
import { projects } from '../assets/constants'; // Importing project data, likely an array of project objects

// Define the ProjectDetails functional component
function ProjectDetails() {

  // Get the 'projectID' from the URL parameters. This ID is used to find the specific project.
  const {projectID} = useParams()
  
  // Find the project object from the 'projects' array that matches the 'projectID'.
  // The projectID from the URL is a string, so we convert the project's ID to a string for comparison.
  const project = projects.find((p) => (
    p.id.toString() === projectID
  ))
  
  // Render the component's JSX structure
  return (
    // Main container for the page, setting full height, flex layout, and preventing horizontal overflow.
    // 'group/design-root' is likely for advanced styling or theming.
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      {/* Container for layout, ensuring content stretches and grows. */}
      <div className="layout-container flex h-full grow flex-col">
        {/* Render the Navbar component at the top */}
        <Navbar />
        {/* Main content area for the project details */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
          {/* Centered container for project details with a maximum width */}
          <div className="max-w-5xl mx-auto">
            {/* Section for the project's hero image and title */}
            <div
              className="w-full h-[500px] bg-cover bg-center rounded-2xl shadow-xl overflow-hidden mb-12" // Styling for the image container
              style={{
                // Sets the background image with a gradient overlay for better text readability
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 40%), url(${project.imgURL})`,
              }}
            >
              {/* Content div to align the project title at the bottom of the image */}
              <div className="flex h-full items-end p-8">
                {/* Display the project title with styling */}
                <h1 className="text-white text-4xl font-bold drop-shadow-md">Project: {project.title}</h1>
              </div>
            </div>
            {/* Section for the project's overview */}
            <section className="mb-12">
              {/* Section title */}
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Overview</h2>
              {/* Display the detailed description of the project */}
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                {project.longDescription}
              </p>
            </section>
            {/* Section for the technologies used */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">Technologies Used</h2>
              {/* Grid layout to display SkillCards */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Map over the project's techStack to render a SkillCard for each technology */}
                {Object.keys(project.techStack).map((tech) => (
                  <SkillCard key={tech} title={tech}/>
                ))}
              </div>
            </section>
            {/* Section for action buttons (Live Demo, GitHub) */}
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              {/* Button for Live Demo - styled with primary color */}
              <button className="flex min-w-[180px] items-center justify-center rounded-full h-14 px-8 bg-[var(--primary-color)] text-[var(--text-primary)] text-lg font-bold tracking-wide shadow-lg hover:bg-[var(--accent-color)] hover:-translate-y-1 transition-all duration-300 ease-in-out">
                <span>Live Demo</span>
              </button>
              {/* Button for GitHub Repository - styled with transparent background and border */}
              <button className="flex min-w-[180px] items-center justify-center rounded-full h-14 px-8 bg-transparent border-2 border-[var(--primary-color)] text-[var(--primary-color)] text-lg font-bold tracking-wide hover:bg-[var(--primary-color)] hover:text-white transition-colors duration-300 ease-in-out">
                <span>GitHub Repository</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

// Export the ProjectDetails component as the default export
export default ProjectDetails
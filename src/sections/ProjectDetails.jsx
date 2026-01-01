// Import necessary React hooks and components
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
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Overview</h2>
              
              <div className="space-y-4"> {/* Añade espacio entre párrafos */}
                {project.longDescription.map((paragraph, index) => (
                  <p 
                    key={index} 
                    className="text-lg text-[var(--text-secondary)] leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
            {/* Section for the technologies used */}
            <section className="mb-12">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">Technical Stack & Expertise</h2>

            {Array.isArray(project.techStack) ? (
              // RENDERIZADO PARA NIVEL SENIOR (Proyecto 4)
              <div className="space-y-10">
                {project.techStack.map((cat, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-semibold text-[#13ecc8] mb-4 border-l-4 border-[#13ecc8] pl-4">
                      {cat.category}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {cat.items.map((item, itemIdx) => (
                        <SkillCard 
                          key={itemIdx} 
                          title={item.name} 
                          icon={item.icon} 
                          description={item.description} 
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // RENDERIZADO SIMPLE (Proyectos 1-3)
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Object.keys(project.techStack).map((tech) => (
                  <SkillCard 
                    key={tech} 
                    title={tech} 
                    icon={project.techStack[tech]} 
                  />
                ))}
              </div>
            )}
          </section>
            {/* Section for action buttons (Live Demo, GitHub) */}
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              {/* Button for Live Demo - styled with primary color */}
              <a className="flex min-w-[180px] items-center justify-center rounded-full h-14 px-8 bg-[var(--primary-color)] text-[var(--text-primary)] text-lg font-bold tracking-wide shadow-lg hover:bg-[var(--accent-color)] hover:-translate-y-1 transition-all duration-300 ease-in-out"
                 href={project.demoURL}
                 target='_blank'
                 rel='noopener noreferrer'>
                <span>Live Demo</span>
              </a>
              {/* Button for GitHub Repository - styled with transparent background and border */}
              <a className="flex min-w-[180px] items-center justify-center rounded-full h-14 px-8 bg-transparent border-2 border-[var(--primary-color)] text-[var(--primary-color)] text-lg font-bold tracking-wide hover:bg-[var(--primary-color)] hover:text-white transition-colors duration-300 ease-in-out"
                 href={project.githubURL}>
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

// Export the ProjectDetails component as the default export
export default ProjectDetails
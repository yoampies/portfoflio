import React from 'react'; 
import Navbar from '../components/Navbar'; // Imports the Navbar component from a relative path. This will be displayed at the top of the page.
import { skillIcons } from '../assets/constants'; // Imports an object `skillIcons` from a constants file. This object likely maps skill names to their corresponding icon components.
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Imports specific icons (FaGithub and FaLinkedin) from the react-icons library for social media links.
import SkillCard from '../components/SkillCard'; // Imports the SkillCard component, which will be used to display individual skills.

function About() { // Defines the 'About' functional component.
  return ( // The component returns JSX (JavaScript XML) to describe the UI.
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-[#f8f8f8] text-[#1a1a1a] font-['Space Grotesk']">
      {/*
        This is the main container for the About page.
        - `relative`: Establishes a positioning context for absolutely positioned children.
        - `flex size-full min-h-screen flex-col`: Makes it a full-height flex container that stacks its children vertically.
        - `overflow-x-hidden`: Prevents horizontal scrolling.
        - `bg-[#f8f8f8]`: Sets a light gray background color.
        - `text-[#1a1a1a]`: Sets the default text color to a dark gray.
        - `font-['Space Grotesk']`: Applies the 'Space Grotesk' font.
      */}
      <div className="flex h-full grow flex-col"> {/* A flex container to manage the layout of Navbar and main content. */}
        <Navbar /> {/* Renders the imported Navbar component. */}
        <main className="flex flex-1 justify-center py-16 px-4 sm:px-6 lg:px-8">
          {/*
            The main content area of the page.
            - `flex flex-1`: Allows this main section to grow and fill available space.
            - `justify-center`: Centers content horizontally.
            - `py-16 px-4 sm:px-6 lg:px-8`: Adds padding (top/bottom 16 units, responsive left/right padding).
          */}
          <div className="w-full max-w-4xl"> {/* A container to limit the maximum width of the content for better readability on large screens. */}
            {/* About Me Section */}
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
              {/*
                This section displays the "About Me" text and image.
                - `flex flex-col items-center`: Stacks items vertically and centers them by default.
                - `md:flex-row md:gap-12`: On medium screens and up, it becomes a row with a larger gap.
              */}
              <div className="flex-shrink-0"> {/* Container for the profile image. `flex-shrink-0` prevents it from shrinking. */}
                <img
                  alt="Sophia Carter Profile Picture" // Alt text for accessibility.
                  className="rounded-full h-48 w-48 object-cover border-4 border-white shadow-lg" // Styling for the image: rounded corners, fixed size, cover aspect ratio, border, and shadow.
                  src="../headshot.png" // The source path for the profile image. 
                />
              </div>
              <div className="text-center md:text-left"> {/* Container for the text content. */}
                <h1 className="text-4xl font-bold text-[#1a1a1a] tracking-tighter sm:text-5xl">About Me</h1> {/* Main heading for the section. */}
                <p className="mt-4 text-lg text-[#4d4d4d]">Web Developer blending art and code to create immersive web experiences. I specialize in building high-performance applications with React, bringing them to life with captivating animations using GSAP and engaging 3D visuals with React Three Fiber.</p> {/* First paragraph describing the developer's role and primary skills. */}
                <p className="mt-2 text-lg text-[#4d4d4d]">My passion lies in using web development to tell stories and raise awareness, transforming complex data and information into visually stunning, interactive applications. I'm actively seeking roles in the EdTech and HealthTech space, where I can use my skills to make important information accessible and impactful.</p> {/* Second paragraph elaborating on passion and career goals. */}
                <div className="mt-6 flex justify-center md:justify-start gap-4"> {/* Container for social media links. */}
                  <a className="text-[#4d4d4d] hover:text-[#13ecc8] transition-colors" href="https://github.com/yoampies"><FaGithub size={24} /></a> {/* GitHub link with icon and hover effect. */}
                  <a className="text-[#4d4d4d] hover:text-[#13ecc8] transition-colors" href="www.linkedin.com/in/andresampies"><FaLinkedin size={24} /></a> {/* LinkedIn link with icon and hover effect. Note: 'www.linkedin.com...' should ideally be 'https://www.linkedin.com/...' for a valid URL. */}
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mt-20"> {/* Section for displaying skills. */}
              <h2 className="text-3xl font-bold text-center text-[#1a1a1a] tracking-tight">My Skills</h2> {/* Heading for the skills section. */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6"> {/*
                A grid layout for the SkillCards.
                - `grid grid-cols-2`: Two columns by default.
                - `md:grid-cols-4`: Four columns on medium screens and up.
                - `gap-6`: Adds spacing between grid items.
              */}
                {Object.keys(skillIcons).map((skill) => (
                  // This maps over the keys (skill names) from the `skillIcons` object.
                  // For each skill, it renders a `SkillCard` component.
                  <SkillCard key={skill} title={skill}/> // `key={skill}` is important for React lists. `title={skill}` passes the skill name as a prop to SkillCard.
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default About; // Exports the About component to be used elsewhere in the application.
import React, { useRef } from 'react'; 
import { Link } from 'react-router-dom'; // Import Link component for navigation
import Navbar from '../components/Navbar'; // Import the Navbar component
import HomeCard from '../components/HomeCard'; // Import the HomeCard component for displaying projects
import { projects } from '../assets/constants'; // Import project data from constants
import { gsap } from 'gsap'; // Import the core GSAP library for animations
import { useGSAP } from '@gsap/react'; // Import useGSAP hook for integrating GSAP with React
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Import ScrollTrigger plugin for scroll-based animations
import { FaHtml5, FaCss3, FaReact } from 'react-icons/fa'; // Import Font Awesome icons for skills
import { MdAnimation, MdViewInAr } from 'react-icons/md'; // Import Material Design icons for skills

// Register GSAP plugins to make them available for use
gsap.registerPlugin(ScrollTrigger);

function Home() {
  // Create refs for different sections of the page to target them with GSAP
  const container = useRef(); // Reference to the main container div
  const heroRef = useRef(); // Reference to the hero section
  const aboutRef = useRef(); // Reference to the about section
  const projectsRef = useRef(); // Reference to the projects section
  const contactRef = useRef(); // Reference to the contact (footer) section

  // useGSAP hook to define and manage GSAP animations
  useGSAP(() => {
    // --- Hero Section Animations ---
    // These animations run when the component mounts or when specified by ScrollTrigger.

    // Animate the main heading (h1) in the hero section.
    // It starts from 50px below its final position and is invisible (opacity: 0),
    // then animates to its final position with full opacity over 1 second using a power3.out ease.
    gsap.from(heroRef.current.querySelector('h1'), {
      y: 50, // Move down by 50px
      opacity: 0, // Start invisible
      duration: 1, // Animation duration of 1 second
      ease: 'power3.out' // Easing function for a smooth out effect
    });

    // Animate the paragraph text in the hero section.
    // Similar to the heading, but with a slight delay (0.2 seconds) for a sequential effect.
    gsap.from(heroRef.current.querySelector('p'), {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2, // Delay by 0.2 seconds
      ease: 'power3.out'
    });

    // Animate the hero section's gradient background.
    // This creates a dynamic, looping gradient effect by animating the background-position.
    gsap.to('.hero-gradient', {
      backgroundPosition: '100% 50%', // Animate the background position to create a gradient shift
      duration: 5, // Animation duration of 5 seconds
      ease: 'none', // Linear easing for a smooth, continuous loop
      repeat: -1, // Repeat the animation infinitely
      yoyo: true // Play the animation forwards and backwards (looping effect)
    });

    // Animate the first blur circle element.
    // This involves movement, rotation, and scaling, creating a dynamic background effect.
    gsap.to(heroRef.current.querySelector('.blur-circle-1'), {
      x: '+=100px', // Move 100px to the right relative to its current position
      y: '+=100px', // Move 100px down relative to its current position
      rotation: 360, // Rotate a full 360 degrees
      scale: 1.2, // Scale up by 20%
      duration: 5, // Animation duration of 5 seconds
      ease: 'sine.inOut', // Smooth sinusoidal easing
      repeat: -1, // Repeat infinitely
      yoyo: true // Play forwards and backwards
    });

    // Animate the second blur circle element.
    // Similar to the first, but moves in the opposite direction and has a longer duration for a subtler effect.
    gsap.to(heroRef.current.querySelector('.blur-circle-2'), {
      x: '-=100px', // Move 100px to the left
      y: '-=100px', // Move 100px up
      rotation: -360, // Rotate -360 degrees (counter-clockwise)
      scale: 1.2, // Scale up by 20%
      duration: 10, // Longer duration of 15 seconds for a slower, more ethereal effect
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    });

    // --- About Section Animations ---
    // These animations are triggered by scrolling.

    // Animate the entire about section element.
    // It starts invisible and slightly moved down, then fades in and moves to its final position when it enters the viewport (at 80% scroll).
    gsap.from(aboutRef.current, {
      opacity: 0, // Start invisible
      y: 50, // Start 50px down
      duration: 1, // Animation duration
      scrollTrigger: {
        trigger: aboutRef.current, // The element that triggers the animation
        start: 'top 80%', // Animation starts when the top of the element hits 80% of the viewport height
        toggleActions: 'play none none none' // Play the animation once when it enters the viewport, do nothing on leave/enter/exit.
      }
    });

    // Animate the profile image within the about section.
    // It starts scaled down and invisible, then scales up and fades in with a 'back.out' ease for a playful effect.
    gsap.from(aboutRef.current.querySelector('img'), {
      scale: 0.8, // Start at 80% of its original scale
      opacity: 0, // Start invisible
      duration: 0.8, // Animation duration
      ease: 'back.out(1.7)', // A "back" ease for a slight overshoot effect
      scrollTrigger: {
        trigger: aboutRef.current.querySelector('img'), // Trigger based on the image element
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // --- Projects Section Animations ---
    // Animate each project card as it scrolls into view.
    // This animates the cards from an initial state (defined in CSS) to their visible state.
    gsap.to(projectsRef.current.querySelectorAll('.project-card'), {
      opacity: 1, // Animate to full opacity (visible)
      y: 0, // Animate to its original vertical position
      stagger: 0.2, // Stagger the animation of each card by 0.2 seconds, creating a cascade effect
      duration: 0.8, // Animation duration for each card
      ease: 'back.out(1.2)', // A "back" ease for a slight overshoot effect
      scrollTrigger: {
        trigger: projectsRef.current, // Trigger the animation when the projects section enters the viewport
        start: 'top 80%', // Start when the top of the section reaches 80% of the viewport
        toggleActions: 'play none none none' // Play once on enter
      }
    });

    // --- Contact Section Animations ---
    // Animate the "Contact Me" button when it appears on the screen.
    gsap.from(contactRef.current.querySelector('.bubbly-button'), {
      scale: 0.5, // Start scaled down to 50%
      opacity: 0, // Start invisible
      duration: 0.5, // Quick animation duration
      ease: 'elastic.out(1, 0.5)', // An elastic ease for a bouncy, "bubbly" effect
      scrollTrigger: {
        trigger: contactRef.current.querySelector('.bubbly-button'), // Trigger based on the button
        start: 'top 90%', // Start animation when the button is near the bottom of the viewport
        toggleActions: 'play none none none' // Play once on enter
      }
    });
  }, { scope: container }); // The `scope` option limits the GSAP context to the `container` ref, ensuring animations only affect elements within this component.

  // The component's return statement renders the JSX for the Home page.
  return (
    // Main container div with refs and styling
    <div ref={container} className="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-[#F5F5F5] text-[#333333] font-['Space Grotesk', sans-serif]">
      <Navbar /> {/* Render the Navbar component */}

      <main className="flex-grow"> {/* Main content area, allowing it to grow and fill available space */}
        {/* Hero Section */}
        <section ref={heroRef} className="hero-gradient flex min-h-[80vh] items-center justify-center text-center relative overflow-hidden p-8 z-10 h-screen">
          <div className="absolute inset-0 w-full h-full opacity-40">
            {/* These div elements create animated blur effects in the background */}
            <div className="blur-circle-1 absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[rgba(72,209,204,0.4)] rounded-full filter blur-[80px]"></div>
            <div className="blur-circle-2 absolute bottom-1/10 right-1/5 w-[400px] h-[400px] bg-[rgba(137,207,240,0.3)] rounded-full filter blur-[80px]"></div>
          </div>
          <div className="p-8 z-10"> {/* Content overlay with higher z-index */}
            {/* Main heading of the hero section */}
            <h1
              className="text-6xl md:text-8xl font-black tracking-tighter mb-4 hand-drawn text-white drop-shadow-lg"
              style={{ textShadow: '3px 3px 0px #89CFF0, 6px 6px 0px rgba(0,0,0,0.1)' }} // Custom text shadow for a layered effect
            >
              Hi, I'm Andrés {/* The main greeting */}
            </h1>
            {/* Subheading providing a brief description */}
            <p className="text-xl mt-10 md:text-2xl font-light max-w-3xl mx-auto text-white/90">
              A web developer who builds colorful, playful, and engaging web experiences with 3D models and animations.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="py-20 px-4 sm:px-6 lg:px-8 subtle-pattern-bg" id="about"> {/* Section for "About Me" */}
          <div className="max-w-6xl mx-auto flex flex-col items-center"> {/* Centered content container */}
            <h2 className="text-5xl font-bold text-center mb-8 hand-drawn text-[var(--text-primary)]">About Me</h2> {/* Section title */}
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left"> {/* Layout for image and text */}
              {/* Profile image with styling and hover effect */}
              <img
                alt="A picture of Alex" // Alt text for accessibility
                className="w-48 h-48 rounded-full object-cover border-4 border-[#89CFF0] shadow-lg transform hover:scale-105 transition-transform duration-300"
                src="../headshot.png" // Path to the image file
              />
              <div> {/* Container for text content */}
                <p className="text-lg text-[var(--text-secondary)] max-w-md"> {/* Paragraph describing the developer */}
                  I'm a passionate web developer with a knack for turning complex problems into beautiful, intuitive designs. <br />
                </p>
                <div className="flex flex-row gap-8 items-center"> {/* Container for skills icons */}
                  <p className="font-semibold py-3"> {/* Label for skills */}
                    Skills:
                  </p>
                  {/* Rendering skill icons */}
                  <FaHtml5 />
                  <FaCss3 />
                  <FaReact />
                  <MdAnimation />
                  <MdViewInAr />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="projects"> {/* Section to display projects */}
          <h2 className="text-5xl font-bold text-center mb-8 hand-drawn text-[#C1E1C1]">My Projects</h2> {/* Section title */}
          {/* Grid layout for project cards */}
          <p className="text-lg text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
            For a better experience view these models on a laptop or desktop devide, since the mobile
            versions are still in development.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Mapping over the 'projects' array to render a HomeCard for each project */}
            {projects.map((p) => (
              <HomeCard key={p.id} title={p.title} imgURL={p.imgURL} id={p.id}/>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer ref={contactRef} className="bg-white py-16 text-center" id="contact"> {/* Footer with contact information and call to action */}
        <div className="max-w-4xl mx-auto px-4"> {/* Centered content */}
          <h2 className="text-5xl font-bold mb-4 hand-drawn text-[#89CFF0]">Let's Create Together</h2> {/* Footer title */}
          <p className="text-lg text-[#555555] mb-8 max-w-2xl mx-auto"> {/* Call to action text */}
            Have a project in mind? I'd love to hear about it. Let's make something amazing.
          </p>
          {/* Link to the contact page */}
          <Link
            to="/contact"
            className="bubbly-button inline-flex items-center gap-3 bg-[#C1E1C1] text-gray-800 text-xl font-bold py-4 px-10 rounded-full hand-drawn transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Me
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Home; // Export the Home component as the default export
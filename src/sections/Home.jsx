import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomeCard from '../components/HomeCard';
import { projects } from '../assets/constants';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FaHtml5, FaCss3, FaReact } from 'react-icons/fa';
import { MdAnimation, MdViewInAr } from 'react-icons/md';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const container = useRef();
  const heroRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  useGSAP(() => {
    // --- Hero Section Animations ---

    // Animate heading and paragraph on mount
    gsap.from(heroRef.current.querySelector('h1'), {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
    gsap.from(heroRef.current.querySelector('p'), {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: 'power3.out'
    });

    // Animate the hero gradient background
    gsap.to('.hero-gradient', {
      backgroundPosition: '100% 50%', // Animate background position for gradient effect
      duration: 5,
      ease: 'none', // Linear animation for smooth looping
      repeat: -1, // Infinite loop
      yoyo: true // Play animation forwards and backwards
    });

    // Animate the blur circles (using their specific classes)
    gsap.to(heroRef.current.querySelector('.blur-circle-1'), {
      x: '+=100px', // Move 100px to the right from current position
      y: '+=100px', // Move 100px down from current position
      rotation: 360,
      scale: 1.2,
      duration: 5,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    });

    gsap.to(heroRef.current.querySelector('.blur-circle-2'), {
      x: '-=100px', // Move 100px to the left from current position
      y: '-=100px', // Move 100px up from current position
      rotation: -360,
      scale: 1.2,
      duration: 15,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    });

    // --- About Section Animations ---
    gsap.from(aboutRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 80%', // Animation starts when the top of the element reaches 80% of the viewport height
        toggleActions: 'play none none none' // Play the animation once when it enters the viewport
      }
    });

    gsap.from(aboutRef.current.querySelector('img'), {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)', // Back ease for a playful effect
      scrollTrigger: {
        trigger: aboutRef.current.querySelector('img'),
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // --- Projects Section Animations ---
    // Animate each project card as it scrolls into view
    // Using gsap.to() now, animating from the CSS initial state to the visible state
    gsap.to(projectsRef.current.querySelectorAll('.project-card'), {
      opacity: 1, // Animate to full opacity
      y: 0, // Animate to original Y position
      stagger: 0.2, // Stagger the animation for each card by 0.2 seconds
      duration: 0.8,
      ease: 'back.out(1.2)',
      scrollTrigger: {
        trigger: projectsRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // --- Contact Section Animations ---
    // Animate the "Contact Me" button on scroll
    gsap.from(contactRef.current.querySelector('.bubbly-button'), {
      scale: 0.5,
      opacity: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)', // Elastic ease for a bouncy effect
      scrollTrigger: {
        trigger: contactRef.current.querySelector('.bubbly-button'),
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    });
  }, { scope: container }); // The scope ensures animations are only applied within this container

  return (
    <div ref={container} className="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-[#F5F5F5] text-[#333333] font-['Space Grotesk', sans-serif]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section ref={heroRef} className="hero-gradient flex min-h-[80vh] items-center justify-center text-center relative overflow-hidden p-8 z-10 h-screen">
          <div className="absolute inset-0 w-full h-full opacity-40">
            {/* The blur circles are already correctly placed */}
            <div className="blur-circle-1 absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[rgba(72,209,204,0.4)] rounded-full filter blur-[80px]"></div>
            <div className="blur-circle-2 absolute bottom-1/10 right-1/5 w-[400px] h-[400px] bg-[rgba(137,207,240,0.3)] rounded-full filter blur-[80px]"></div>
          </div>
          <div className="p-8 z-10">
            <h1
              className="text-6xl md:text-8xl font-black tracking-tighter mb-4 hand-drawn text-white drop-shadow-lg"
              style={{ textShadow: '3px 3px 0px #89CFF0, 6px 6px 0px rgba(0,0,0,0.1)' }}
            >
              Hi, I'm Andrés
            </h1>
            <p className="text-xl mt-10 md:text-2xl font-light max-w-3xl mx-auto text-white/90">
              A frontend developer who builds colorful, playful, and engaging web experiences with 3D models and animations.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="py-20 px-4 sm:px-6 lg:px-8 subtle-pattern-bg" id="about">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <h2 className="text-5xl font-bold text-center mb-8 hand-drawn text-[var(--text-primary)]">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <img
                alt="A picture of Alex"
                className="w-48 h-48 rounded-full object-cover border-4 border-[#89CFF0] shadow-lg transform hover:scale-105 transition-transform duration-300"
                src="../headshot.png"
              />
              <div>
                <p className="text-lg text-[var(--text-secondary)] max-w-md">
                  I'm a passionate frontend developer with a knack for turning complex problems into beautiful, intuitive designs. <br />
                </p>
                <div className="flex flex-row gap-8 items-center">
                  <p className="font-semibold py-3">
                    Skills:
                  </p>
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
        <section ref={projectsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="projects">
          <h2 className="text-5xl font-bold text-center mb-12 hand-drawn text-[#C1E1C1]">My Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {projects.map((p) => (
              <HomeCard key={p.id} title={p.title} imgURL={p.imgURL} id={p.id}/>
            ))}
          </div>
        </section>
      </main>

      <footer ref={contactRef} className="bg-white py-16 text-center" id="contact">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4 hand-drawn text-[#89CFF0]">Let's Create Together</h2>
          <p className="text-lg text-[#555555] mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's make something amazing.
          </p>
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

export default Home;
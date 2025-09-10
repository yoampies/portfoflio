import React from 'react'
import Navbar from '../components/Navbar'
import { skillIcons } from '../assets/constants'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SkillCard from '../components/SkillCard';

function About() {
  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-[#f8f8f8] text-[#1a1a1a] font-['Space Grotesk']">
      <div className="flex h-full grow flex-col">
        <Navbar />
        <main className="flex flex-1 justify-center py-16 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl">
            {/* About Me Section */}
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
              <div className="flex-shrink-0">
                <img
                  alt="Sophia Carter Profile Picture"
                  className="rounded-full h-48 w-48 object-cover border-4 border-white shadow-lg"
                  src="../headshot.png"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold text-[#1a1a1a] tracking-tighter sm:text-5xl">About Me</h1>
                <p className="mt-4 text-lg text-[#4d4d4d]">Frontend Developer blending art and code to create immersive web experiences. I specialize in building high-performance applications with React, bringing them to life with captivating animations using GSAP and engaging 3D visuals with React Three Fiber.</p>
                <p className="mt-2 text-lg text-[#4d4d4d]">My passion lies in using web development to tell stories and raise awareness, transforming complex data and information into visually stunning, interactive applications. I'm actively seeking roles in the EdTech and HealthTech space, where I can use my skills to make important information accessible and impactful.</p>
                <div className="mt-6 flex justify-center md:justify-start gap-4">
                  <a className="text-[#4d4d4d] hover:text-[#13ecc8] transition-colors" href="https://github.com/yoampies"><FaGithub size={24} /></a>
                  <a className="text-[#4d4d4d] hover:text-[#13ecc8] transition-colors" href="www.linkedin.com/in/andresampies"><FaLinkedin size={24} /></a>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-center text-[#1a1a1a] tracking-tight">My Skills</h2>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                {Object.keys(skillIcons).map((skill) => (
                  <SkillCard key={skill} title={skill}/>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default About
import React from 'react'
import Navbar from '../components/Navbar'
import SkillCard from '../components/SkillCard'
import { useParams } from 'react-router-dom'
import { projects } from '../assets/constants'

function ProjectDetails() {

  const {projectID} = useParams()
  
  const project = projects.find((p) => (
    p.id.toString() === projectID
  ))
  
  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-5xl mx-auto">
            <div
              className="w-full h-[500px] bg-cover bg-center rounded-2xl shadow-xl overflow-hidden mb-12"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 40%), url(${project.imgURL})`,
              }}
            >
              <div className="flex h-full items-end p-8">
                <h1 className="text-white text-4xl font-bold drop-shadow-md">Project: {project.title}</h1>
              </div>
            </div>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Overview</h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                {project.longDescription}
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">Technologies Used</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Object.keys(project.techStack).map((tech) => (
                  <SkillCard key={tech} title={tech}/>
                ))}
              </div>
            </section>
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <button className="flex min-w-[180px] items-center justify-center rounded-full h-14 px-8 bg-[var(--primary-color)] text-[var(--text-primary)] text-lg font-bold tracking-wide shadow-lg hover:bg-[var(--accent-color)] hover:-translate-y-1 transition-all duration-300 ease-in-out">
                <span>Live Demo</span>
              </button>
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

export default ProjectDetails
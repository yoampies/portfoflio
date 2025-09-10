import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ title, description, link, imgURL, animationDelay, isVisible }) {
 return (
   <div
    className={`project-card mb-8 transition-opacity duration-500 ease-out rounded-2xl hover:shadow-lg ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-50px'
    }`}
    style={{ transitionDelay: isVisible ? `${animationDelay}s` : '0s' }}
    >
      <div className="group relative overflow-hidden border border-gray-200/50 flex flex-col h-full">
        <div className="pattern-overlay absolute inset-0 opacity-50"></div>
        <img alt={title} className="h-auto max-h-[350px] w-full object-cover transition-transform duration-500 group-hover:scale-105" src={imgURL} />
        <div className="relative p-6 flex flex-col h-full">
          <h3 className="mb-2 text-xl font-bold text-[#292929]">{title}</h3>
          <p className="mb-4 text-sm text-[#292929] h-10 overflow-hidden line-clamp-2">{description}</p>
          <Link className="inline-block rounded-lg bg-[var(--primary-color)] px-5 py-2 text-sm font-semibold text-[#292929] transition-colors hover:bg-[var(--accent-color)] mt-auto w-1/4 text-center" to={link}>View Details</Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
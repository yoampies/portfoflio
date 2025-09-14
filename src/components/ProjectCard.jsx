import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link component from react-router-dom for navigation without full page reloads.

// Defines a functional component called ProjectCard.
// It accepts props: title, description, link, imgURL, animationDelay, and isVisible.
function ProjectCard({ title, description, link, imgURL, animationDelay, isVisible }) {
  // Returns JSX to render the project card.
  return (
    // Main container for the project card.
    // Applies Tailwind CSS classes for styling:
    // - mb-8: margin-bottom of 8 units.
    // - transition-opacity duration-500 ease-out: smooth transition for opacity over 500ms.
    // - rounded-2xl: applies rounded corners.
    // - hover:shadow-lg: adds a larger shadow on hover.
    // - Conditional classes based on isVisible prop for fade-in/slide-up animation:
    //   - opacity-100 translate-y-0: fully visible and in its final position.
    //   - opacity-0 translate-y-50px: initially invisible and slightly moved down.
    <div
      className={`project-card mb-8 transition-opacity duration-500 ease-out rounded-2xl hover:shadow-lg ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-50px'
      }`}
      // Applies a delay to the transition based on animationDelay prop, only if isVisible is true.
      style={{ transitionDelay: isVisible ? `${animationDelay}s` : '0s' }}
    >
      {/* Inner container for the card content, with relative positioning for absolute children. */}
      {/* overflow-hidden: ensures child elements don't spill out. */}
      {/* border border-gray-200/50: subtle border with transparency. */}
      {/* flex flex-col h-full: makes it a flex container with column direction and full height. */}
      <div className="group relative overflow-hidden border border-gray-200/50 flex flex-col h-full">
        {/* Overlay for potential background patterns or effects, positioned absolutely to cover the parent. */}
        <div className="pattern-overlay absolute inset-0 opacity-50"></div>

        {/* Image of the project. */}
        {/* h-auto max-h-[350px]: auto height with a max height of 350px. */}
        {/* w-full: full width. */}
        {/* object-cover: covers the area while maintaining aspect ratio. */}
        {/* transition-transform duration-500 group-hover:scale-105: smooth scaling effect on hover. */}
        <img
          alt={title} // Alt text for accessibility, using the project title.
          className="h-auto max-h-[350px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={imgURL} // Source URL of the project image.
        />

        {/* Container for the text content and details. */}
        <div className="relative p-6 flex flex-col h-full">
          {/* Project title heading. */}
          {/* mb-2: margin-bottom of 2 units. */}
          {/* text-xl font-bold: large font size, bold weight. */}
          {/* text-[#292929]: dark gray text color. */}
          <h3 className="mb-2 text-xl font-bold text-[#292929]">{title}</h3>

          {/* Project description. */}
          {/* mb-4: margin-bottom of 4 units. */}
          {/* text-sm: small font size. */}
          {/* text-[#292929]: dark gray text color. */}
          {/* h-10 overflow-hidden: fixed height, content hidden if it exceeds. */}
          {/* line-clamp-2: limits the text to a maximum of 2 lines. */}
          <p className="mb-4 text-sm text-[#292929] h-10 overflow-hidden line-clamp-2">{description}</p>

          {/* Link to view project details. */}
          {/* inline-block: allows setting width and height. */}
          {/* rounded-lg: rounded corners. */}
          {/* bg-[var(--primary-color)]: background color from CSS variable. */}
          {/* px-5 py-2: padding on x and y axes. */}
          {/* text-sm font-semibold: small font size, semi-bold weight. */}
          {/* text-[#292929]: dark gray text color. */}
          {/* transition-colors hover:bg-[var(--accent-color)]: smooth color transition on hover, changing background to accent color. */}
          {/* mt-auto: pushes the button to the bottom of its container (due to flex-col h-full). */}
          {/* w-1/4: width is 1/4 of the parent. */}
          {/* text-center: centers the text inside the button. */}
          <Link
            className="inline-block rounded-lg bg-[var(--primary-color)] px-5 py-2 text-sm font-semibold text-[#292929] transition-colors hover:bg-[var(--accent-color)] mt-auto w-1/4 text-center"
            to={link} // The destination URL for the link, passed as a prop.
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

// Exports the ProjectCard component to be used in other parts of the application.
export default ProjectCard;
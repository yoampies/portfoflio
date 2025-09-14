import React from 'react';
// Import the Link component from react-router-dom. This component is used for client-side navigation
// without full page reloads, enabling seamless transitions between different pages in your application.
import { Link } from 'react-router-dom';

/**
 * A reusable card component to display a project on the homepage.
 * It shows the project's image and title, and links to the detailed project page.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.title - The title of the project.
 * @param {string} props.imgURL - The URL of the project's image.
 * @param {string|number} props.id - The unique identifier of the project.
 */
function HomeCard({ title, imgURL, id }) {
  return (
    // The main container for the project card.
    // 'project-card' is a custom class, 'rounded-2xl' rounds the corners,
    // 'pattern-1' likely applies a background pattern, 'scale-100' sets initial scale.
    // 'group' allows child elements to apply styles when the parent is hovered.
    // 'hover:shadow-xl' adds a larger shadow on hover, 'hover:scale-[1.02]' slightly scales up the card on hover.
    <div className="project-card rounded-2xl pattern-1 scale-100 group hover:shadow-xl hover:scale-[1.02]">
      {/* The Link component from react-router-dom.
        Clicking this entire card will navigate the user to the project's detail page.
        The `to` prop constructs the URL dynamically using the project's `id`.
      */}
      <Link to={`/projects/${id}`}>
        {/* The image element for the project.
          'rounded-t-2xl' rounds only the top corners, 'w-full' makes it full width,
          'h-40' sets a fixed height, and 'object-cover' ensures the image covers the area
          without distortion, cropping if necessary.
          'alt' text is important for accessibility.
        */}
        <img alt={`Project: ${title}`} className="rounded-t-2xl w-full h-40 object-cover" src={imgURL} />
        
        {/* Container for the project title text. */}
        <div className="p-4">
          {/* The heading for the project title.
            'text-lg' sets the font size, 'font-bold' makes it bold, 'text-center' centers the text.
            'truncate' will cut off the text if it's too long and add an ellipsis (...).
          */}
          <h3 className="text-lg font-bold text-center truncate">{title}</h3>
        </div>
      </Link>
    </div>
  );
}

// Export the HomeCard component so it can be imported and used in other parts of the application.
export default HomeCard;
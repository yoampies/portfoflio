import React from 'react';
// Import an object named 'skillIcons' from a local constants file.
// This object likely maps skill names (strings) to their corresponding SVG components or icon elements.
import { skillIcons } from '../assets/constants';

// Define a functional component called SkillCard.
// It accepts 'props' as an argument, and we're destructuring 'title' from it.
// 'title' is expected to be a string representing the name of a skill (e.g., "JavaScript", "React").
function SkillCard({ title }) {
  // Look up the corresponding icon component in the skillIcons object using the provided title.
  // For example, if title is "React", IconComponent would be the React SVG component.
  const IconComponent = skillIcons[title];

  // Conditional rendering: If no IconComponent is found for the given title (i.e., it's not in skillIcons),
  // return null. This prevents rendering anything for skills that don't have a corresponding icon defined.
  if (!IconComponent) {
    return null;
  }

  // Render the main JSX for the SkillCard.
  // This returns a single, clean JSX block.
  return (
    // A div container for the skill card.
    // - className="bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg transition-shadow duration-300":
    //   - Sets the background to white.
    //   - Applies rounded corners (lg).
    //   - Adds padding (p-6).
    //   - Uses flexbox to arrange children in a column, center items horizontally and vertically, and center text.
    //   - Applies a small shadow (shadow-sm) which grows to a larger shadow on hover (hover:shadow-lg).
    //   - Adds a smooth transition effect for the shadow and duration (transition-shadow duration-300).
    <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Render the icon component. */}
      {/*
        - IconComponent: This is the dynamic component (e.g., SVG) looked up from skillIcons.
        - className="text-4xl text-[#13ecc8] mb-2":
          - Sets the icon size to extra-large (text-4xl).
          - Sets the icon color to a specific teal/green shade (#13ecc8).
          - Adds a bottom margin (mb-2).
      */}
      <IconComponent className="text-4xl text-[#13ecc8] mb-2" />
      {/* Render the skill title. */}
      {/*
        - h3: A heading element for the skill title.
        - className="text-base font-bold text-[#1a1a1a]":
          - Sets the font size to base.
          - Makes the font bold.
          - Sets the text color to a dark gray (#1a1a1a).
      */}
      <h3 className="text-base font-bold text-[#1a1a1a]">{title}</h3>
    </div>
  );
}

// Export the SkillCard component as the default export, making it available for import in other files.
export default SkillCard;
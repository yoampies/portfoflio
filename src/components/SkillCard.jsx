import React from 'react'
import { skillIcons } from '../assets/constants'

function SkillCard({ title }) {
  const IconComponent = skillIcons[title];

  if (!IconComponent) {
    return null; 
  }

  // Render the single, clean JSX block
  return (
    <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
      <IconComponent className="text-4xl text-[#13ecc8] mb-2" />
      <h3 className="text-base font-bold text-[#1a1a1a]">{title}</h3>
    </div>
  );
}

export default SkillCard;
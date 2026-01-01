import React from 'react';

function SkillCard({ title, icon: IconComponent, description }) {
  const FinalIcon = IconComponent;

  return (
    <div className="bg-white rounded-xl p-5 flex flex-col items-start shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 h-full">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-[#13ecc8]/10 rounded-lg">
          <FinalIcon className="text-2xl text-[#13ecc8]" />
        </div>
        <h3 className="text-lg font-bold text-[#1a1a1a]">{title}</h3>
      </div>
      {description && (
        <p className="text-sm text-gray-600 leading-relaxed italic">
          {description}
        </p>
      )}
    </div>
  );
}

export default SkillCard;
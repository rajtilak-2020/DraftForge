import React from 'react';

interface StyleSelectorProps {
  selectedStyle: string;
  onStyleChange: (style: string) => void;
}

const styles = [
  { id: 'default', name: 'Default' },
  { id: 'github', name: 'GitHub' },
  { id: 'academic', name: 'Academic' },
  { id: 'elegant', name: 'Elegant' },
];

const StyleSelector: React.FC<StyleSelectorProps> = ({ selectedStyle, onStyleChange }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-sm mb-2 text-gray-600">
        Select PDF Style:
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {styles.map((style) => (
          <button
            key={style.id}
            onClick={() => onStyleChange(style.id)}
            className={`px-3 py-1 text-sm rounded-md transition-colors duration-200 ${
              selectedStyle === style.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {style.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;
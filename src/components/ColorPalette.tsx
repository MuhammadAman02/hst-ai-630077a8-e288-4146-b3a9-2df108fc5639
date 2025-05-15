import React from 'react';

interface ColorPaletteProps {
  skinTone: string;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ skinTone }) => {
  // This is a placeholder function. In a real app, you'd use a color theory algorithm
  const generatePalette = (baseColor: string) => {
    return [
      baseColor,
      '#' + Math.floor(Math.random()*16777215).toString(16),
      '#' + Math.floor(Math.random()*16777215).toString(16),
      '#' + Math.floor(Math.random()*16777215).toString(16),
    ];
  };

  const palette = generatePalette(skinTone);

  return (
    <div className="bg-card p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Recommended Color Palette</h2>
      <div className="grid grid-cols-2 gap-4">
        {palette.map((color, index) => (
          <div key={index} className="text-center">
            <div
              className="w-full h-24 rounded-md mb-2"
              style={{ backgroundColor: color }}
            ></div>
            <span className="text-sm font-medium">{color}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
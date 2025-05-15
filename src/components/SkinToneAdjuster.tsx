import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider";

interface SkinToneAdjusterProps {
  initialTone: string;
  onToneChange: (newTone: string) => void;
}

const SkinToneAdjuster: React.FC<SkinToneAdjusterProps> = ({ initialTone, onToneChange }) => {
  const [tone, setTone] = useState(initialTone);

  const handleChange = (value: number[]) => {
    const newTone = `hsl(${value[0]}, 50%, 50%)`;
    setTone(newTone);
    onToneChange(newTone);
  };

  return (
    <div className="bg-card p-6 rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-semibold mb-4">Adjust Skin Tone</h2>
      <div className="flex items-center space-x-4">
        <div
          className="w-12 h-12 rounded-full"
          style={{ backgroundColor: tone }}
        ></div>
        <Slider
          defaultValue={[0]}
          max={360}
          step={1}
          onValueChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SkinToneAdjuster;
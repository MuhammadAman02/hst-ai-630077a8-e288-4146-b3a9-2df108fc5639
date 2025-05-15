import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import ColorPalette from './components/ColorPalette';
import SkinToneAdjuster from './components/SkinToneAdjuster';

const App: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [skinTone, setSkinTone] = useState<string | null>(null);

  const handleImageUpload = (image: string) => {
    setUploadedImage(image);
    // TODO: Implement skin tone detection
    setSkinTone('#D2996F'); // Placeholder skin tone
  };

  const handleSkinToneChange = (newTone: string) => {
    setSkinTone(newTone);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-2">Color Harmony</h1>
        <p className="text-muted-foreground">Discover your perfect color palette</p>
      </header>
      <main className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ImageUpload onImageUpload={handleImageUpload} />
            {uploadedImage && (
              <SkinToneAdjuster
                initialTone={skinTone || '#D2996F'}
                onToneChange={handleSkinToneChange}
              />
            )}
          </div>
          <div>
            {skinTone && <ColorPalette skinTone={skinTone} />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
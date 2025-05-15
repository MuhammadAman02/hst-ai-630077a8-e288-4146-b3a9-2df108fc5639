import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  onImageUpload: (image: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreviewUrl(result);
        onImageUpload(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-card p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Upload Your Image</h2>
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="image-upload"
        />
        <label htmlFor="image-upload">
          <Button variant="outline" className="w-full">
            Choose Image
          </Button>
        </label>
      </div>
      {previewUrl && (
        <div className="mt-4">
          <img src={previewUrl} alt="Preview" className="max-w-full h-auto rounded-md" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
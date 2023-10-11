import React, { useState } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setImage(imageUrl);
    }
  };

  return (
    <div className="image-upload">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="Hero" />}
      {/* Store the imageUrl in your hero data or database */}
    </div>
  );
};

export default ImageUpload;


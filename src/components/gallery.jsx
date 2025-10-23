import React, { useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([

    "https://images.unsplash.com/photo-1760681555543-0a3c65fa10eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",

    "https://images.unsplash.com/photo-1760615302825-900295f63a2c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",

    "https://images.unsplash.com/photo-1761026533058-1c0080104977?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  ]);

  const addLocalImage = (event) => {
    const file = event.target.files[0];

    if (file) {
      const localURL = URL.createObjectURL(file);
      setImages([...images, localURL]);
    }
  };

  return (
    <div className="widget gallery-widget">
      <div className="gallery-header">
        <h3>Gallery</h3>
        <label htmlFor="imageUpload" className="add-btn">
          + ADD IMAGE
        </label>
        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          onChange={addLocalImage}
          style={{ display: "none" }}
        />
      </div>

      <div className="gallery-grid">

        {images.map((img, index) => (
          <div key={index} className="gallery-item">

            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

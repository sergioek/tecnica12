import React from 'react'
const images = [
  { alt: "image1", url: "/img/ifraestructure/image1.jpg" },
  { alt: "image2", url: "/img/ifraestructure/image2.jpg" },
    { alt: "image3", url: "/img/ifraestructure/image3.jpg" },
  
];
export const Galery = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-4">
      {images.map((image) => (
        <img
          src={image.url}
          alt={image.alt}
          className="w-4/6 h-90 rounded-md transform transition duration-500 hover:scale-125"
        />
      ))}
    </div>
  );
}

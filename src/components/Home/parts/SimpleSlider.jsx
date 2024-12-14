import React, { useState,useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
export const SimpleSlider = () => {

  const slides = [
    {
      url: "/img/slider/inscripcion.png", /* poner imagen actualizada */
    },
    {
      url: "/img/slider/portada1.jpg",
    },
    {
      url: "/img/slider/taller1.jpeg",
    },
    {
      url: "/img/slider/taller2.jpeg",
    },
    {
      url: "/img/slider/taller3.jpeg",
    },
    {
      url: "/img/slider/acto-independencia-2023.jfif",
    },
    {
      url: "/img/slider/portada2.jpg",
    },
    {
      url: "/img/slider/portada3.jpg",
    },

    {
      url: "/img/slider/portada4.jpg",
    },
    {
      url: "/img/slider/portada5.jpg",
    },

    {
      url: "/img/slider/portada6.jpg",
    },
  ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex(currentIndex < slides.length - 1 ? currentIndex + 1 : 0);
        setFade(true);
      }, 500); // Tiempo de transición
    }, 3000);
    return () => clearTimeout(timer); // Limpiar el temporizador para evitar fugas de memoria
  }, [currentIndex]);


  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className={`w-full h-full rounded-2xl bg-center bg-cover transition-opacity duration-500 ease-in-out transform ${
          fade ? "opacity-100" : "opacity-10"
        }`}
      ></div>
      
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

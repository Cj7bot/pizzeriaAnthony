import React, { useState, useEffect } from 'react';
import inicioBackground from '../../assets/Inicio/inicioBackground.jpg';
import './inicio.css';

import banner1 from '../../banners/1.png';
import banner2 from '../../banners/2.png';
import banner3 from '../../banners/3.png';
import banner4 from '../../banners/4.png';

const sliderImages = [banner1, banner2, banner3, banner4];

export function Inicio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar slide automáticamente cada 10 segundos (10000 ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % sliderImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + sliderImages.length) % sliderImages.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="background-image">
        <img src={inicioBackground} alt="Fondo de pantalla" className="w-full h-screen object-cover" />
      </div>
      <div className="slider-container">
        <button onClick={handlePrev} className="slider-button">‹</button>
        <div className="slider">
          <img src={sliderImages[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image" />
        </div>
        <button onClick={handleNext} className="slider-button">›</button>
      </div>
      <div className="dots-container">
        {sliderImages.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </>
  );
}

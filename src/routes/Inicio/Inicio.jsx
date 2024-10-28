import inicioBackground from '../../assets/Inicio/inicioBackground.jpg';
import React, { useState } from 'react';
import './inicio.css';

const sliderImages = [
  'src/banners/1.png',
  'src/banners/2.png',
  'src/banners/3.png',
  'src/banners/4.png'
];


export function Inicio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % sliderImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <>
      <div className="background-image">
        <img src={inicioBackground} alt="banner" className="w-full h-screen object-cover" />
      </div>
      <div className="slider-container">
        <button onClick={handlePrev} className="slider-button">‹</button>
        <div className="slider">
          <img src={sliderImages[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image" />
        </div>
        <button onClick={handleNext} className="slider-button">›</button>
      </div>
      
    </>
  )
}


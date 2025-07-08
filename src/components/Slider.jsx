import React, { useState } from 'react';
import './Slider.css';

const slides = [
  {
    id: 1,
    imageUrl: '/images/Slider1.png',
    caption: 'Chez dikko local tous les produits sont cultivés avec amour et soin',
  },
  {
    id: 2,
    imageUrl: '/images/Slider2.jpeg',
    caption: 'Du champ à votre assiette',
  },
  {
    id: 3,
    imageUrl: '/images/Slider3.jpg',
    caption: 'Légumes locaux de qualité emballés avec styles',
  },
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="slider-container">
      {/* Image de fond floutée */}
      <img
        src={slides[currentIndex].imageUrl}
        alt={slides[currentIndex].caption}
        className="slider-image-bg"
      />
      {/* Image principale */}
      <img
        src={slides[currentIndex].imageUrl}
        alt={slides[currentIndex].caption}
        className="slider-image-main"
      />

      <div className="slider-caption">{slides[currentIndex].caption}</div>

      <button className="slider-btn prev" onClick={prevSlide}>&#10094;</button>
      <button className="slider-btn next" onClick={nextSlide}>&#10095;</button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;

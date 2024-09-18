import React, { useState, useEffect } from 'react';
import './Slider.css';
import image1 from '../Assets/images/Slider-image1.jpg';
import image2 from '../Assets/images/Slider-image2.jpg';
import image3 from '../Assets/images/Slider-image3.jpg';

const images = [
  {
    src: image1,
    alt: 'Software House Image 1',
  },
  {
    src: image2,
    alt: 'Software House Image 2',
  },
  {
    src: image3,
    alt: 'Software House Image 3',
  }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Navigate to next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Navigate to previous image
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <div className="slider-content">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="slider-image"
        />
        <button className="prev" onClick={goToPrevious}>
          &#10094;
        </button>
        <button className="next" onClick={goToNext}>
          &#10095;
        </button>
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? 'dot active' : 'dot'}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;

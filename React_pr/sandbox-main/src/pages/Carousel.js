// components/Carousel.js
import React, { useState } from 'react';

export const Carousel = ({ children, slideWidth = 320, gap = 20 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Преобразуем children в массив
  const items = React.Children.toArray(children);
  const totalItems = items.length;

  const next = () => {
    if (currentIndex < totalItems - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const singleSlideWidth = slideWidth + gap;

  return (
    <div className="carousel-wrapper" style={{ position: 'relative' }}>
      {/* Прокручиваемый контейнер */}
      <div
        className="carousel-track"
        style={{
          display: 'flex',
          transform: `translateX(-${currentIndex * singleSlideWidth}px)`,
          transition: 'transform 0.5s ease',
          gap: `${gap}px`,
          padding: '0 60px', // место для стрелок
        }}
      >
        {items}
      </div>

      {/* Стрелки */}
      <div
        className="carousel-controls"
        style={{
          position: 'absolute',
          top: '50%',
          width: '100%',
          transform: 'translateY(-50%)',
          display: 'flex',
          justifyContent: 'space-between',
          pointerEvents: 'none',
        }}
      >
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          style={{
            pointerEvents: 'auto',
            background: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: currentIndex === 0 ? 0.3 : 0.8,
            cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          ◀
        </button>
        <button
          onClick={next}
          disabled={currentIndex >= totalItems - 1}
          style={{
            pointerEvents: 'auto',
            background: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: currentIndex >= totalItems - 1 ? 0.3 : 0.8,
            cursor: currentIndex >= totalItems - 1 ? 'not-allowed' : 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          ▶
        </button>
      </div>
    </div>
  );
};
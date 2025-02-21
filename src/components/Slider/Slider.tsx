import React, { FC, JSX, useState } from 'react';

interface ISliderProps {
  components: JSX.Element[];
  visibleCount: number;
}

export const Slider: FC<ISliderProps> = ({ components, visibleCount }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + components.length) % components.length,
    );
  };

  const visibleComponents = components.slice(
    currentIndex,
    currentIndex + visibleCount,
  );

  if (visibleComponents.length < visibleCount) {
    const missingCount = visibleCount - visibleComponents.length;
    const extraComponents = components.slice(0, missingCount);
    visibleComponents.push(...extraComponents);
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '200px' }}>
      <div style={{ display: 'flex', overflow: 'hidden' }}>
        {visibleComponents.map((component, index) => (
          <div key={index} style={{ flex: 1, minWidth: '300px' }}>
            {component}
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          top: '50%',
          left: '0',
          transform: 'translateY(-50%)',
        }}
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          top: '50%',
          right: '0',
          transform: 'translateY(-50%)',
        }}
      >
        &#8250;
      </button>
    </div>
  );
};

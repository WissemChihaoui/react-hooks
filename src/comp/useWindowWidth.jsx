import React, { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
}

function WindowWidthComponent() {
  const width = useWindowWidth();

  return (
    <div>
      <p>Current window width: {width}px</p>
    </div>
  );
}

export default WindowWidthComponent;

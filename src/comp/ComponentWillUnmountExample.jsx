import React, { useEffect } from 'react';

function ComponentWillUnmountExample() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer tick');
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('Component unmounted, timer cleared');
    };
  }, []); // Empty dependency array to run on mount and cleanup on unmount

  return (
    <div>
      <p>Check the console to see the timer messages and cleanup.</p>
    </div>
  );
}

export default ComponentWillUnmountExample;

import React, { useEffect } from 'react';

function ComponentDidMountExample() {
  useEffect(() => {
    console.log('Component mounted');
  }, []); // Empty dependency array to run only on mount

  return (
    <div>
      <p>Check the console to see when this component mounts.</p>
    </div>
  );
}

export default ComponentDidMountExample;

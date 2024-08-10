import React, { useState, useEffect } from 'react';

function MultipleUseEffectsExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
  }, []); // Runs only once on mount

  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]); // Runs whenever count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MultipleUseEffectsExample;

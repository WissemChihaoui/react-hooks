import React, { useState, useEffect } from 'react';

function ComponentDidUpdateExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component updated: count is now', count);
  }, [count]); 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ComponentDidUpdateExample;

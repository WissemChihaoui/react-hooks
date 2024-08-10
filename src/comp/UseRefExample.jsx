import React, { useRef } from 'react';

function UseRefExample() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus on me!" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default UseRefExample;

import React, { useState, useEffect } from 'react';

function PersistedStateExample() {
  const [name, setName] = useState(() => {
    return localStorage.getItem('name') || '';
  });

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]); // Update localStorage whenever name changes

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Your name is: {name}</p>
    </div>
  );
}

export default PersistedStateExample;

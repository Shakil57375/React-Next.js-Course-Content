import React, { useState } from 'react';

export default function Parent() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <Child onIncrement={handleIncrement} />
    </div>
  );
}

function Child({ onIncrement }) {
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}
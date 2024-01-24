// ChildA.js
import React from 'react';

function ChildA({ count, setCount }) {
  return (
    <div>
      <p>Child A Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ChildA;

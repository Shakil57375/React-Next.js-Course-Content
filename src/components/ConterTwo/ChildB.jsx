// ChildB.js
import React from 'react';

function ChildB({ count, setCount }) {
  return (
    <div>
      <p>Child B Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default ChildB;

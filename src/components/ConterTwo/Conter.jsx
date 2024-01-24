// Conter.js
import React, { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

function ConterTwo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ChildA count={count} setCount={setCount} />
      <ChildB count={count} setCount={setCount} />
    </div>
  );
}

export default ConterTwo;

import React, { createContext, useContext, useState } from "react";

const CountContext = createContext();

export default function ConterThree() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDcrement = () => {
    setCount(count - 1);
  };
  return (
    <CountContext.Provider value={{ count, handleIncrement, handleDcrement }}>
      <div>
        <h1>Count: {count}</h1>
        <ChildIncrement />
        <ChildDcrement />
      </div>
    </CountContext.Provider>
  );
}

function ChildIncrement() {
  const { count, handleIncrement } = useContext(CountContext);
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

function ChildDcrement() {
  const { count, handleDcrement } = useContext(CountContext);
  return (
    <div>
      <button onClick={handleDcrement}>Dcrement</button>
    </div>
  );
}

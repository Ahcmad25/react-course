import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(prev => prev + 1);
  }
  
  function decrement() {
    setCount(prev => prev - 1);
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default Counter;
"use client";
import React, { useState, useEffect } from "react";

export default function FunctionalComponent() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  }
  function reset() {
    setCount(0);
  }
  useEffect(() => {
    console.log("useEffect", count);
  }, [count]);
  return (
    <div>
      <h1>Functional Component</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

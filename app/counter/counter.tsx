"use client";
import React, { useState } from "react";

type Props = {};

export const Counter = (props: Props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((p) => p + 1)}>Incr</button>
    </div>
  );
};

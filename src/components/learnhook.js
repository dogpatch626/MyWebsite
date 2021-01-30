import React, { useState } from "react";

const Example = () => {
  let [count, setCount] = useState(0);

  return (
    <div>
      <p>you clicked {count} tines/</p>
      <button onClick={() => setCount((sup) => sup + 1)}>Click me </button>
    </div>
  );
};
export default Example;

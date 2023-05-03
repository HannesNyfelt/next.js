import React from "react"
import { useState } from "react"

function Counter() {
  const [num, setNum] = useState(0);

  const handlePlusClick = () => {
    setNum(num + 1);
  };

  const handleMinusClick = () => {
    setNum(num - 1);
  };

  const handleNollClick = () => {
    setNum(0);
  };

  return (
    <div id="body">
      <div>
        <p>Count: {num}</p>
        <button id="plus" onClick={handlePlusClick}>
          +
        </button>
        <button id="minus" onClick={handleMinusClick}>
          -
        </button>
        <button id="noll" onClick={handleNollClick}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;

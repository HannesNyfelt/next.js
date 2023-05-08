import React, { useEffect, useState } from "react";

export default function Home() {

  const [nums, setNums] = useState<number[]>([]);

  function click() {
    setNums([
      Math.floor(Math.random() * 5 + 1),
      Math.floor(Math.random() * 5 + 1)
    ]);
  }

  return (
    <>
      <div id="div">
        {nums.map((num, i) => {
          return <img key={i} src={`/images/die${num}.png`} />;
        })}
      </div>
      <button onClick={click} className="button" role="button" id="btn">
        Roll The Dice
      </button>
    </>
  );
}
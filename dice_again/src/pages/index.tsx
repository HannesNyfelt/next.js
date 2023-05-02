import React from "react";

export default function Home() {
  return (
    <>
      <div id="div">
      </div>

      <button className="button" role="button" id="btn">Roll The Dice</button>

    </>
  )
}

const btn = document.querySelector("#btn") as HTMLButtonElement
const div = document.querySelector("#div") as HTMLDivElement
let die = document.createElement("img")
let die2 = document.createElement("img")


btn.addEventListener("click", function () {
  div.append(die)
  const num = Math.floor(Math.random() * 5 + 1)
  die.src = `images/die${num}.png`

  div.append(die2)
  const num2 = Math.floor(Math.random() * 5 + 1)
  die2.src = `images/die${num2}.png`
})
import React from "react";

export default function Home() {
  return (
    <>
      <body className="flex items-center justify-center">
        <div>
          <input type="text" className="text-black" />
          <p>words: <span>0</span></p>
          <p>letters: <span>0</span></p>
          <p>letters without space: <span>0</span></p>
        </div>
      </body>

    </>
  )
}
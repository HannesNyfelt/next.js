import React, { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const wordCount = inputText.trim().split(" ").filter(word => word !== "").length;
  const letterCount = inputText.length;
  const letterCountWithoutSpaces = inputText.replace(/\s/g, "").length;

  const handleInputChange = (e: any) => {
    setInputText(e.target.value);
  };

  return (
    <body className="flex items-center justify-center">
      <div>
        <input
          type="text"
          className="text-black"
          value={inputText}
          onChange={handleInputChange}
        />
        <p>words: <span>{wordCount}</span></p>
        <p>letters: <span>{letterCount}</span></p>
        <p>letters without space: <span>{letterCountWithoutSpaces}</span></p>
      </div>
    </body>
  );
}
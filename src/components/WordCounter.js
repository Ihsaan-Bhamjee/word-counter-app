import React, { useState, useEffect } from "react";
import { Title } from "./Title";

function WordCounter() {
  const [userText, setUserText] = useState("");
  const [wordsCount, setWordsCount] = useState(0);
  const [characterLength, setCharacterLength] = useState(0);

  function handleChange(event) {
    setUserText(event.target.value);
  }

  useEffect(() => {
    const words = userText.split(' ');

    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== '') {
        wordCount++;
      }
    });
    setWordsCount(wordCount);

    setCharacterLength(userText.length);
  }, [userText]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <Title />

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Enter Text</label>
          <textarea
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            value={userText}
            rows="5"
            cols="20"
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-700">Words: {wordsCount}</p>
          <p className="text-sm font-medium text-gray-700">Length: {characterLength}</p>
        </div>
      </div>
    </div>
  );
}

export default WordCounter;

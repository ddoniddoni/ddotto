"use client";
import { useState } from "react";

export default function CreateLotto() {
  const [numbers, setNumbers] = useState([]);

  const generateNumbers = () => {
    const generatedNumbers = [];
    while (generatedNumbers.length < 6) {
      const newNumber = Math.floor(Math.random() * 45) + 1;
      if (!generatedNumbers.includes(newNumber)) {
        generatedNumbers.push(newNumber);
      }
    }
    generatedNumbers.sort((a, b) => a - b);
    setNumbers(generatedNumbers);
  };

  return (
    <div className="w-full">
      <div className="flex flex-row rounded-3xl py-8 bg-gray-800 w-full h-full">
        <button
          className="w-48 h-30 pl-4 text-2xl flex justify-center items-center"
          onClick={generateNumbers}
        >
          Lotto 번호 생성
        </button>
        <div>
          {numbers.map((number, index) => (
            <span key={index}>{number}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

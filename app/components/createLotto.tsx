"use client";
import React, { ChangeEvent, useState } from "react";
import { colorVariants, makeBallColor } from "./lotto";
import Ball from "./ball";

const numOptions = [
  { value: 1, label: "1게임" },
  { value: 2, label: "2게임" },
  { value: 3, label: "3게임" },
  { value: 4, label: "4게임" },
  { value: 5, label: "5게임" },
];
export default function CreateLotto() {
  const [numbers, setNumbers] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const generateNumbers = () => {
    const generatedNumbers = [];
    if (selectedOption === "" || selectedOption === "null") {
      alert("게임 수를 선택해주세요!");
    } else {
      for (let i = 0; i < parseInt(selectedOption); i++) {
        const numbers = [];
        while (numbers.length < 6) {
          const randomNumber = Math.floor(Math.random() * 45) + 1;
          if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
          }
        }
        generatedNumbers.push(makeBallColor(numbers.sort((a, b) => a - b)));
      }
      setNumbers(generatedNumbers);
    }
  };
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-full h-96">
      <div className="flex items-center flex-row rounded-3xl py-8 bg-gray-800 w-full h-full">
        <div className="w-60 h-28 flex text-xl justify-center items-center">
          나만의 번호 생성하기
        </div>
        <div className="w-30 h-28 flex justify-center items-center">
          <select
            className="bg-gray-400 px-4 py-2 border-none rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="null">게임 수 선택</option>
            {numOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <button
          className="ml-5 border-none bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
          onClick={generateNumbers}
        >
          DDotto 번호 생성
        </button>
        <div className="w-[600px] flex flex-col justify-center items-center ml-3">
          {numbers.length > 0 ? (
            numbers.map((ddottos, index) => (
              <div
                className="flex flex-row items-center w-full h-12 mb-3"
                key={index}
              >
                <div className="flex w-20 h-10 font-bold rounded-3xl justify-center items-center text-slate-700 bg-slate-100">
                  게임 {index + 1}
                </div>
                <div className="flex w-full flex-row ml-3">
                  <Ball balls={ddottos} />
                </div>
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

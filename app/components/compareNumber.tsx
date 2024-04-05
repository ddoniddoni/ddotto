import { useState } from "react";
import HistoryTable from "./histoyTable";

interface IData {
  drwNo: number;
  bnusNo: number;
  drwNoDate: string;
  firstAccumamnt: string;
  firstPrzwnerCo: string;
  firstWinamnt: string;
  totSellamnt: string;
  balls: number[];
  rank: string;
  matchedBalls: number[];
  unmatchedballs: number[];
  matchedBonusBall: number[];
  matchedText: string;
}

const inputStyle = "w-8 h-8 mr-3 text-black text-center rounded-md";

const checkLotto = (userNumbers: number[], games: []) => {
  const gamesArray: IData[] = games.map((g) => {
    return {
      drwNo: g["drwNo"],
      bnusNo: g["bnusNo"],
      drwNoDate: g["drwNoDate"],
      firstAccumamnt: g["firstAccumamnt"],
      firstPrzwnerCo: g["firstPrzwnerCo"],
      firstWinamnt: g["firstWinamnt"],
      totSellamnt: g["totSellamnt"],
      balls: [
        g["drwtNo1"],
        g["drwtNo2"],
        g["drwtNo3"],
        g["drwtNo4"],
        g["drwtNo5"],
        g["drwtNo6"],
      ],
      rank: "X",
      matchedBalls: [],
      unmatchedballs: [],
      matchedBonusBall: [],
      matchedText: "",
    };
  });
  for (let i = 0; i < gamesArray.length; i++) {
    let matchedNumbers = 0;
    let matchedBonus = 0;
    for (let j = 0; j < userNumbers.length; j++) {
      if (gamesArray[i].balls.includes(userNumbers[j])) {
        matchedNumbers++;
        gamesArray[i].matchedBalls.push(userNumbers[j]);
      } else {
        gamesArray[i].unmatchedballs.push(userNumbers[j]);
      }

      if (gamesArray[i].bnusNo === userNumbers[j]) {
        matchedBonus++;
        gamesArray[i].matchedBonusBall.push(userNumbers[j]);
      }
      gamesArray[i].matchedText = `${matchedNumbers}${
        matchedBonus > 0 ? " + Bonus" : ""
      }`;
    }
    switch (matchedNumbers) {
      case 6:
        gamesArray[i].rank = "1등";
        break;
      case 5:
        if (matchedBonus === 1) {
          gamesArray[i].rank = "2등";
        } else {
          gamesArray[i].rank = "3등";
        }
        break;
      case 4:
        gamesArray[i].rank = "4등";
        break;
      case 3:
        gamesArray[i].rank = "5등";
        break;
    }
  }
  return gamesArray;
};

export default function CompareNumber({ games }) {
  const [numbers, setNumbers] = useState({});
  const [data, setData] = useState<IData[] | string>([]);
  // const [data, setData] = useState<IData[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validInputValue = Number(e.target.value.replace(/[^0-9]/g, ""));
    if (validInputValue > 45 || validInputValue <= 0) {
      window.alert("1에서 45까지의 숫자만 입력해주세요!");
      e.target.value = "";
    } else {
      setNumbers({
        ...numbers,
        [e.target.name]: Number(e.target.value),
      });
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userNumber: number[] = Object.values(numbers);
    const set = new Set(userNumber);
    if (userNumber.length !== set.size) {
      window.alert("중복된 숫자가 존재합니다.");
    } else {
      const data = checkLotto(userNumber, games);
      setData(data);
    }
  };

  return (
    <div>
      <div className="flex justify-around items-center mt-6 py-4 rounded-3xl bg-gray-800 w-full h-20">
        <form onSubmit={onSubmit}>
          <input
            className={inputStyle}
            type="text"
            name="drwNo1"
            onChange={onChange}
            required
            maxLength={2}
          />
          <input
            className={inputStyle}
            type="text"
            name="drwNo2"
            onChange={onChange}
            required
            maxLength={2}
          />
          <input
            className={inputStyle}
            type="text"
            name="drwNo3"
            onChange={onChange}
            required
            maxLength={2}
          />
          <input
            className={inputStyle}
            type="text"
            name="drwNo4"
            onChange={onChange}
            required
            maxLength={2}
          />
          <input
            className={inputStyle}
            type="text"
            name="drwNo5"
            onChange={onChange}
            required
            maxLength={2}
          />
          <input
            className={inputStyle}
            type="text"
            name="drwNo6"
            onChange={onChange}
            required
            maxLength={2}
          />
          <button
            className="ml-5 border-none bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
            type="submit"
          >
            확인
          </button>
        </form>
      </div>
      <div className="mt-6">
        {data.length > 0 ? <HistoryTable data={data} /> : <></>}
      </div>
    </div>
  );
}

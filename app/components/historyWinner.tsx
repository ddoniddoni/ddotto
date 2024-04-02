"use client";

import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Lotto from "./lotto";
import { getThisWeek } from "../function/getWeek";
import CompareNumber from "./compareNumber";

// 전체 가져오기
// const getAllRoundInfo = async () => {
//   const data = [];
//   const querySnapshot = await getDocs(collection(db, "ddottos"));
//   querySnapshot.forEach((doc) => {
//     console.log(doc.data());
//   });
//   return data;
// };

export default function HistoryWinner() {
  const [rounds, setRounds] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [ballInfo, setBallInfo] = useState(null);
  useEffect(() => {
    let ignore = false;
    //전체 가져오기
    const getAllRoundInfo = async () => {
      const data = [];
      if (!ignore) {
        const querySnapshot = await getDocs(collection(db, "ddottos")); // 전체 가져오기
        querySnapshot.forEach((doc) => {
          data.push(doc.data().drwNo);
        });
      }
      setRounds(data);
    };
    getAllRoundInfo();
    getRoundInfo(String(getThisWeek() - 1));
    return () => {
      ignore = true;
    };
  }, []);

  // 회차값으로 가져오기
  const getRoundInfo = async (round: string) => {
    const docRef = doc(db, "ddottos", round);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // const data = docSnap.data();
      setBallInfo(docSnap.data());
    }
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setSelectedOption(event.target.value);
    getRoundInfo(String(event.target.value));
  };

  const winnerBall = [
    ballInfo?.drwtNo1,
    ballInfo?.drwtNo2,
    ballInfo?.drwtNo3,
    ballInfo?.drwtNo4,
    ballInfo?.drwtNo5,
    ballInfo?.drwtNo6,
  ];

  const bonusBall = ballInfo?.bnusNo;

  return (
    <div>
      <div className="flex justify-center items-center py-4 rounded-3xl bg-gray-800 w-full h-full">
        <p className="text-blue-400 text-3xl font-bold">지난 회차 확인</p>
        <select
          className="bg-gray-400 w-28 ml-4 px-4 py-1 border-none rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          {rounds
            .sort((a, b) => b - a)
            .map((round) => (
              <option key={round} value={round}>
                {round}회
              </option>
            ))}
        </select>
      </div>
      {ballInfo !== null || selectedOption === null ? (
        <Lotto
          bonusBall={bonusBall}
          firstWinnerAmount={ballInfo.firstWinamnt}
          firstWinnerNumber={ballInfo.firstPrzwnerCo}
          totalSellAmount={ballInfo.totSellamnt}
          winnerBall={winnerBall}
        />
      ) : (
        <div className="flex justify-center items-center mt-6 py-4 rounded-3xl bg-gray-800 w-full h-full">
          회차를 선택해주세요!
        </div>
      )}
      <CompareNumber />
    </div>
  );
}

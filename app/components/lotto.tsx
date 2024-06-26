import { makeBallColor } from "../function/makeball";
import Ball from "./ball";

interface ILottoProps {
  winnerBall: number[];
  bonusBall: number;
  totalSellAmount: number;
  firstWinnerAmount: number;
  firstWinnerNumber: number;
}

export default function Lotto({
  winnerBall,
  bonusBall,
  totalSellAmount,
  firstWinnerAmount,
  firstWinnerNumber,
}: ILottoProps) {
  const winnerNumbers = makeBallColor(winnerBall.sort((a, b) => a - b));
  const bonus = makeBallColor([bonusBall]);
  return (
    <div className="w-full">
      <div className="flex flex-row mt-6 rounded-3xl bg-gray-800 w-full h-full">
        <div className="flex w-full justify-center items-center">
          <span className="w-48 h-28 pl-4 text-2xl flex justify-center items-center">
            당첨 번호
          </span>
          <div className="w-full h-full flex justify-evenly items-center">
            <Ball balls={winnerNumbers} />
          </div>
        </div>
        <div className="flex w-full justify-center items-center">
          <span className="w-48 h-28 pl-4 text-2xl flex justify-center items-center">
            보너스 번호
          </span>
          <div className="w-full h-full flex justify-evenly items-center">
            <Ball balls={bonus} />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-evenly rounded-3xl py-8 bg-gray-800 w-full h-full mt-6">
        <div className="flex justify-center items-center px-5  text-2xl w-fit p-3 bg-gray-500 rounded-2xl">
          Lotto 총 판매액 : {totalSellAmount.toLocaleString("ko-KR")}원
        </div>
        <div className="flex justify-center items-center px-5 text-2xl w-fit p-3 bg-gray-500 rounded-2xl">
          1등 1게임당 금액 : {firstWinnerAmount.toLocaleString("ko-KR")}원
        </div>
        <div className="flex justify-center items-center px-5  text-2xl w-fit p-3 bg-gray-500 rounded-2xl">
          1등 당첨자 : {firstWinnerNumber}명
        </div>
      </div>
    </div>
  );
}

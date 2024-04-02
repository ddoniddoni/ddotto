import Lotto from "../components/lotto";
import CreateLotto from "../components/createLotto";
import { Metadata } from "next";
import { getLotto } from "../function/getLotto";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Page() {
  const data = await getLotto();
  const winnerBall = [
    data.drwtNo1,
    data.drwtNo2,
    data.drwtNo3,
    data.drwtNo4,
    data.drwtNo5,
    data.drwtNo6,
  ];
  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <div className="flex flex-col w-2/3 justify-center items-center">
        <div className="flex justify-center items-center py-4 rounded-3xl bg-gray-800 w-full h-full">
          <p className="text-blue-400 text-3xl font-bold">
            {data.drwNo}회 당첨번호
          </p>
          <p className="ml-4 text-blue-400 text-2xl font-bold">
            ({data.drwNoDate})
          </p>
        </div>
        <Lotto
          bonusBall={data.bnusNo}
          winnerBall={winnerBall}
          firstWinnerAmount={data.firstWinamnt}
          firstWinnerNumber={data.firstPrzwnerCo}
          totalSellAmount={data.totSellamnt}
        />
      </div>
      <div className="flex flex-col w-2/3 justify-center items-center mt-6">
        <CreateLotto />
      </div>
      <div className="flex flex-col w-2/3"></div>
    </div>
  );
}

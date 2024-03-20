import { API_URL, FIRST_LOTTO_DATE } from "../constant";
import Lotto from "../components/lotto";
import CreateLotto from "../components/createLotto";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const getKoreaTime = () => {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60 + 1000);
  const koreaTimeDiff = 9 * 60 * 60 * 1000;
  const korNow = new Date(utc + koreaTimeDiff);
  return korNow;
};

const getThisWeek = () => {
  const now = getKoreaTime();
  const firstRound = 1;
  const firstWeek = new Date(FIRST_LOTTO_DATE);
  let diff = Math.abs(now.getTime() - firstWeek.getTime());
  diff = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return Math.floor(diff / 7) + firstRound;
};

async function getLotto() {
  const response = await fetch(API_URL + getThisWeek());
  const json = await response.json();
  return json;
}

export default async function Page() {
  const data = await getLotto();
  getThisWeek();
  const winnerBall = [
    data.drwtNo1,
    data.drwtNo2,
    data.drwtNo3,
    data.drwtNo4,
    data.drwtNo5,
    data.drwtNo6,
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center mt-6">
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
    </div>
  );
}

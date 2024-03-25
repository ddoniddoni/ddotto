import { Metadata } from "next";
import HistoryWinner from "../components/historyWinner";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const metadata: Metadata = {
  title: "history",
};

export interface IDdotto {
  date: string;
  ddottos: string;
}
// Firebase 데이터 삽입
// const setData = async () => {
//   try {
//     await setDoc(doc(db, "ddottos", "1111"), {
//       totSellamnt: 116382835000,
//       returnValue: "success",
//       drwNoDate: "2024-03-16",
//       firstWinamnt: 1714662540,
//       drwtNo6: 45,
//       drwtNo4: 33,
//       firstPrzwnerCo: 16,
//       drwtNo5: 43,
//       bnusNo: 4,
//       firstAccumamnt: 27434600640,
//       drwNo: 1111,
//       drwtNo2: 13,
//       drwtNo3: 30,
//       drwtNo1: 3,
//     });
//     console.log("aa");
//   } catch (e) {
//     console.log(e);
//   }
// };

export default function Page() {
  return (
    <div className="w-full flex justify-center mt-6">
      <div className="w-2/3">
        <div className="flex justify-center items-center py-4 rounded-3xl bg-gray-800 w-full h-20">
          <p className="text-blue-400 text-3xl font-bold">과거 1등 내역</p>
        </div>
        <HistoryWinner />
      </div>
    </div>
  );
}

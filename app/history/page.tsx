import { Metadata } from "next";
import HistoryWinner from "../components/historyWinner";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const metadata: Metadata = {
  title: "history",
};
// Firebase 데이터 삽입
// const setData = async () => {
//   try {
//     await setDoc(doc(db, "ddottos", "1112"), {
//       totSellamnt: 114216084000,
//       drwNoDate: "2024-03-23",
//       firstWinamnt: 2804455650,
//       drwtNo6: 44,
//       drwtNo4: 36,
//       firstPrzwnerCo: 10,
//       drwtNo5: 42,
//       bnusNo: 24,
//       firstAccumamnt: 28044556500,
//       drwNo: 1112,
//       drwtNo2: 20,
//       drwtNo3: 26,
//       drwtNo1: 16,
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
        <HistoryWinner />
      </div>
    </div>
  );
}

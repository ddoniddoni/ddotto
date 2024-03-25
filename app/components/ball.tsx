import { colorVariants } from "./lotto";

interface IBall {
  balls: Ball[];
}

interface Ball {
  number: number;
  color: string;
}

export default function Ball({ balls }: IBall) {
  const ballList = balls.map((ball) => (
    <div
      key={ball.number}
      className={`w-10 h-10 flex justify-center items-center font-semibold text-2xl text-black
       ${colorVariants[ball.color]} rounded`}
    >
      <p>{ball.number}</p>
    </div>
  ));
  return (
    <div className="flex justify-around items-center w-full">{ballList}</div>
  );
}

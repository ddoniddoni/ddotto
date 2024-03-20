interface IBall {
  number: number;
  color: string;
}

export default function Ball({ number, color }) {
  console.log(number, color);
  return (
    <div
      className={`flex
      justify-center
      items-center 
      text-4xl
      text-black
      font-bold
      w-20 h-20 ${color} 
      rounded-full`}
    >
      {number}
    </div>
  );
}

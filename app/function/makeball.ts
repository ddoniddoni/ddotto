export const makeBallColor = (balls: number[]) => {
  let array = [];
  balls.forEach((ball) => {
    let color = "";
    if (ball < 10) color = "red";
    if (10 <= ball && ball < 20) color = "orange";
    if (20 <= ball && ball < 30) color = "yellow";
    if (30 <= ball && ball < 40) color = "green";
    if (40 <= ball) color = "blue";
    array.push({
      number: ball,
      color,
    });
  });
  return array;
};

export const colorVariants = {
  red: "bg-red-500 hover:bg-red-400 text-black",
  orange: "bg-orange-500 hover:bg-orange-400 text-black",
  yellow: "bg-yellow-300 hover:bg-yellow-400 text-black",
  green: "bg-green-500 hover:bg-green-400 text-black",
  blue: "bg-blue-600 hover:bg-blue-500 text-black",
  indigo: "bg-indigo-600 hover:bg-indigo-600 text-black",
  purple: "bg-purple-500 hover:bg-purple-400 text-black",
};

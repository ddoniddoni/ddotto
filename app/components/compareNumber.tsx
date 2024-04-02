import { useState } from "react";

export default function CompareNumber() {
  const [numbers, setNumbers] = useState({});
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumbers({
      ...numbers,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(numbers));
    console.log(numbers);
  };
  return (
    <div className="flex justify-around items-center mt-6 py-4 rounded-3xl bg-gray-800 w-full h-full">
      <form onSubmit={onSubmit}>
        <input type="text" name="drwNo1" onChange={onChange} />
        <input type="text" name="drwNo2" onChange={onChange} />
        <input type="text" name="drwNo3" onChange={onChange} />
        <input type="text" name="drwNo4" onChange={onChange} />
        <input type="text" name="drwNo5" onChange={onChange} />
        <input type="text" name="drwNo6" onChange={onChange} />
        <button type="submit">확인</button>
      </form>
    </div>
  );
}

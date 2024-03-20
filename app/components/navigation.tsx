"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className="fixed top-4 rounded-3xl my-5 mx-0 z-10 -translate-x-1/2 left-1/2  p-20-0 bg-gray-800 w-2/6 h-16 flex justify-start items-center">
      <ul className="flex w-full justify-around">
        <li
          className={`flex justify-center items-center ${
            path === "/" ? "text-blue-700" : "text-gray-300"
          } hover:text-white list-none`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`flex justify-center items-center ${
            path === "/history" ? "text-blue-700" : "text-gray-300"
          } hover:text-white list-none`}
        >
          <Link href="/history">history</Link>
        </li>
      </ul>
    </nav>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <div className="flex justify-center mt-16">
      <nav className="flex w-2/3 h-20 bg-gray-800 rounded-3xl">
        <ul className="flex w-full">
          <li
            className={`flex justify-center items-center ${
              path === "/" ? "text-yellow-400" : "text-gray-300"
            } hover:text-white list-none text-2xl ml-5`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`flex justify-center items-center ${
              path === "/history" ? "text-yellow-400" : "text-gray-300"
            } hover:text-white list-none text-2xl m-5`}
          >
            <Link href="/history">history</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

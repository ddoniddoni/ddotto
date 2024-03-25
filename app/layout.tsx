import { Metadata } from "next";
import Navigation from "./components/navigation";
import "../styles/global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | ddotto",
    default: "ddotto",
  },
  description: "Lotto 분석",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-w-[1920px] bg-neutral-900 text-zinc-200">
        <Navigation />
        {children}
      </body>
    </html>
  );
}

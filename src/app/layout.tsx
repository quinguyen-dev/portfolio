import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import type { LinkProps } from "next/";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Qui Nguyen's Portfolio Website",
  description: "Generated by create next app",
  keywords: [
    "Developer Portfolio",
    "NextJS",
    "TailwindCSS",
    "TypeScript",
    "Mobile Development",
    "Web Development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <nav>
          <ul>
            <li>
              <Link href="/home">HOME</Link>
            </li>
            <li>
              <Link href="/work">WORK</Link>
            </li>
            <li>
              <Link href="/resume">RESUME</Link>
            </li>
          </ul>
        </nav>
      </body>
    </html>
  );
}

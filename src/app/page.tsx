import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav className="w-full justify-between flex text-grey-900 text-xl font-bold">
        <Link className="hover:underline" href="/">
          Daniel Echevarria
        </Link>
        <Link className="hover:underline" href="/about">
          About
        </Link>
      </nav>
      <main className="w-full">
        <h1 className=" font-semibold text-7xl">Full Stack Web Developer</h1>
        <Image
          className="dark:invert"
          src="/me.jpg"
          alt="daniel echevarria"
          width={1000}
          height={400}
          priority
        />
      </main>
      <footer>
        <div className="text-align: center; padding: 1rem; background-color: #f4f4f4;">
          <p>&copy; 2024 Daniel Echevarria. All Rights Reserved.</p>
          <p>
            <a
              href="https://github.com/daniel-echevarria"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            '|
            <a
              href="https://www.linkedin.com/in/daniel-e-772683335"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            |<a href="mailto:dan.echevarri@gmail.com">Contact</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

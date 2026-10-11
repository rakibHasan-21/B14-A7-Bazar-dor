"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[#fbfdfb] px-5 text-center text-[#102f2b]">
      {/* Header */}
      <header className="flex w-full max-w-7xl items-center justify-between py-6">
        <Link href="/" className="text-2xl font-bold text-[#176044]">
          🌿 BazarDor
        </Link>

        <Link
          href="/"
          className="rounded-full bg-[#eaf4ee] px-5 py-3 font-semibold text-[#176044] transition hover:bg-[#dcece1]"
        >
          Back to Home
        </Link>
      </header>

      {/* Animated 404 */}
      <section className="flex flex-1 flex-col items-center justify-center pb-12">
        <div className="relative mb-5 flex items-center justify-center">
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 z-10 text-8xl"
          >
            🐱
          </motion.div>

          <motion.h1
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-[150px] font-black leading-none tracking-tighter text-[#176044] sm:text-[240px]"
          >
            404
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="mb-4 text-3xl font-extrabold sm:text-5xl">
            Page Not Found
          </h2>

          <p className="mx-auto mb-8 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
            Oops! The page you are looking for might have been removed,
            had its name changed, or is temporarily unavailable.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-2xl bg-[#197653] px-8 py-4 font-bold text-white shadow-lg shadow-green-900/15 transition duration-300 hover:-translate-y-1 hover:bg-[#125d40]"
          >
            <span>⌂</span>
            Back to Home
          </Link>

          <p className="mt-10 text-sm text-slate-400">
            Go back to home or try searching for what you need.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
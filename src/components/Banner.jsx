import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="w-full bg-[#eff4f0] px-3 py-5 sm:px-5">
      <div className="relative mx-auto flex max-w-[1180px] items-center justify-between overflow-hidden rounded-[28px] border border-[#e3eae5] bg-[#fafdfb] px-6 py-4">
        {/* Left content */}
        <div className="relative z-10 max-w-[470px]">
          <span className="inline-block rounded-full bg-[#dcf1e4] px-3 py-1 text-[12px] font-semibold leading-none text-[#0b7a3b]">
            মঙ্গলবার, ৬ অক্টোবর, ২০২৬
          </span>

          <h1 className="mt-3 text-[28px] font-bold leading-[1.25] tracking-tight text-[#0c1a12] sm:text-[32px]">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-5 max-w-[450px] text-[13.5px] leading-[1.7] text-[#4b5a52]">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <Link
            href="/products"
            className="mt-6 inline-flex h-[34px] items-center rounded-md bg-[#058a3e] px-5 text-[12px] font-semibold text-white shadow-[0_3px_0_0_#04652d] transition hover:bg-[#047a37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#058a3e]"
          >
            সব পণ্য দেখুন
          </Link>
        </div>

        {/* Right illustration */}
        <div className="pointer-events-none hidden shrink-0 pr-8 sm:block md:pr-12">
          <Image
            src={"/bazar-hero.png"}
            alt="bazar-hero"
            width={360}
            height={360}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

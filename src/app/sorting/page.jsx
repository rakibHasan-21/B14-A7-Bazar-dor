"use client";

import { useState } from "react";
import Link from "next/link";

const Sorting = ({ product = [] }) => {
  const [sortBy, setSortBy] = useState("default");

  const sortedProducts = [...product].sort((a, b) => {
    const todayA = Number(a.today) || 0;
    const todayB = Number(b.today) || 0;
    const yesterdayA = Number(a.yesterday) || 0;
    const yesterdayB = Number(b.yesterday) || 0;

    switch (sortBy) {
      case "today-low":
        return todayA - todayB;

      case "today-high":
        return todayB - todayA;

      case "yesterday-low":
        return yesterdayA - yesterdayB;

      case "yesterday-high":
        return yesterdayB - yesterdayA;

      default:
        return 0;
    }
  });

  return (
    <div>
      <div className="mb-6 flex justify-end">
        <div className="flex w-full items-center gap-3 rounded-2xl border border-[#e2e9df] bg-white p-3 shadow-sm sm:w-auto">
          

          <div className="min-w-0 flex-1 sm:min-w-[230px]">
            <p className="mb-1 text-xs font-semibold text-gray-500">
              পণ্য সাজান
            </p>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full cursor-pointer rounded-lg border border-[#e2e9df] bg-[#f8faf6] px-3 py-2.5 text-sm font-medium text-[#263526] outline-none transition-all duration-200 hover:border-[#86b77a] focus:border-[#5b9650] focus:ring-2 focus:ring-[#5b9650]/15"
            >
              <option value="default">ডিফল্ট</option>
              <option value="today-low">দাম: কম থেকে বেশি</option>
              <option value="yesterday-high">দাম: বেশি থেকে কম</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <Link
            key={product.id}
            href={`/selectProducts/${product.id}`}
            className="block rounded-2xl border border-[#dfe7de] bg-[#fbfdfb] p-4 transition duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f0f5ef] text-2xl">
                {product.image || product.categoryIcon || "🍚"}
              </div>

              <div>
                <h2 className="font-bold text-[#202820]">{product.nameBn}</h2>

                <p className="text-xs text-gray-500">
                  প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
                </p>
              </div>
            </div>

            <p className="mb-1 text-xs text-gray-500">আজকের দাম</p>

            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-[#202820]">
                {product.today} টাকা
              </p>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  product.change?.dir === "up"
                    ? "bg-red-50 text-red-600"
                    : product.change?.dir === "down"
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-100 text-gray-600"
                }`}
              >
                {product.change?.dir === "up"
                  ? "▲"
                  : product.change?.dir === "down"
                    ? "▼"
                    : "—"}{" "}
                {product.change?.pct ?? 0}%
              </span>
            </div>
          </Link>
        ))}
      </div>

      {sortedProducts.length === 0 && (
        <div className="rounded-2xl border border-[#dfe7de] bg-white p-10 text-center">
          এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
        </div>
      )}
    </div>
  );
};

export default Sorting;

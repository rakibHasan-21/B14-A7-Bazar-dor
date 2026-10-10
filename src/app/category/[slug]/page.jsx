import Link from "next/link";
import React from "react";

const Slug = async ({ params }) => {
  const { slug } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${slug}`,
    { cache: "force-cache" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  const products = Array.isArray(data) ? data : data.data || [];

  return (
    <div className="min-h-screen bg-[#f1f5ef] px-4 py-6">
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
        <div className="mb-5 flex items-center gap-4 rounded-2xl border border-[#dfe7de] bg-[#fbfdfb] p-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f0f5ef] text-3xl">
            {products[0]?.categoryIcon || "🍚"}
          </div>

          <div>
            <h1 className="text-2xl font-bold text-[#202820]">
              {products[0]?.categoryNameBn || "পণ্য"}
            </h1>
            <p className="text-sm text-gray-500">
              প্রতিদিনের বাজারদর ও পরিবর্তন
            </p>
          </div>
        </div>

        {/* Sorting / Product count */}
        <div className="mb-4 flex items-center justify-between rounded-2xl border border-[#dfe7de] bg-[#fbfdfb] px-5 py-4">
          <p className="text-sm text-gray-600">
            মোট {products.length}টি পণ্য দেখানো হচ্ছে
          </p>

          <span className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-600">
            ডিফল্ট
          </span>
        </div>

        {/* Product Cards */}


        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
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

        {/* Empty State */}
        {products.length === 0 && (
          <div className="rounded-2xl border border-[#dfe7de] bg-white p-10 text-center">
            <p className="text-gray-600">
              এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slug;

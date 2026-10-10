import React from "react";

const IdSlug = async ({ params }) => {
  const { idSulg } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${idSulg}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const result = await res.json();
  const product = result.data ?? result;

  if (!product?.id) {
    return (
      <div className="min-h-screen bg-[#f0f5ef] p-10 text-center">
        পণ্য পাওয়া যায়নি।
      </div>
    );
  }

  const markets = product.markets ?? [];

  const prices = markets.flatMap((market) => [
    Number(market.min),
    Number(market.max),
  ]).filter(Number.isFinite);

  const minPrice = prices.length
    ? Math.min(...prices)
    : Number(product.today);

  const maxPrice = prices.length
    ? Math.max(...prices)
    : Number(product.today);

  const avgPrice = prices.length
    ? Math.round(
        prices.reduce((sum, price) => sum + price, 0) / prices.length
      )
    : Number(product.today);

  const taka = (price) =>
    `৳ ${Number(price).toLocaleString("bn-BD")}`;

  return (
    <main className="min-h-screen bg-[#f0f5ef] px-3 py-4 text-[#263027] sm:px-6 sm:py-6">
      <div className="mx-auto max-w-5xl">

        {/* Breadcrumb */}
        <div className="mb-4 text-[11px] text-gray-500">
          হোম <span className="mx-1">›</span>
          {product.categoryNameBn}
          <span className="mx-1">›</span>
          {product.nameBn}
        </div>

        {/* Product Header */}
        <section className="mb-3 flex items-center justify-between gap-3 rounded-xl border border-[#e1e9e0] bg-[#fbfdfb] p-3 sm:p-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f0f5ef] text-2xl">
              {product.image || product.categoryIcon || "🍚"}
            </div>

            <div className="min-w-0">
              <h1 className="text-base font-extrabold sm:text-lg">
                {product.nameBn}
              </h1>
              <p className="mt-0.5 text-[10px] text-gray-500">
                {product.categoryNameBn} · প্রতি{" "}
                {product.unit === "kg" ? "কেজি" : product.unit}
              </p>
              <p className="mt-1 text-[10px] text-gray-600">
                গতকালের তুলনায় আজকের দাম <span className="font-semibold">বেড়েছে</span> · {taka(product.today)}
              </p>
            </div>
          </div>

          <div className="shrink-0 rounded-xl bg-[#f0f5ef] px-3 py-2 text-center">
            <p className="text-[9px] text-gray-500">আজকের দাম</p>
            <p className="text-xl font-extrabold leading-tight">
              {Number(product.today).toLocaleString("bn-BD")}
            </p>
            <p className="text-[9px] text-gray-500">
              টাকা / {product.unit === "kg" ? "কেজি" : product.unit}
            </p>
            <p
              className={`mt-0.5 text-[9px] font-semibold ${
                product.change?.dir === "up"
                  ? "text-red-600"
                  : product.change?.dir === "down"
                    ? "text-green-700"
                    : "text-gray-500"
              }`}
            >
              {product.change?.dir === "up"
                ? "▲"
                : product.change?.dir === "down"
                  ? "▼"
                  : "—"}{" "}
              {product.change?.pct ?? 0}%
            </p>
          </div>
        </section>

        {/* Price Summary + Market Table */}
        <section className="rounded-xl border border-[#e1e9e0] bg-[#fbfdfb] p-3 sm:p-4">

          <h2 className="mb-3 text-xs font-bold">
            দামের সারসংক্ষেপ
          </h2>

          <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
            <div className="rounded-xl border border-[#e1e9e0] p-3">
              <p className="text-[10px] text-gray-500">সর্বনিম্ন দাম</p>
              <p className="mt-1 text-base font-extrabold text-emerald-600">
                {taka(minPrice)}
              </p>
              <p className="mt-0.5 text-[9px] text-gray-500">
                বাজারের সর্বনিম্ন দর
              </p>
            </div>

            <div className="rounded-xl border border-[#e1e9e0] p-3">
              <p className="text-[10px] text-gray-500">সর্বোচ্চ দাম</p>
              <p className="mt-1 text-base font-extrabold text-red-600">
                {taka(maxPrice)}
              </p>
              <p className="mt-0.5 text-[9px] text-gray-500">
                বাজারের সর্বোচ্চ দর
              </p>
            </div>

            <div className="rounded-xl border border-[#e1e9e0] p-3">
              <p className="text-[10px] text-gray-500">গড় দাম</p>
              <p className="mt-1 text-base font-extrabold text-emerald-600">
                {taka(avgPrice)}
              </p>
              <p className="mt-0.5 text-[9px] text-gray-500">
                গড় বাজারদরের হিসাব
              </p>
            </div>
          </div>

          <h2 className="mb-3 text-xs font-bold">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="overflow-x-auto rounded-xl border border-[#e1e9e0]">
            <table className="w-full min-w-[540px] border-collapse text-left text-[10px] sm:text-xs">
              <thead className="bg-[#f8faf7] text-gray-500">
                <tr>
                  <th className="px-3 py-3 font-medium">বাজার</th>
                  <th className="px-3 py-3 font-medium">বিভাগ</th>
                  <th className="px-3 py-3 text-right font-medium">সর্বনিম্ন</th>
                  <th className="px-3 py-3 text-right font-medium">সর্বোচ্চ</th>
                  <th className="px-3 py-3 text-right font-medium">গড়</th>
                </tr>
              </thead>

              <tbody>
                {markets.map((market, index) => {
                  const marketAvg = (Number(market.min) + Number(market.max)) / 2;

                  return (
                    <tr
                      key={`${market.market}-${index}`}
                      className={`border-b border-[#dfe5de] transition last:border-0 hover:bg-[#e8f0e7] ${
                        index % 2 === 0 ? "bg-white" : "bg-[#f0f5ef]"
                      }`}
                    >
                      <td className="px-3 py-3 font-medium">
                        {market.market}
                      </td>
                      <td className="px-3 py-3">{market.division}</td>
                      <td className="px-3 py-3 text-right">
                        {taka(market.min)}
                      </td>
                      <td className="px-3 py-3 text-right">
                        {taka(market.max)}
                      </td>
                      <td className="px-3 py-3 text-right font-semibold">
                        {taka(marketAvg.toFixed(2))}
                      </td>
                    </tr>
                  );
                })}

                {markets.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-3 py-8 text-center text-gray-500"
                    >
                      বাজারের তথ্য পাওয়া যায়নি।
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
};

export default IdSlug;
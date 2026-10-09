import Link from "next/link";
import React from "react";

const Marquees = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const allData = data;

  // console.log("PRODUCTS:", allData);

  return (
    <div className="border-t border-gray-100 bg-gray-50 py-3">
      <div className="overflow-hidden px-4">
        <div className="flex gap-8">
          {allData.map((product) => (
            <Link
              href={`/products/${product.slug}`}
              key={product.id}
              className="flex shrink-0 items-center gap-2 text-sm"
            >
              <span>{product.categoryIcon}</span>

              <span className="font-medium text-gray-800">
                {product.nameBn}
              </span>

              <span className="font-semibold text-green-600">
                ৳{product.today}/{product.unit}
              </span>

              {product.change?.dir === "up" ? (
                <span className="text-red-500">⬆ {product.change.pct}%</span>
              ) : (
                <span className="text-green-500">⬇ {product.change?.pct}%</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquees;

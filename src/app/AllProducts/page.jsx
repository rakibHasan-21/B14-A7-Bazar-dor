import Link from "next/link";
import React from "react";

const AllProducts = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
    { cache: "force-cache" },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const AllProducts = await res.json();
  console.log(AllProducts);
  return (
    <div className="mx-auto max-w-[1180px] py-8">
      <h2 className="font-bold text-3xl mb-5">
        <span className="text-red-600"></span>সব পণ্য
      </h2>
        <p className="text-gray-500 mb-4">মোট 33 টি পণ্য দেখানো হচ্ছে</p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {AllProducts.map((data) => (
          <Link
            href={`/products${data.slug}`}
            key={data.id}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div>
              <div className="mb-1 text-sm  flex">
                <p className="text-3xl text-gray-500">{data.image}</p>
                <div className="">
                  <p className="text-xl ml-3">{data.nameBn}</p>
                  <p className="ml-3">প্রতি কেজি</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-500">আজকের দাম</p>

                <div className="mt-1 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-green-600">
                      ৳{data.today}
                    </span>

                    <span className="ml-1 text-sm text-gray-500">
                      / {data.unit}
                    </span>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      data.change.dir === "up"
                        ? "bg-red-100 text-red-600"
                        : data.change.dir === "down"
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {data.change.dir === "up"
                      ? "⬆"
                      : data.change.dir === "down"
                        ? "↓"
                        : "—"}{" "}
                    {data.change.pct}%
                  </span>
                </div>
              </div>

              <div className="mt-3 border-t pt-3 text-sm text-gray-500">
                {/* গতকালের দাম: ৳{data.yesterday} / {data.unit} */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;

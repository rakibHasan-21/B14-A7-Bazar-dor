import Link from "next/link";

const Products2 = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products",{ cache: "force-cache" },);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const products = await res.json();
  const filter = products
    .filter(
      (product) =>
        product.change?.dir === "down" &&
        product.change.pct < 0,
    )
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <div className="mx-auto max-w-[1180px] py-8">
      <h2 className="mb-5 text-3xl font-bold">
        <span className="text-green-600">⬇</span> আজ দাম কমেছে
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filter.map((data) => (
          <Link
            href={`/products/${data.slug}`}
            key={data.id}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div>
              <div className="mb-1 flex items-center">
                <p className="text-3xl text-gray-500">
                  {data.image}
                </p>

                <div>
                  <p className="ml-3 text-xl">
                    {data.nameBn}
                  </p>

                  <p className="ml-3 text-sm text-gray-500">
                    প্রতি {''}
                    {data.unit === "kg"
                      ? "কেজি"
                      : data.unit === "litre"
                        ? "লিটার"
                        : data.unit}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  আজকের দাম
                </p>

                <div className="mt-1 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-2xl font-bold text-green-600">
                      ৳{data.today}
                    </span>

                    <span className="ml-1 text-sm text-gray-500">
                      / {data.unit}
                    </span>
                  </div>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                    ↓ {Math.abs(data.change.pct)}%
                  </span>
                </div>
              </div>

              <div className="mt-3 border-t pt-3 text-sm text-gray-500"></div>
            </div>
          </Link>
        ))}
      </div>

      {filter.length === 0 && (
        <p className="text-gray-500">
          আজ দাম কমেছে এমন কোনো প্রোডাক্ট পাওয়া যায়নি।
        </p>
      )}
    </div>
  );
};

export default Products2;
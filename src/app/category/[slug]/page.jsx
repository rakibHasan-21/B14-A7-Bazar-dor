import Sorting from "@/app/sorting/page";

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

        <div className="mb-4 rounded-2xl border border-[#dfe7de] bg-[#fbfdfb] px-5 py-4">
          মোট {products.length} টি পণ্য দেখানো হচ্ছে
          <div className="mb-5">
            <Sorting product={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slug;

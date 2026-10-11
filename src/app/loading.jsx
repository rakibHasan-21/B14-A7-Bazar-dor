"use client"
export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8faf7]">
      {/* Header */}
      <header className="border-b border-[#e8eee5] bg-white px-5 py-4">
        <div className="mx-auto flex max-w-6xl items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#326b3a] text-2xl text-white">
            🛒
          </div>

          <div>
            <h1 className="text-xl font-bold text-[#24532d]">
              বাজার দর
            </h1>
            <p className="text-xs text-gray-500">
              সঠিক দামে সেরা বাজার
            </p>
          </div>
        </div>
      </header>

      {/* Loading Content */}
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-5 py-12">
        <div className="relative mb-7 flex h-28 w-28 items-center justify-center rounded-[32px] bg-[#e8f3e5]">
          <div className="absolute inset-2 animate-pulse rounded-[26px] bg-white" />

          <span className="relative text-5xl">🥬</span>

          <div className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#326b3a] text-xl text-white shadow-lg">
            ✓
          </div>
        </div>

        <div className="mb-3 flex items-center gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#326b3a]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#6c9b70] [animation-delay:150ms]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#a4c7a0] [animation-delay:300ms]" />
        </div>

        <h2 className="text-center text-2xl font-bold text-gray-800 sm:text-3xl">
          বাজারদর খোঁজা হচ্ছে
        </h2>

        <p className="mt-3 max-w-sm text-center text-sm leading-7 text-gray-500">
          আপনার জন্য সর্বশেষ পণ্যের দাম ও বাজারের তথ্য নিয়ে আসছি।
          অনুগ্রহ করে একটু অপেক্ষা করুন।
        </p>

        <div className="mt-8 h-2 w-56 overflow-hidden rounded-full bg-[#e3ebdf]">
          <div className="h-full w-1/2 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-[#326b3a]" />
        </div>

        {/* Skeleton Product Cards */}
        <div className="mt-14 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#e8eee5] bg-white p-4 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="h-16 w-16 shrink-0 animate-pulse rounded-xl bg-[#edf2ea]" />

                <div className="flex-1 space-y-3">
                  <div className="h-3 w-3/4 animate-pulse rounded-full bg-gray-200" />
                  <div className="h-3 w-1/2 animate-pulse rounded-full bg-gray-100" />
                </div>
              </div>

              <div className="h-4 w-1/3 animate-pulse rounded-full bg-[#e3ebdf]" />

              <div className="mt-4 h-9 w-full animate-pulse rounded-xl bg-gray-100" />
            </div>
          ))}
        </div>
      </main>

      <footer className="py-5 text-center text-xs text-gray-400">
        © বাজার দর · আপনার বিশ্বস্ত বাজার সহকারী
      </footer>

      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </div>
  );
}
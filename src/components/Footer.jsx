import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-[1180px] px-4 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-white"
            >
              বাজার<span className="text-green-500">দর</span>
            </Link>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              নিত্যপ্রয়োজনীয় পণ্যের দৈনিক বাজারদর জানুন
              সহজেই। চাল, ডাল, তেল, সবজিসহ বিভিন্ন পণ্যের
              দাম দেখে সচেতনভাবে আপনার বাজার পরিকল্পনা করুন।
            </p>

            <p className="mt-4 text-sm text-green-400">
              আপনার বাজার, আপনার হিসাব।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              গুরুত্বপূর্ণ লিংক
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-green-400"
                >
                  হোম
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="transition hover:text-green-400"
                >
                  সকল পণ্যের দাম
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-green-400"
                >
                  আমাদের সম্পর্কে
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-green-400"
                >
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              বাজারের ক্যাটাগরি
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/category/chal"
                  className="transition hover:text-green-400"
                >
                  🍚 চাল
                </Link>
              </li>

              <li>
                <Link
                  href="/category/dal"
                  className="transition hover:text-green-400"
                >
                  🫘 ডাল
                </Link>
              </li>

              <li>
                <Link
                  href="/category/tel"
                  className="transition hover:text-green-400"
                >
                  🫗 তেল
                </Link>
              </li>

              <li>
                <Link
                  href="/category/sobji"
                  className="transition hover:text-green-400"
                >
                  🥦 শাকসবজি
                </Link>
              </li>
            </ul>
          </div>

          {/* About Bazar Dor */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              কেন বাজারদর?
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>✓ সহজেই পণ্যের দাম দেখুন</li>
              <li>✓ দাম বৃদ্ধি ও হ্রাস সম্পর্কে জানুন</li>
              <li>✓ বিভিন্ন সময়ের দাম তুলনা করুন</li>
              <li>✓ পরিকল্পনা করে বাজার করুন</li>
            </ul>

            <p className="mt-4 text-xs leading-6 text-gray-500">
              প্রদর্শিত দাম তথ্যসূত্র ও সর্বশেষ ডেটার ওপর
              নির্ভরশীল। কেনার আগে স্থানীয় বাজারে দাম
              যাচাই করে নিন।
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm sm:flex-row sm:text-left">
            <p className="text-gray-400">
              © 2026 বাজারদর।
              সর্বস্বত্ব সংরক্ষিত।
            </p>

            <p className="text-gray-500">
              সচেতন বাজার, সাশ্রয়ী জীবন ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
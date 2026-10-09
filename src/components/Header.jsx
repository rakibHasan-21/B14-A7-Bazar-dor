import Image from "next/image";
import Link from "next/link";
import HeaderDate from "./HeaderDate";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4">
        <div className="py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-icon.png"
              alt="বাজার দর"
              width={50}
              height={50}
              className="rounded-xl"
            />

            <div>
              <h1 className="text-xl font-bold text-gray-900">বাজার দর</h1>
              <HeaderDate></HeaderDate>
            </div>
          </Link>

          <nav className="mt-4">
            <NavLink />
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/sign-in"
            className="text-sm font-medium text-gray-700 hover:text-green-600"
          >
            সাইন ইন
          </Link>

          <Link
            href="/sign-up"
            className="rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700"
          >
            সাইন আপ
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

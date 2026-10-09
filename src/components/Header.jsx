// "use client"

import Image from "next/image";
import Link from "next/link";
import HeaderDate from "./HeaderDate";
import NavLink from "./NavLink";
import Button from "./Button";

const Header = () => {
  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between px-4">
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
              <h1 className="text-xl font-bold text-gray-900">
                বাজার দর
              </h1>
              <HeaderDate />
            </div>
          </Link>

          <nav className="mt-4">
            <NavLink />
          </nav>
        </div>

        <div className="flex items-center gap-4 py-4">
        
            {/* <Button></Button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;


"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "@/lib/auth-client";
import {
  ChevronDown,
  UserRound,
  LogOut,
} from "lucide-react";

const Button = () => {
  const { data: session, isPending } = useSession();
  const user = session?.user;

  const [menuOpen, setMenuOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);

  // Sign Out
  const handleSignOut = async () => {
    setSigningOut(true);

    try {
      const { error } = await signOut();

      if (error) {
        console.error("Sign out error:", error);
        setSigningOut(false);
        return;
      }

      setMenuOpen(false);
    } catch (error) {
      console.error("Sign out failed:", error);
    } finally {
      setSigningOut(false);
    }
  };

  // Loading
  if (isPending) {
    return (
      <p className="text-sm text-gray-500">
        লোড হচ্ছে...
      </p>
    );
  }

  return (
    <div className="flex items-center gap-4">
      {user ? (
        <div
          className="relative"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          {/* User Dropdown Trigger */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-haspopup="true"
            className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-2 py-1.5 transition hover:border-green-300 hover:bg-green-50"
          >
            {/* Avatar */}
            <div className="avatar">
              <div className="w-10 rounded-full ring-2 ring-green-500 ring-offset-2">
                <img
                  alt="User avatar"
                  src={
                    user.image ||
                    "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                  }
                />
              </div>
            </div>

            {/* User Name */}
            <span className="max-w-28 truncate text-sm font-semibold text-gray-800">
              {user.name || "User"}
            </span>

            {/* Dropdown Arrow */}
            <ChevronDown
              size={18}
              className={`text-gray-500 transition-transform duration-200 ${
                menuOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 top-full z-50 w-56 pt-2">
              <div className="rounded-xl border border-gray-100 bg-white p-2 shadow-xl">
                {/* User Information */}
                <div className="border-b border-gray-100 px-3 py-3">
                  <p className="truncate text-sm font-semibold text-gray-800">
                    {user.name || "User"}
                  </p>

                  <p className="mt-1 truncate text-xs text-gray-500">
                    {user.email}
                  </p>
                </div>

                {/* Edit Profile */}
                <Link
                  href="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-green-50 hover:text-green-700"
                >
                  <UserRound size={17} />
                  Edit Profile
                </Link>

                {/* Sign Out */}
                <button
                  type="button"
                  onClick={handleSignOut}
                  disabled={signingOut}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 transition hover:bg-red-50 disabled:opacity-60"
                >
                  <LogOut size={17} />
                  {signingOut ? "Signing out..." : "Sign Out"}
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          {/* Sign In */}
          <Link
            href="/sign-in"
            className="text-sm font-medium text-gray-700 transition hover:text-green-600"
          >
            সাইন ইন
          </Link>

          {/* Sign Up */}
          <Link
            href="/sign-up"
            className="rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            সাইন আপ
          </Link>
        </>
      )}
    </div>
  );
};

export default Button;
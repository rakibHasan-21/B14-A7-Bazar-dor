"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";

const LinkButton = () => {
  const { data: session, isPending } = useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    const { error } = await signOut();

    if (error) {
      console.log("Sign out error:", error);
      return;
    }

    window.location.href = "/signIn";
  };

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {user ? (
        <div className="flex items-center gap-3">
          <details className="dropdown dropdown-end relative">
            <summary className="flex cursor-pointer list-none items-center gap-3 rounded-lg p-2 transition hover:bg-gray-100">

              <div className="avatar">
                <div className="w-10 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
                  <img
                    alt="User avatar"
                    src={
                      user.image ||
                      "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                    }
                  />
                </div>
              </div>

              <span className="font-medium text-gray-800">{user.name}</span>
            </summary>

            <ul className="menu absolute right-0 top-full z-[999] mt-3 w-52 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
              {/* User Info */}
              <li className="pointer-events-none mb-2 border-b border-gray-100 pb-2">
                <div className="flex flex-col items-start gap-1">
                  <span className="font-semibold text-gray-800">
                    {user.name}
                  </span>

                  <span className="max-w-full break-all text-xs text-gray-500">
                    {user.email}
                  </span>
                </div>
              </li>

              <li>
                <Link href="/profile">Edit Profile</Link>
              </li>

              <li>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="text-red-600 hover:bg-red-50"
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </details>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <Link
            href="/signIn"
            className="rounded-lg border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 transition duration-200 hover:border-gray-400 hover:bg-gray-50"
          >
            সাইন ইন
          </Link>

          <Link
            href="/signUp"
            className="rounded-lg bg-gray-900 px-5 py-2 text-sm font-medium text-white transition duration-200 hover:bg-gray-700"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default LinkButton;

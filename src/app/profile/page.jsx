"use client";

import { useSession, updateUser, signOut } from "@/lib/auth-client";
import Link from "next/link";

const Profile = () => {
  const { data: session, isPending } = useSession();
  const user = session?.user;

  // Update Name
  const Submit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString().trim();

    if (!name) {
      console.log("Name is required");
      return;
    }

    const { data, error } = await updateUser({
      name,
    });

    if (error) {
      console.log("Update error:", error);
      return;
    }

    console.log("Name updated successfully:", data);
  };

  // Sign Out
  const handleSignOut = async () => {
    const { error } = await signOut();

    if (error) {
      console.log("Sign out error:", error);
      return;
    }

    window.location.href = "/signIn";
  };

  // Loading
  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading profile...</p>
      </div>
    );
  }

  // Not Logged In
  if (!user) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Please Sign In</h1>
        <Link href="/signIn" className="btn btn-success">
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col gap-6 bg-[#f3f4f6] px-4 py-8 items-center justify-start">
      <div className="w-full max-w-[800px]">
        {/* Title Group */}
        <div className="mb-6 pl-2">
          <h1 className="text-[26px] font-bold text-[#1f2937]">আমার প্রোফাইল</h1>
          <p className="text-[15px] text-[#6b7280] mt-1">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
        </div>

        {/* User Card */}
        <div className="w-full rounded-[16px] border border-[#e5e7eb] bg-white p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center">
              {/* If user avatar exists use it, otherwise show a default initial avatar */}
              {user.image ? (
                <img src={user.image} alt={user.name} className="h-full w-full object-cover" />
              ) : (
                <div className="text-2xl font-bold text-gray-400">
                  {user.name?.charAt(0)?.toUpperCase() || "U"}
                </div>
              )}
            </div>
            <div>
              <h2 className="text-[22px] font-bold text-[#111827]">{user.name}</h2>
              <p className="text-[16px] text-[#6b7280]">{user.email}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSignOut}
            className="flex items-center gap-2 rounded-lg border border-[#ef4444] px-4 py-2.5 text-[15px] font-medium text-[#ef4444] transition hover:bg-red-50"
          >
            <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            সাইন আউট
          </button>
        </div>

        {/* Form Card */}
        <div className="w-full rounded-[16px] border border-[#e5e7eb] bg-white p-8">
          <h3 className="text-[20px] font-bold text-[#111827] mb-8">তথ্য</h3>

          <form onSubmit={Submit} className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-[15px] font-medium text-[#374151]">
                নাম
              </label>
              <input
                id="name"
                name="name"
                type="text"
                defaultValue={user.name || ""}
                required
                className="w-full rounded-xl border border-[#e5e7eb] bg-[#f9fafb] px-4 py-3.5 text-[16px] text-gray-800 outline-none transition focus:border-emerald-600 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#059669] py-3.5 text-[16px] font-medium text-white transition hover:bg-[#047857]"
            >
              আপডেট
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
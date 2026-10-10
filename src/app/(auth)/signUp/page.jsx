"use client";
import Link from "next/link";
import { signUp, social } from "@/lib/auth-client";
import { authClient } from "@/lib/auth-client";

const SignUP = () => {
 const Submit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());

  const { data: resData, error } = await signUp.email({
    name: data.name,
    email: data.email,
    password: data.password,
    callbackURL: "/",
  });

  if (error) {
    console.log("Signup error:", error);
    return;
  }

  console.log("Signup successful:", resData);

  window.location.href = "/";
};

const googleSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data)
};


const GitHubSignIn = async () => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
    console.log(data)
}
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f4f7f6] p-4 font-sans text-[#1a1a1a]">
      <div className="w-full max-w-[500px]">
        {/* Header Section */}
        <div className="mb-6 text-center">
          <h1 className="mb-2 text-2xl font-bold text-[#1f2937] sm:text-3xl">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="text-sm text-gray-500 sm:text-base">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] sm:p-8">
          <form onSubmit={Submit} className="space-y-5">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                নাম
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="যেমন: রহিম উদ্দিন"
                required
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm transition-colors placeholder-gray-400 focus:border-green-600 focus:outline-none"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                ইমেইল
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm transition-colors placeholder-gray-400 focus:border-green-600 focus:outline-none"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                পাসওয়ার্ড
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="কমপক্ষে ৮ অক্ষর"
                minLength={8}
                required
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm transition-colors placeholder-gray-400 focus:border-green-600 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-[#059669] py-3 text-sm font-medium text-white shadow-[0_4px_6px_rgba(5,150,105,0.2)] transition-all hover:bg-[#047857]"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>

            <span className="relative bg-white px-3 text-xs uppercase tracking-wider text-gray-400">
              অথবা
            </span>
          </div>

          {/* Footer Link */}
          <div className="mt-6 text-center">
            <Link
              href="/sign-in"
              className="text-sm text-gray-500 transition-colors hover:text-green-600"
            >
              অ্যাকাউন্ট আছে?{" "}
              <span className="border-b border-green-600/30 font-medium text-green-600">
                সাইন ইন করুন
              </span>
            </Link>
            <button onClick={googleSignIn}>Google</button>
            <button onClick={GitHubSignIn}>Github</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUP;

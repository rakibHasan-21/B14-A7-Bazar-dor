"use client";
import Link from "next/link";
import { signIn, social } from "@/lib/auth-client";
import { authClient } from "@/lib/auth-client";
// export const dynamic = 'force-dynamic';

const SignIn = () => {
  const Submit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const { data: resData, error } = await signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });

    if (error) {
      console.log("Sign in error:", error);
      return;
    }

    console.log("Sign in successful:", resData);

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
        <div className="mb-6 text-center">
          <h1 className="mb-2 text-2xl font-bold text-[#1f2937] sm:text-3xl">
            সাইন ইন করুন
          </h1>

          <p className="text-sm text-gray-500 sm:text-base">
            আপনার অ্যাকাউন্টে প্রবেশ করতে ইমেইল ও পাসওয়ার্ড দিন।
          </p>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] sm:p-8">
          <form onSubmit={Submit} className="space-y-5">
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
                autoComplete="email"
                required
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm focus:border-green-600 focus:outline-none"
              />
            </div>

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
                placeholder="আপনার পাসওয়ার্ড"
                autoComplete="current-password"
                required
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm focus:border-green-600 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-[#059669] py-3 text-sm font-medium text-white transition-all hover:bg-[#047857]"
            >
              সাইন ইন করুন
            </button>
          </form>

          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>

            <span className="relative bg-white px-3 text-xs text-gray-400">
              অথবা
            </span>
          </div>

          <div className="mt-6 text-center flex gap-3">
            <button
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 font-medium text-gray-700 shadow-sm transition-all duration-200 hover:border-red-300 hover:bg-gray-50 hover:shadow-md active:scale-[0.98] mr-2"
                onClick={googleSignIn}
              >
                Google দিয়ে চালিয়ে যান
              </button>
              <button
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 font-medium text-gray-700 shadow-sm transition-all duration-200 hover:border-red-300 hover:bg-gray-50 hover:shadow-md active:scale-[0.98] mr-2"
                onClick={GitHubSignIn}
              >
                GitHub দিয়ে চালিয়ে যান
              </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
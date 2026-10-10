
"use client";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import Link from "next/link";

const SignUp = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f0f5f0] px-4 py-8">
      <div className="w-full max-w-[444px]">
        {/* Heading */}
        <div className="mb-7 text-center">
          <h1 className="text-[26px] font-bold tracking-tight text-[#26352a]">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="mt-1 text-sm text-[#778078]">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        {/* Signup Card */}
        <div className="rounded-[20px] border border-[#dce5de] bg-[#fbfdfb] px-6 py-7 sm:px-[26px]">
          <Form
            className="flex w-full flex-col gap-[18px]"
            onSubmit={onSubmit}
          >
            {/* Name */}
            <TextField
              name="name"
              isRequired
              className="flex w-full flex-col gap-2"
            >
              <Label className="text-sm font-medium text-[#29372d]">
                নাম
              </Label>

              <Input
                type="text"
                placeholder="যেমন: রহিম উদ্দিন"
                className="h-[43px] w-full rounded-[9px] border border-[#dce5de] bg-transparent px-3 text-sm text-[#29372d] outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />

              <FieldError className="text-xs text-red-600" />
            </TextField>

            {/* Email */}
            <TextField
              name="email"
              type="email"
              isRequired
              className="flex w-full flex-col gap-2"
            >
              <Label className="text-sm font-medium text-[#29372d]">
                ইমেইল
              </Label>

              <Input
                type="email"
                placeholder="you@example.com"
                className="h-[43px] w-full rounded-[9px] border border-[#dce5de] bg-transparent px-3 text-sm text-[#29372d] outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />

              <FieldError className="text-xs text-red-600" />
            </TextField>

            {/* Password */}
            <TextField
              name="password"
              isRequired
              minLength={8}
              className="flex w-full flex-col gap-2"
            >
              <Label className="text-sm font-medium text-[#29372d]">
                পাসওয়ার্ড
              </Label>

              <Input
                type="password"
                placeholder="কমপক্ষে ৮ অক্ষর"
                className="h-[43px] w-full rounded-[9px] border border-[#dce5de] bg-transparent px-3 text-sm text-[#29372d] outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />

              <FieldError className="text-xs text-red-600" />
            </TextField>


            <Button
              type="submit"
              className="mt-[-1px] h-[44px] w-full rounded-[9px] bg-[#078b43] px-4 text-sm font-semibold text-white shadow-[0_3px_4px_rgba(0,0,0,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#067638] hover:shadow-md active:translate-y-0"
            >
              অ্যাকাউন্ট তৈরি করুন
            </Button>

            {/* Divider */}
            <div className="flex w-full items-center gap-4">
              <div className="h-[2px] flex-1 bg-[#e4e9e5]" />

              <span className="shrink-0 text-sm text-[#667168]">
                অথবা
              </span>

              <div className="h-[2px] flex-1 bg-[#e4e9e5]" />
            </div>

            <div className="grid w-full grid-cols-2 gap-2">
              

              {/* socal button add hove */}
            </div>

            <p className="w-full pt-1 text-center text-sm text-[#59635b]">
              অ্যাকাউন্ট আছে?{" "}
              <Link
                href="/sign-in"
                className="font-medium text-[#078b43] transition hover:text-[#056b32] hover:underline"
              >
                সাইন ইন করুন
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default SignUp;

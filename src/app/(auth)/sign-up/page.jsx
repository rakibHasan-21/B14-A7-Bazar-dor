"use client";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { signUp, authClient } from "@/lib/auth-client";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const { data: resData, error } = await signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
        callbackURL: "/",
      });

      if (error) {
        console.error("Signup error:", error);
        return;
      }

      console.log("Signup successful:", resData);
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  };


  const signIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data)
};
const signInGithub= async () => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
    console.log(data)
}
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-2xl font-bold text-gray-900">
          অ্যাকাউন্ট তৈরি করুন
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন
        </p>

        <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="name"
            className="flex w-full flex-col gap-2"
          >
            <Label>নাম</Label>
            <Input
              type="text"
              placeholder="যেমন: Rakib"
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            className="flex w-full flex-col gap-2"
          >
            <Label>ইমেইল</Label>
            <Input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="password"
            minLength={8}
            className="flex w-full flex-col gap-2"
            validate={(value) =>
              value.length < 8
                ? "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে"
                : null
            }
          >
            <Label>পাসওয়ার্ড</Label>

            <div className="flex w-full items-center rounded-lg border border-gray-300 pr-3">
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="পাসওয়ার্ড লিখুন"
                className="min-w-0 flex-1 border-0"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="ml-1 text-gray-500 hover:text-green-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            <FieldError />
          </TextField>

          <Button
            type="submit"
            className="w-full rounded-lg bg-green-600 px-4 py-3 font-semibold text-white hover:bg-green-700"
          >
            সাইন আপ
          </Button>
          <div className="flex justify-center gap-16">
            <button onClick={signIn}>google +</button>
            <button onClick={signInGithub}>Github</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
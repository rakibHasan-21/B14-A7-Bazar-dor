"use client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { signIn } from "@/lib/auth-client";
const SignIn = () => {
     const [showPassword, setShowPassword] = useState(false);
      const onSubmit = async(e) => {
        e.preventDefault();
    
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        // console.log(data);
        const {data: resData, error} = await signIn.email({
          name: data.name,
          email:data.email,
          password: data.password,
          callbackURL: "/"
        })
        console.log(resData, error)
      };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-2xl font-bold text-gray-900">
          সাইন ইন
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>

        <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>

          <TextField
            isRequired
            name="email"
            type="email"
            className="flex w-full flex-col gap-2"
          >
            <Label>ইমেইল</Label>
            <Input
              placeholder=""
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type={showPassword ? "text" : "password"}
            className="flex w-full flex-col gap-2"
            validate={(value) =>
              value.length < 8 ? "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে" : null
            }
          >
            <Label>Password</Label>

            <div className="flex w-full items-center rounded-lg border border-gray-300 pr-3">
              <Input
                placeholder="পাসওয়ার্ড লিখুন"
                className="min-w-0 flex-1 border-0"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="ml-1 text-gray-500 hover:text-green-600"
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
            সাইন ইন
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;

"use client";

import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { emailValidate, psaswordValidate } from "@/lib/validates";
import Button from "@/components/ui/Button";
import { signIn } from "next-auth/react";

type SignInInputProps = {
  email: string;
  password: string;
};

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<SignInInputProps>();

  const onSubmit: SubmitHandler<SignInInputProps> = (data: any) => {
    console.log(data);
  };

  return (
    <main className="flex flex-col items-center">
      <div className="w-96 pt-16 pb-40">
        <div className="flex justify-center">
          <h2 className="text-2xl pb-16">COMMERCE</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-primary"
            >
              이메일 주소
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: true,
                pattern: emailValidate,
              })}
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="예) email@commerce.com"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-green-600 dark:text-green-500">
                <span className="font-medium">{errors?.email?.message}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-primary"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: true,
                pattern: psaswordValidate,
              })}
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-500">
                <span className="font-medium">Oh, snapp!</span> Some error
                message.
              </p>
            )}
          </div>
          <div className="pt-8 rounded-lg">
            <Button
              intent={`${isValid ? "primary" : "disabled"}`}
              size="full"
              disabled={!isValid}
              round="xl"
            >
              로그인
            </Button>
          </div>
        </form>

        <ul className="flex justify-between pt-8">
          <li className="flex items-center justify-center w-full">
            <Link className="text-xs" href="/join">
              이메일 가입
            </Link>
          </li>
          <span className="text-neutral-400">l</span>
          <li className="flex items-center justify-center w-full">
            <Link className="text-xs" href="#">
              이메일 찾기
            </Link>
          </li>
          <span className="text-neutral-400">l</span>
          <li className="flex items-center justify-center w-full">
            <Link className="text-xs" href="#">
              비밀번호 찾기
            </Link>
          </li>
        </ul>

        <div className="pt-8">
          <Button
            icon="google"
            intent="secondary"
            size="full"
            onClick={() =>
              signIn("google", {
                callbackUrl: "/",
              })
            }
          >
            Sign in with Google
          </Button>
        </div>

        <div className="pt-2">
          <Button
            icon="github"
            intent="secondary"
            size="full"
            onClick={() => signIn("github")}
          >
            Sign in with Github
          </Button>
        </div>
      </div>
    </main>
  );
}

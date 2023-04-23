"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { emailValidate, psaswordValidate } from "@/lib/validates";
import Button from "@/components/ui/Button";
import axios from "axios";

type JoinInputProps = {
  email: string;
  password: string;
};

export default function Join() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<JoinInputProps>();

  const onSubmit: SubmitHandler<JoinInputProps> = (data: any) => {
    axios
      .post("../api/register", data)
      .then(() => alert("성공"))
      .catch((error) => console.log(error));
  };

  return (
    <main className="flex flex-col items-center">
      <div className="w-96 pt-16 pb-40">
        <div className="flex justify-center">
          <h2 className="text-2xl pb-16">회원가입</h2>
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
      </div>
    </main>
  );
}

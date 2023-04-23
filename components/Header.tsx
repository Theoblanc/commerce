"use client";

import getCurrentUser from "@/actions/getCurrentUser";
import Link from "next/link";

export default async function Header() {
  const currentUser = await getCurrentUser();

  console.log("currentUser", currentUser);

  return (
    <div className="px-10">
      <div className="flex justify-end pt-2">
        <ul className="flex items-center space-x-6">
          <li className="text-xs">
            <a href="#">공지사항</a>
          </li>
          <li className="text-xs">
            <Link href="/signIn">로그인</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-between py-5">
        <div>
          <Link href="/">로고</Link>
        </div>
        <ul className="flex items-center space-x-10">
          <li>
            <Link href="#">HOME</Link>
          </li>
          <li>
            <Link href="#">STYLE</Link>
          </li>
          <li>
            <Link href="#">SHOP</Link>
          </li>
          <li>
            <Link href="#">MY</Link>
          </li>
          <li>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
}

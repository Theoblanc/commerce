import Link from "next/link";

export default function Header() {
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
        <div>로고</div>
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
        </ul>
      </div>
    </div>
  );
}

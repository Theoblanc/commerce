"use client";

import ShortCard from "./ShortCard";

const shortCardItem = [
  {
    no: 0,
    title: "4월 추천 이벤트",
    url: "/shortcut/event.webp",
  },
  {
    no: 1,
    title: "남성 추천",
    url: "/shortcut/men.webp",
  },
  {
    no: 2,
    title: "여성 추천",
    url: "/shortcut/womem.webp",
  },
  {
    no: 3,
    title: "퀴즈 오픈",
    url: "/shortcut/quiz.webp",
  },
  {
    no: 4,
    title: "인기 브랜드",
    url: "/shortcut/brand.webp",
  },
  {
    no: 5,
    title: "정가 아래",
    url: "/shortcut/정가아래.webp",
  },
  {
    no: 6,
    title: "인기 럭셔리",
    url: "/shortcut/인기럭셔리.webp",
  },
  {
    no: 7,
    title: "최신 브랜드",
    url: "/shortcut/올드바이브.webp",
  },
  {
    no: 8,
    title: "셀럽 추천",
    url: "/shortcut/샐럽픽.webp",
  },
  {
    no: 9,
    title: "무조건 포인트",
    url: "/shortcut/포인트.webp",
  },
];

export default function ShortCardList() {
  return (
    <ul className="grid gap-3 grid-cols-5">
      {shortCardItem.map((shortCard) => (
        <li key={shortCard.no}>
          <ShortCard url={shortCard.url} title={shortCard.title} />
        </li>
      ))}
    </ul>
  );
}

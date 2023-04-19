"use client";

import Image from "next/image";

interface ShortCardImgProps {
  url: string;
  alt: string;
}

function ShortCardImg(props: ShortCardImgProps) {
  const { url, alt } = props;
  return (
    <div>
      <Image
        className="rounded-lg"
        src={url}
        width={250}
        height={100}
        alt={alt}
      />
    </div>
  );
}

interface ShortCutTitleProps {
  title: string;
}

function ShortCutTitle(props: ShortCutTitleProps) {
  const { title } = props;
  return <p className="mt-2 text-sm">{title}</p>;
}

interface ShortCardProps {
  url: string;
  title: string;
}

export default function ShortCard(props: ShortCardProps) {
  const { url, title } = props;

  return (
    <div className="flex flex-col items-center">
      <ShortCardImg url={url} alt={title} />
      <ShortCutTitle title={title} />
    </div>
  );
}

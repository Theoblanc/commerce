import Image from "next/image";

interface ShortCardImgProps {
  url: string;
  alt: string;
}

function ShortCardImg(props: ShortCardImgProps) {
  const { url, alt } = props;
  return (
    <div>
      <Image src={url} width={250} height={100} alt={alt}></Image>
    </div>
  );
}

interface ShortCutTitleProps {
  title: string;
}

function ShortCutTitle(props: ShortCutTitleProps) {
  const { title } = props;

  return <p>{title}</p>;
}

interface ShortCardProps {
  url: string;
  title: string;
}

export default function ShortCard(props: ShortCardProps) {
  const { url, title } = props;

  return (
    <div>
      <ShortCardImg url={url} alt={title} />;
      <ShortCutTitle title={title} />
    </div>
  );
}

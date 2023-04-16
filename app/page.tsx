import { Inter } from "next/font/google";
import Header from "@/ui/Header";
import Carousel from "@/ui/Carousel";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <Carousel />
    </main>
  );
}

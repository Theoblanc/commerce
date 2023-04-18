import Carousel from "@/ui/Carousel";
import ShortCardList from "@/ui/ShortCardList";

export default function Home() {
  return (
    <main>
      <Carousel />
      <section className="mt-14 px-10">
        <ShortCardList />
      </section>
    </main>
  );
}

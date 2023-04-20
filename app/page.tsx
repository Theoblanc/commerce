import Carousel from "@/components/Carousel";
import ProductList from "@/components/ProductList";
import ShortCardList from "@/components/ShortCardList";

export default function Home() {
  return (
    <main>
      <Carousel />
      <section className="mt-14 px-10">
        <ShortCardList />
      </section>
      <section className="mt-14 px-10">
        <ProductList />
      </section>
    </main>
  );
}

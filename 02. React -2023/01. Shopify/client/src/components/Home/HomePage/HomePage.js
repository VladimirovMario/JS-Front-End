import Hero from "../Hero/Hero";
import ProductList from "../ProductList/ProductList";

export default function HomePage({ games }) {
  return (
    <>
      <Hero />
      <ProductList games={games}/>
    </>
  );
}

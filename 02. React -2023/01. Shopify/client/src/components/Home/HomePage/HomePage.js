import { useGameContext } from "../../../contexts/GameContext";
import Hero from "../Hero/Hero";
import ProductList from "../ProductList/ProductList";

export default function HomePage() {
  const { latestGames } = useGameContext();
  return (
    <>
      <Hero />
      <ProductList games={latestGames} />
    </>
  );
}

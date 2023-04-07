import styles from "./Catalog.module.css";
import ProductPs4 from "../ProductPs4/ProductPs4";
import { useGameContext } from "../../contexts/GameContext";
import { Loader } from "../Shared/Loader/Loader";

export default function Catalog() {
  const { games, loading } = useGameContext();

  return (
    <section className="section">
      <h2 className="section-title">Games for ps4</h2>
      <div className="section-divider"></div>

      {/* <!-- Products --> */}
      <div className={styles["product-wrapper"]}>
        {/* <!-- SEARCH FORM --> */}
        {/* <form className="search-form">
            <div className="col aligned">
                <label>
                    <span>Terms:</span>
                    <input className="search-input" type="text" name="search" autocomplete="off"
                        placeholder="Start searching for..." />
                </label>
            </div>
            <label>
                <button className="action">Search</button>
            </label>
        </form>   */}

        {loading && <Loader />}

        <ul className={styles["product-ul"]}>
          {!loading &&
            games.map((game) => <ProductPs4 key={game._id} {...game} />)}
        </ul>

        {!games.length && (
          <h3 className={styles["no-publications"]}>
            No publications yet. Be the first one.
          </h3>
        )}
      </div>
    </section>
  );
}

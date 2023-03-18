import styles from "./Catalog.module.css";
import ProductPs4 from "../ProductPs4/ProductPs4";

export default function Catalog({
  games
}) {
  return (
    <section className="section">
      <h2 className="section-title">Games for ps4</h2>
      <div className="section-divider"></div>

      {/* <!-- Products --> */}
      <div className={styles["product-wrapper"]}>
        <ul className={styles["product-ul"]}>


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

         
            {/* <!-- Product component--> */}
            {games.map(game => <ProductPs4 key={game._id} {...game} />)}         
              
        </ul>
      </div>
    </section>
  );
}

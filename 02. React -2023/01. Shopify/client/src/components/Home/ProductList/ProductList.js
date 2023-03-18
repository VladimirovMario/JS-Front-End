
import ProductPs4 from "../../ProductPs4/ProductPs4";
import styles from "./ProductList.module.css";

export default function ProductList() {
  return (
    <section className="section">
      <h2 className={"section-title"}>Start your journey</h2>
      <div className={"section-divider"}></div>

      {/* <!-- Products --> */}
      <div className={styles["product-wrapper"]}>
        <ul className={styles["product-ul"]}>

       
          {/* <!-- Product component--> */}
            <ProductPs4 /> 

        </ul>
      </div>
    </section>
  );
}

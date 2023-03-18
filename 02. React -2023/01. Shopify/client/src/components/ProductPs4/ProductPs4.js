import styles from "./ProductPs4.module.css";

export default function ProductPs4() {
  return (
    <a className={styles["product-box"]} href="/details/id">
      <article className={styles["card"]}>
        <div className={styles["thumbnail"]}>
          <img
            className={styles["thumbnail-img"]}
            src="https://cdn.ozone.bg/media/catalog/product/cache/1/image/400x498/a4e40ebdc3e371adff845072e1c73f37/g/r/700742e53273a67f99783cd52c84357c/grand-theft-auto-v---premium-edition-ps4-30.jpg"
            alt="Unsplash img"
          />
        </div>
        <div className={styles["content"]}>
          <h2 className={styles["content-title"]}>Grand Theft Auto V</h2>
          <p className={styles["content-genre"]}>Genre: Action</p>
          <p className={styles["content-desc"]}>Lorem ipsum dolor sit...</p>

          <div className={styles["icon-wrapper"]}>
            <p className={styles["content-price"]}>34.99$</p>

            <div className={styles["icon-btn"]}>
              {/* <!-- User only --> */}
              <button className={`${styles["heart-icon"]} btn`}>
                <i className="fa-regular fa-heart"></i>
              </button>

              <button className={`${styles["shopping-icon"]} btn`}>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </article>
    </a>
  );
}

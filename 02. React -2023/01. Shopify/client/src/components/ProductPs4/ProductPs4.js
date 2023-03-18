import styles from "./ProductPs4.module.css";

export default function ProductPs4({
_id,
_ownerId,
title,
genre,
description,
imageUrl,
price,
}) {
  return (
    <li>
      <a className={styles["product-box"]} href="/details/id">
        <article className={styles["card"]}>
          <div className={styles["thumbnail"]}>
            <img
              className={styles["thumbnail-img"]}
              src={imageUrl}
              alt="Unsplash img"
            />
          </div>
          <div className={styles["content"]}>
            <h2 className={styles["content-title"]}>{title}</h2>
            <p className={styles["content-genre"]}>Genre: {genre}</p>
            <p className={styles["content-desc"]}>{`${description.substring(0, 25)}...`}</p>

            <div className={styles["icon-wrapper"]}>
              <p className={styles["content-price"]}>{price}$</p>

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
    </li>
  );
}

import styles from "./DetailsProduct.module.css";

export default function DetailsProduct() {
  return (
    <div className={styles["details-card"]}>
      <div className={styles["details-image-wrapper"]}>
        <img
          className={styles["details-card-image"]}
          src="https://cdn.ozone.bg/media/catalog/product/cache/1/image/400x498/a4e40ebdc3e371adff845072e1c73f37/g/r/700742e53273a67f99783cd52c84357c/grand-theft-auto-v---premium-edition-ps4-30.jpg"
          alt="art-image2"
        />
      </div>
      <article className={styles["card-content"]}>
        <h2 className={styles["card-content-title"]}>Grand Theft Auto V</h2>
        <p className={styles["content-genre"]}>Genre: Action</p>
        <p className={styles["content-desc"]}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          nemo maiores corrupti ipsum est eius, sint accusamus cupiditate
          voluptatem ea? Eveniet, provident! Officia unde assumenda atque eaque,
          a quos repellat.
        </p>
        <div className={styles["desc-divider"]}></div>

        <div className={styles["icon-wrapper"]}>
          <p className={styles["content-price"]}>34.99$</p>
          <div className={"icon-btn"}>
            {/* <!-- User only --> */}
            <button className={`${styles["heart-icon"]} btn`}>
              <i className="fa-regular fa-heart"></i>
            </button>
            <button className={`${styles["shopping-icon"]} btn`}>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>

        {/* <!-- If there is no registered user, do not display buttons--> */}
        <div className={styles["buttons-wrapper"]}>
          <a href="/edit/id" className={`btn-edit btn`}>
            Edit
          </a>
          <button className={"btn-delete btn"}>Delete</button>
          <a className={"btn-comments btn"} href="/comments">
            Comments
          </a>
        </div>
      </article>
    </div>
  );
}

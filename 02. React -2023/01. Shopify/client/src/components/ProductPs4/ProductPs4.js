import { Link, useNavigate } from "react-router-dom";
import { textSubstring } from "../../utils/textSubstring";
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
  const navigate = useNavigate();
 
  const onClickAddFavorite = (e) => {
    e.preventDefault();
    // TODO navigate in case if not already liked, else display a message
    navigate("/auth/profile");

    console.log("first", e);
  };

  return (
    <li>
      <Link className={styles["product-box"]} to={`/catalog/${_id}`}>
        <article className={styles["card"]}>
          <div className={styles["thumbnail"]}>
            <img
              className={styles["thumbnail-img"]}
              src={imageUrl}
              alt="Unsplash img"
            />
          </div>
          <div className={styles["content"]}>
            <h2 className={styles["content-title"]}>{textSubstring(title, 28)}</h2>
            <p className={styles["content-genre"]}>Genre: {textSubstring(genre, 20)}</p>
            <p className={styles["content-desc"]}>{textSubstring(description, 25)}</p>

            <div className={styles["icon-wrapper"]}>
              <p className={styles["content-price"]}>{price}$</p>

              <div className={styles["icon-btn"]}>
                {/* <!-- User only --> */}
                <span
                  className={`${styles["heart-icon"]} btn`}
                  onClick={(e) => onClickAddFavorite(e)}
                >
                  <i className="fa-regular fa-heart"></i>
                </span>

                <span className={`${styles["shopping-icon"]} btn`}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
}

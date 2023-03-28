import { textSubstring } from "../../../../utils/textSubstring";
import styles from "./ProfileProduct.module.css";

export const ProfileProducts = ({
    _id,
    _ownerId,
    created_at,
    description,
    genre,
    imageUrl,
    price,
    title,
    updatedAt,
    users,
    usersCount,
}) => {
  return (
    <li>
      <article className={styles["card"]}>
        
        <div className={styles["thumbnail"]}>
          <img
            className={styles["thumbnail-img"]}
            src={imageUrl}
            alt={`${title}.jpg`}
          />
        </div>

        <div className={styles["content"]}>
          <h3 className={styles["content-title"]}>{title ? textSubstring(title, 28) : title}</h3>
          <div className={styles["icon-wrapper"]}>
            <p className={styles["content-price"]}>{price}$</p>

            <div className={styles["icon-btn"]}>
              <button className={`${styles["shopping-icon"]} btn`}>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>

      </article>
    </li>
  );
};

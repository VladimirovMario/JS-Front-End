import { Link } from "react-router-dom";
import styles from "./DetailsProduct.module.css";

export default function DetailsProduct({ game }) {
  return (
    <div className={styles["details-card"]}>
      <div className={styles["details-image-wrapper"]}>
        <img
          className={styles["details-card-image"]}
          src={game.imageUrl}
          alt={`${game.title}.png`}
        />
      </div>
      <article className={styles["card-content"]}>
        <h2 className={styles["card-content-title"]}>{game.title}</h2>
        <p className={styles["content-genre"]}>Genre: {game.genre}</p>
        <p className={styles["content-desc"]}>{game.description}</p>
        <div className={styles["desc-divider"]}></div>

        <div className={styles["icon-wrapper"]}>
          <p className={styles["content-price"]}>{game.price}$</p>
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
          <Link to={`/edit/${game._id}`} className={`btn-edit btn`}>
            Edit
          </Link>
          <Link to={`/delete/${game._id}`} className={"btn-delete btn"}>
            Delete
          </Link>
          <Link className={"btn-comments btn"} to="/create-comment">
            Comments
          </Link>
        </div>
      </article>
    </div>
  );
}

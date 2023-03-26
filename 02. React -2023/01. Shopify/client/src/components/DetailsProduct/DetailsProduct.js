import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./DetailsProduct.module.css";
import { getById } from "../../services/gameService";

export default function DetailsProduct() {
  const { gameId } = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
    getById(gameId).then((res) => {
      setGame(res);
      // console.log(`from details `, res);
    });
  }, [gameId]);

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

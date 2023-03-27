import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGameContext } from "../../contexts/GameContext";
import { getById } from "../../services/gameService";
import styles from "../Create/Create.module.css";

export default function DeleteProduct() {
  const { gameId } = useParams();
  const { onDeleteSubmit } = useGameContext();
  const [values, setValues] = useState({
    title: "",
    genre: "",
    price: "",
    imageUrl: "",
    description: "",
  });

  useEffect(() => {
    getById(gameId)
      .then((res) => {
        setValues(res);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [gameId]);

  const onSubmit = (e) => {
    e.preventDefault();
    onDeleteSubmit(values);
  };

  return (
    <section className="section">
      <h2 className="section-title">Delete product</h2>
      <div className="section-divider"></div>

      <div className={"action-container"}>
        <div className={styles["edit-img-wrapper"]}>
          <img
            className={styles["create-edit-img"]}
            src={values.imageUrl}
            alt="delete-product.jpg"
          />
        </div>

        <form onSubmit={onSubmit} className={styles["form-container"]}>
          <h3 className={`${styles["form-container-title"]} ${styles["delete-title"]}`}>Delete {values.title}</h3>
          <p className={styles["form-container-desc"]}>
            Are you sure you want to delete this "{values.title}" game?
          </p>

          {/* <!-- Inputs --> */}
          <div className={styles["input-wrapper"]}>
            <div className={styles["rows-aligned"]}>
              <label className={styles["vertical"]} htmlFor="title">
                <span>Title</span>
                <input
                  className={styles["input-title"]}
                  type="text"
                  id="title"
                  placeholder="Grand Theft Auto V"
                  name="title"
                  value={values.title}
                  disabled={true}
                />
              </label>
              <label htmlFor="genre">
                <span>Genre</span>
                <input
                  className={styles["input-genre"]}
                  type="text"
                  id="genre"
                  placeholder="Action"
                  name="genre"
                  value={values.genre}
                  disabled={true}
                />
              </label>
              <label htmlFor="price">
                <span>Price</span>
                <input
                  className={styles["input-price"]}
                  type="number"
                  id="price"
                  name="price"
                  value={values.price}
                  disabled={true}
                />
              </label>
              <label htmlFor="imageUrl">
                <span>Image Url</span>
                <input
                  className={styles["input-img-url"]}
                  type="text"
                  id="imageUrl"
                  placeholder="https://"
                  name="imageUrl"
                  value={values.imageUrl}
                  disabled={true}
                />
              </label>
            </div>

            {/* <!-- text area --> */}
            <div className={styles["align-center"]}>
              <label htmlFor="description">
                <span>Description</span>
                <textarea
                  className={styles["description"]}
                  cols="40"
                  rows="4"
                  placeholder="Grand Theft Auto (usually abbreviated GTA) is a series of games that incorporate driving and action gameplay styles."
                  name="description"
                  value={values.description}
                  disabled={true}
                ></textarea>
              </label>
              <div className={styles["align-center-action"]}>
                <input
                  className={"action-bnt edit-btn btn"}
                  type="submit"
                  value="Delete"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

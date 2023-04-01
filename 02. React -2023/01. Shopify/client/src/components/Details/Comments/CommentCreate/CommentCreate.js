import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getById } from "../../../../services/gameService";
import { useGameContext } from "../../../../contexts/GameContext";

import styles from "./CommentCreate.module.css";

export default function CommentCreate() {
  const { createComment } = useGameContext();
  const { gameId } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState({});
  const [values, setValues] = useState({
    subject: "",
    content: "",
  });

  useEffect(() => {
    getById(gameId)
      .then((res) => {
        setGame(res);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [gameId]);

  const onChangeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createComment(gameId, values);
    navigate(`/catalog/${gameId}`);
  };

  return (
    <section className="section">
      <h2 className={"section-title"}>Create Comment</h2>
      <div className={"section-divider"}></div>
      <div className={styles["create-comment"]}>
        <div className={styles["game-wrapper"]}>
          <h3 className={styles["game-title"]}>{game.title}</h3>
          <div className={styles["image-wrapper"]}>
            <img src={game.imageUrl} alt={`${game.title}.jpg`} />
          </div>
        </div>

        <div className={styles["form-wrapper"]}>
          <form onSubmit={onSubmit} className={styles["form"]} action="post">
            <label htmlFor="genre">
              <span className={styles["input-title"]}>Subject</span>
              <input
                className={styles["input-subject"]}
                type="text"
                id="subject"
                placeholder="Subject"
                name="subject"
                value={values.subject}
                onChange={onChangeHandler}
              />
            </label>

            <label htmlFor="content">
              <span className={styles["input-title"]}>Content</span>
              <textarea
                className={styles["message"]}
                cols="40"
                rows="4"
                placeholder="Sure, feel free to enter your comment!"
                name="content"
                value={values.content}
                onChange={onChangeHandler}
              ></textarea>
            </label>

            <button className={"action-bnt create-btn btn"}>
              Send Comment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useService } from "../../hooks/useService";
import { gameServiceFactory } from "../../services/gameService";
import * as commentService from "../../services/commentService";

export const GameDetails = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState({});
  const gameService = useService(gameServiceFactory);

  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const [comments, setComments] = useState([]);

  useEffect(() => {
    gameService
      .getOne(gameId)
      .then((data) => {
        setGame(data);
        // console.log(data);
        return commentService.getCurrGameComments(gameId);
      })
      .then((result) => {
        setComments(result);
        // console.log(result);
      });
  }, [gameId]);

  const onCommentsSubmit = async (e) => {
    e.preventDefault();

    const newComment = await commentService.create({
      gameId,
      username,
      comment,
    });

    setComments((state) => [newComment, ...state]);

    setUsername("");
    setComment("");
  };

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} alt="game.png" />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>
        <p className="text">{game.summary}</p>

        {/* <!-- Bonus ( for Guests and Users ) --> */}
        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {/* <!-- list all comments for current game (If any) --> */}
            {comments.map((c) => (
              <li key={c._id} className="comment">
                <p>
                  {c.username}: {c.comment}
                </p>
              </li>
            ))}
          </ul>
          {/* <!-- Display paragraph: If there are no comments in the database --> */}
          {!comments.length && <p className="no-comment">No comments.</p>}
        </div>

        {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
        <div className="buttons">
          <a href="/#" className="button">
            Edit
          </a>
          <a href="/#" className="button">
            Delete
          </a>
        </div>
      </div>

      {/* <!-- Bonus --> */}
      {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={onCommentsSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Peter"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <textarea
            name="comment"
            placeholder="Comment......"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <input className="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>
    </section>
  );
};

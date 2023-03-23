import { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useService } from "../../hooks/useService";
import { gameServiceFactory } from "../../services/gameService";
import { AuthContext } from "../../contexts/AuthContext";

import * as commentService from "../../services/commentService";

export const GameDetails = ({ onDeleteClickHandler }) => {
  const { gameId } = useParams();
  const { userId } = useContext(AuthContext);
  const gameService = useService(gameServiceFactory);
  const navigate = useNavigate();

  const [game, setGame] = useState({});
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const isOwner = userId === game._ownerId;

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

    setGame((state) => ({...state, comments: { ...state.comments, [newComment._id]: newComment },}));
    setUsername("");
    setComment("");
  };

  const onDeleteClick = async () => {
    // react-confirm
    await gameService.delete(gameId);
    onDeleteClickHandler(gameId);

    navigate("/catalog");
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
        {isOwner && (
          <div className="buttons">
            <Link to={`/catalog/${game._id}/edit`} className="button">
              Edit
            </Link>
            <button onClick={onDeleteClick} className="button">
              Delete
            </button>
          </div>
        )}
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

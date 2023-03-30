import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useService } from "../../hooks/useService";
import { gameServiceFactory } from "../../services/gameService";
import { useAuthContext } from "../../contexts/AuthContext";
import * as commentService from "../../services/commentService";

import { AddComment } from "./AddComment/AddComment";

export const GameDetails = ({ onDeleteClickHandler }) => {
  const { gameId } = useParams();
  const { userId, isAuthenticated, userEmail } = useAuthContext();
  const [game, setGame] = useState({});

  const gameService = useService(gameServiceFactory);
  const navigate = useNavigate();

  const isOwner = userId === game._ownerId;

  useEffect(() => {
    Promise.all([
      gameService.getOne(gameId),
      commentService.getCurrGameComments(gameId),
    ]).then(([gameData, comments]) => {
      // console.log(gameData, comments);
      setGame({
        ...gameData,
        comments,
      });
    });
  }, [gameId]);

  const onCommentsSubmit = async (values) => {
    const result = await commentService.create(gameId, values.comment);
    setGame((state) => ({
      ...state,
      comments: [
        ...state.comments,
        {
          ...result,
          author: {
           email: userEmail,
          },
        },
      ],
    }));
  };

  const onDeleteClick = async () => {
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
            {game.comments &&
              game.comments.map((c) => (
                <li key={c._id} className="comment">
                  <p>
                    {c.author?.email}: {c.comment}
                  </p>
                </li>
              ))}
          </ul>
          {!game.comments?.length && <p className="no-comment">No comments.</p>}
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

        {!isOwner && isAuthenticated && (
          <AddComment onCommentsSubmit={onCommentsSubmit} />
        )}
      </div>
    </section>
  );
};

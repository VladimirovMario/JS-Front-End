import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useService } from "../../hooks/useService";
import { gameServiceFactory } from "../../services/gameService";
import { useAuthContext } from "../../contexts/AuthContext";
import * as commentService from "../../services/commentService";

import { AddComment } from "./AddComment/AddComment";

export const GameDetails = ({ onDeleteClickHandler }) => {
  const { gameId } = useParams();
  const { userId, isAuthenticated } = useAuthContext();
  const [game, setGame] = useState({});

  const gameService = useService(gameServiceFactory);
  const navigate = useNavigate();

  const isOwner = userId === game._ownerId;

  useEffect(() => {
    gameService
      .getOne(gameId)
      .then((data) => {
        setGame(data);
        // return commentService.getCurrGameComments(gameId);
      })
      .then((result) => {
        // setComments(result);
      });
  }, [gameId]);


  const onCommentsSubmit = async (values) => {
    const result = await commentService.create(gameId, values.comment);
    // { _ownerId: "", gameId: "", comment: "some text", _createdOn: 1679678148638, _id: "" }
    console.log(result)
    // setGame((state) => ({
    //   ...state,
    //   comments: { ...state.comments, [result._id]: result },
    // }));
 
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
        {/* <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
        
            {comments.map((c) => (
              <li key={c._id} className="comment">
                <p>
                  {c.username}: {c.comment}
                </p>
              </li>
            ))}
          </ul>
   
          {!comments.length && <p className="no-comment">No comments.</p>}
        </div> */}

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

        {!isOwner && isAuthenticated && <AddComment onCommentsSubmit={onCommentsSubmit} />}
      </div>
    </section>
  );
};

const Comment = require("../models/Comment");
const Game = require("../models/Game");

async function getAll() {
  return Comment.find({});
}

async function createComment(comment) {
  console.log(comment);
  // const comment = {
  //     subject: req.body.subject,
  //     content: req.body.content,
  //     gameId: req.params.gameId,
  //     _ownerId: req.user._id,
  //     };
  
//   const game = await Game.findById(gameId);
//   return Comment.create(comment);
}

module.exports = {
  getAll,
  createComment,
};

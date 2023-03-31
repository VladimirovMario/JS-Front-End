const Comment = require("../models/Comment");

async function getAll(gameId) {
  return Comment.find({ gameId: gameId });

  // Getting curr user all comments
  // userId =  "6395b0a7eaeb094e89d57132"
  // return Comment.find({ _ownerId: userId });
}

async function createComment(gameId, userId, { subject, content }) {
  const comment = Comment.create({
    subject,
    content,
    gameId,
    _ownerId: userId,
  });

  return comment;
}

module.exports = {
  getAll,
  createComment,
};

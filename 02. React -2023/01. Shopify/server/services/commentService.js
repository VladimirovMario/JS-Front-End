const Comment = require("../models/Comment");
const User = require("../models/User");

async function getAll(gameId) {
  return Comment.find({ gameId: gameId });

  // Getting curr user all comments
  // userId =  "6395b0a7eaeb094e89d57132"
  // return Comment.find({ _ownerId: userId });
}

async function createComment(gameId, userId, { subject, content }) {
  const { email, username } = await User.findById(userId); 

  const comment = Comment.create({
    author: { email, username },
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

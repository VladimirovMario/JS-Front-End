const commentController = require("express").Router();

const { hasUser } = require("../middlewares/guards");
const { getAll, createComment } = require("../services/commentService");
const { parseError } = require("../util/parser");

commentController.get("/", async (req, res) => {
  const comments = await getAll();
  res.status(200).json(comments);
});

commentController.post("/", hasUser(), async (req, res) => {
  try {
    const comment = await createComment(req.params.gameId, req.user._id, req.body);
    res.status(200).json(comment);
  } catch (error) {
    const message = parseError(err);
    res.status(400).json({ message });
  }
});

module.exports = commentController;

const { Schema, model, Types } = require("mongoose");

const commentSchema = new Schema(
  {
    subject: {
      type: String,
      required: true,
      minlength: [3, "Subject should be at least 3 characters long!"],
    },
    content: {
      type: String,
      required: true,
      minlength: [3, "Content should be at least 3 characters long!"],
    },
    gameId: { type: Types.ObjectId, ref: "Game" },
    _ownerId: { type: Types.ObjectId, ref: "User" },
    games: { type: [Types.ObjectId], ref: "Game", default: [] },
  },
  { timestamps: { createdAt: "created_at" } }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;

/*
{
  _id: "",
  subject: "Gta V"
  content: "Great game!",
  _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8",
  gameId: "8f414b4f-ab39-4d36-bedb-2ad69da9c830",
  _createdOn: 1614260681375,
};
*/

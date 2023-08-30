const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  title: { type: String, require: true },
  message: { type: String, require: true },
  author: { type: Schema.Types.ObjectId, ref: "User", require: true },
});

MessageSchema.virtual("url").get(function () {
  return `/member/message/${this.id}`;
});

MessageSchema.virtual("display_name").get(function () {
  return `${this.author.full_name}`;
});

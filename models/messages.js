const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  title: { type: String, require: true },
  message: { type: String, require: true },
  author: { type: Schema.Types.ObjectId, ref: "User", require: true },
  date: { type: Date, require: true },
});

MessageSchema.virtual("url").get(function () {
  return `/member/message/${this.id}`;
});

MessageSchema.virtual("display_name").get(function () {
  return `${this.author.display_name}`;
});

MessageSchema.virtual("date_formatted").get(function () {
  return DateTime.fromJSDate(this.date).toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS
  );
});

module.exports = mongoose.model("Message", MessageSchema);

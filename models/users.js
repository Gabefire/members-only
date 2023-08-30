const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  display_name: { type: String, required: true, maxLength: 100 },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

UserSchema.virtual("url").get(function () {
  return `/member/user/${this._id}`;
});

module.exports = mongoose.model("User", UserSchema);

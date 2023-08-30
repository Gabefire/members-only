const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  display_name: { type: String, required: true, maxLength: 100 },
  email: { type: String, required: true },
  password: { type: String, required: true },
  member: { type: Boolean, default: false },
  admin: { type: Boolean, default: false },
});

UserSchema.virtual("member_url").get(function () {
  return `/member/${this._id}`;
});

module.exports = mongoose.model("User", UserSchema);

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  last_name: { type: String, maxLength: 100 },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

UserSchema.virtual("name").get(function () {
  let fullname = this.first_name;
  if (this.first_name && this.last_name) {
    fullname = `${this.first_name} ${this.last_name}`;
  }
  return fullname;
});

UserSchema.virtual("url").get(function () {
  return `/member/user/${this._id}`;
});

module.exports = mongoose.model("User", UserSchema);

const { body, validationResult } = require("express-validator");
const Message = require("../models/message");
const asyncHandler = require("express-async-handler");

/* Display messages */
exports.index = asyncHandler(async (req, res, next) => {
  // Get all messages
  try {
    const allMessages = await Message.find({})
      .sort({ date: 1 })
      .populate("author")
      .exec();
    res.render("index", {
      messages: allMessages,
      user: req.user,
    });
  } catch (err) {
    res.render("index", {
      message: [],
      user: req.user,
    });
  }
});

exports.create_message_get = (req, res, next) => {
  res.send("create_message");
};

exports.create_message_post = (req, rest, next) => {
  res.send("create_message_post");
};

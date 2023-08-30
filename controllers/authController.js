const { body, validationResult } = require("express-validator");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const passport = require("passport");

exports.user_login_get = (req, res, next) => {
  res.render("login", {
    authenticated: false,
  });
};

exports.user_login_post = [
  body("username").trim().isEmail(),
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/user/login",
    failureMessage: true,
  }),
];

exports.user_sign_up_get = (req, res, next) => {
  res.render("signup", {
    authenticated: false,
  });
};

exports.user_sign_up_post = [
  body("display_name")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Display name is empty")
    .escape()
    .custom(async (value) => {
      const userDisplayName = await User.find(
        { display_name: value },
        "display_name"
      );
      if (userDisplayName) {
        throw new Error("Display name already taken");
      }
    }),
  body("email", "Please enter valid email").trim().isEmail(),
  body("password")
    .isLength({ min: 5 })
    .withMessage("password must be 5 characters or more"),
  body("confirm_password").custom((value, { req }) => {
    return value === req.body.password;
  }),
  asyncHandler(async (req, res, next) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        throw new Error(errors.array())
      }
      const user = new User({
        display_name: req.body.display_name,
        email: req.body.email,
        password: req.body.password,
      });
      const result = await user.save();
      console.log(result);
      res.redirect("/");
    } catch (err) {
      return next(err);
    }
  }),
];

exports.user_membership_get = (req, res, next) => {
  res.render("become_member", {
    display_name: req.user.display_name,
    email: req.user.email,
    password: req.user.password,
    member: req.boby.member,
    admin: req.user.admin,
    _id: req.params.id
  });
};

exports.user_membership_post = asyncHandler(async (req, res, next) => {
  try {
    const user = new User({
      
    })

  }
});

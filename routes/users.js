const express = require("express");
const router = express.Router();

const auth_controller = require("../controllers/authController");

/* GET user log in. */
router.get("/login", auth_controller.user_login_get);

/* POST user log in */
router.post("/login", auth_controller.user_login_post);

/* GET user sign up */
router.get("/sign-up", auth_controller.user_sign_up_get);

/* POST user sign up */
router.post("/sign-up", auth_controller.user_sign_up_post);

/* GET user membership */
router.get("/membership", auth_controller.user_membership_get);

/* POST user membership */
router.post("/membership", auth_controller.user_membership_post);

module.exports = router;

const express = require("express");
const router = express.Router();

const message_board_controller = require("../controllers/messageboardController");

/* GET message board. */
router.get("/", message_board_controller.index);

/* GET request for adding message */
router.get("/create-message", message_board_controller.create_message_get);

/* POST request for adding message */
router.post("/create-message", message_board_controller.create_message_post);

module.exports = router;

const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersControllersV1");
const { protect } = require("../middleware/authMiddleware");

router.post("/", controller.registerUser);
router.post("/login", controller.loginUser);
router.get("/profile", protect, controller.profileUser);

module.exports = router;

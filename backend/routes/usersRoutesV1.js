const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersControllersV1");

router.post("/", controller.registerUser);
router.post("/login", controller.loginUser);
router.get("/profile", controller.profileUser);

module.exports = router;

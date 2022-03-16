const express = require("express");
const router = express.Router();
const controller = require("../controllers/tasksControllersV1");
const { protect } = require("../middleware/authMiddleware");

router
  .route("/")
  .get(protect, controller.getAllTasks)
  .post(protect, controller.createTask);

// router.get("/", controller.getAllTasks);
// router.post("/", controller.createTask);

router
  .route("/:id")
  .get(protect, controller.getTask)
  .put(protect, controller.updateTask)
  .delete(protect, controller.deleteTask);

// router.get("/:id", controller.getTask);
// router.put("/:id", controller.updateTask);
// router.delete("/:id", controller.deleteTask);

module.exports = router;

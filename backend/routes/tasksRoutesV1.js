const express = require("express");
const router = express.Router();
const controller = require("../controllers/tasksControllersV1");

router.route("/").get(controller.getAllTasks).post(controller.createTask);

// router.get("/", controller.getAllTasks);
// router.post("/", controller.createTask);

router
  .route("/:id")
  .get(controller.getTask)
  .put(controller.updateTask)
  .delete(controller.deleteTask);

// router.get("/:id", controller.getTask);
// router.put("/:id", controller.updateTask);
// router.delete("/:id", controller.deleteTask);

module.exports = router;

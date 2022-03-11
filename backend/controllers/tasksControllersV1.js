const asyncHandler = require("express-async-handler");

const tasks = require("../models/tasksModelsV1");

const getAllTasks = async (req, res) => {
  const task = await tasks.find();
  res.status(200).json(task);
};

const getTask = async (req, res) => {
  res.status(200).json({ message: "obtener una tarea" });
};

const createTask = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    // res.status(400).json({ message: "Titulo requerido" })
    res.status(400);
    throw new Error("Titulo requerido");
  }

  const newTask = await tasks.create({
    title: req.body.title,
    description: req.body.description,
  });

  res.status(200).json(newTask);
});

const updateTask = async (req, res) => {
  // const search = tasks.findById(req.params.id);

  // if (!search) {
  //   res.status(400);
  //   throw new Error(`No encontre una tarea con el ID: ${req.params.id}`);
  // }

  const updateTask = await tasks.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (updateTask === null) {
    res.status(400);
    throw new Error("No encontre la tarea");
  }

  res.status(200).json(updateTask);
};

const deleteTask = async (req, res) => {
  const search = tasks.findById(req.params.id);

  if (!search) {
    res.status(400);
    throw new Error(`No encontre una tarea con el ID: ${req.params.id}`);
  }

  await search.remove();

  res.status(200).json({ id: req.params.id });
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};

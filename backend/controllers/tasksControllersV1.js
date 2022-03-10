const getAllTasks = (req, res) => {
  res.status(200).json({ message: "obtener todas las tarea" });
};

const getTask = (req, res) => {
  res.status(200).json({ message: "obtener una tarea" });
};

const createTask = (req, res) => {
  res.status(200).json({ message: "Crear una tarea" });
};

const updateTask = (req, res) => {
  res.status(200).json({ message: "actualizar una tarea" });
};

const deleteTask = (req, res) => {
  res.status(200).json({ message: "eliminar una tarea" });
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};

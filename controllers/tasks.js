const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("all items");
};

const createTask = async (req, res) => {
  const { name, completed } = req.body;

  try {
    const task = await Task.create({
      name,
      completed,
    });
    res.status(201).json({ task });
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

const getTask = (req, res) => {
  res.send("get single task");
};

const updateTask = (req, res) => {
  res.send("task updated");
};

const deleteTask = (req, res) => {
  res.send("task deleted");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};

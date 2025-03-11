const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

const getTask = async (req, res) => {
  try {
    const taskID = req.params.id;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res
        .status(404)
        .json({ message: `Task with id ${taskID} doesn't exist. ` });
    }
    res.status(200).json({ task });
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const taskID = req.params.id;

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res
        .status(404)
        .json({ message: `Task with id ${taskID} doesn't exist. ` });
    }

    res.status(200).json({ task });
  } catch (e) {
    console.log(e);
  }
};

const deleteTask = async (req, res) => {
  try {
    const taskID = req.params.id;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
      return res
        .status(404)
        .json({ message: `Task with id ${taskID} doesn't exist. ` });
    }

    res.status(200).json({ task });
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};

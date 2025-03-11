const Task = require("../models/Task");
const asyncWrapper = require("../middlewares/asyncWrapper");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

//keeping this outside the wrapper cause it needs to be understood better (the wrapper)
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

const updateTask = asyncWrapper(async (req, res) => {
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
});

const deleteTask = asyncWrapper(async (req, res) => {
  const taskID = req.params.id;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    return res
      .status(404)
      .json({ message: `Task with id ${taskID} doesn't exist. ` });
  }

  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};

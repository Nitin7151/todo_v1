const Task = require('../models/taskModel');
const asyncHandler = require('express-async-handler');

// Create a new task
const createTask = asyncHandler(async (req, res) => {
  // Implementation for creating a task
  res.status(201).json({ message: 'Create Task' });
});

// Get a task by ID
const getTask = asyncHandler(async (req, res) => {
  // Implementation for getting a task by ID
  res.status(200).json({ message: `Get Task ${req.params.id}` });
});

// Update a task
const updateTask = asyncHandler(async (req, res) => {
  // Implementation for updating a task
  res.status(200).json({ message: `Update Task ${req.params.id}` });
});

// Delete a task
const deleteTask = asyncHandler(async (req, res) => {
  // Implementation for deleting a task
  res.status(200).json({ message: `Delete Task ${req.params.id}` });
});

// Get all tasks
const getAllTasks = asyncHandler(async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve tasks' });
  }
});

module.exports = {
  createTask,
  getTask,
  updateTask,
  deleteTask,
  getAllTasks,
};

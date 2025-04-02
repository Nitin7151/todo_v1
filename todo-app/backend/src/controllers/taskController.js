const Task = require('../models/taskModel');
const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

// Create a new task
const createTask = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    res.status(400);
    throw new Error('Please provide title and description');
  }

  try {
    const task = await Task.create({
      title,
      description,
      user: req.user.id,
    });

    res.status(201).json({
      message: 'Task created',
      task: {
        _id: task.id,
        title: task.title,
        description: task.description,
      },
    });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ message: 'Failed to create task' });
  }
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

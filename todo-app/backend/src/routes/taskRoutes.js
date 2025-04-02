const express = require('express');
const router = express.Router();
const {
  createTask,
  getTask,
  updateTask,
  deleteTask,
  getAllTasks,
} = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');

// Define task routes
router.post('/', authMiddleware, createTask);
router.get('/', authMiddleware, getAllTasks);
router.get('/:id', authMiddleware, getTask);
router.put('/:id', authMiddleware, updateTask);
router.delete('/:id', authMiddleware, deleteTask);

module.exports = router;

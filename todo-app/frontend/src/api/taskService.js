import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks'; // Backend URL

// Get all tasks
export const getAllTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Create a new task
export const createTask = async (taskData) => {
  try {
    const response = await axios.post(API_URL, taskData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update a task
export const updateTask = async (id, updates) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updates);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete a task
export const deleteTask = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw error;
  }
};

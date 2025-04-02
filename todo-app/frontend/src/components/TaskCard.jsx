import React from 'react';
import styles from '../styles/components/TaskCard.module.css';
import { useTaskContext } from '../contexts/TaskContext';

const TaskCard = ({ task }) => {
  const { updateTask, deleteTask } = useTaskContext();

  const handleComplete = async () => {
    try {
      await updateTask(task._id, { completed: true });
      // Optionally, update the task in the local state for immediate UI feedback
    } catch (error) {
      console.error("Failed to complete task:", error);
    }
  };

  const handleDelete = () => {
    deleteTask(task._id);
  };

  return (
    
      <div className={`${styles.taskCard} ${task.completed ? styles.completed : ''}`}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <div className={styles.buttonGroup}>
          <button onClick={handleComplete} className={styles.completeButton}>Complete</button>
          <button onClick={handleDelete} className={styles.deleteButton}>Delete</button>
        </div>
      </div>
    
  );
};

export default TaskCard;

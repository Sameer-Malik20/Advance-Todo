import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
      setFilteredTasks(response.data);
    } catch (err) {
      console.log('Error fetching tasks:', err);
    }
  };

  const addTask = async (taskData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/tasks', taskData);
      const newTasks = [...tasks, response.data];
      setTasks(newTasks);
      setFilteredTasks(newTasks);
    } catch (err) {
      console.log('Error adding task:', err);
    }
  };

  const updateTask = async (id, taskData) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/tasks/${id}`, taskData);
      const updated = tasks.map(task => task._id === id ? response.data : task);
      setTasks(updated);
      setFilteredTasks(updated);
    } catch (err) {
      console.log('Error updating task:', err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      const remaining = tasks.filter(task => task._id !== id);
      setTasks(remaining);
      setFilteredTasks(remaining);
    } catch (err) {
      console.log('Error deleting task:', err);
    }
  };

  const markTaskComplete = async (id, completed) => {
    try {
      const response = await axios.patch(`http://localhost:5000/api/tasks/${id}/complete`, { completed });
      const updated = tasks.map(task => task._id === id ? response.data : task);
      setTasks(updated);
      setFilteredTasks(updated);
    } catch (err) {
      console.log('Error updating task status:', err);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, filteredTasks, setFilteredTasks, addTask, updateTask, deleteTask, markTaskComplete }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
const express = require('express');
const Task = require('../models/taskModels.js');

const router = express.Router();

// Create a Task
router.post('/', async (req, res) => {
  const { title, description, dueDate, category } = req.body;
  const task = new Task({ title, description, dueDate, category });
  
  try {
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: 'Error adding task', error: err });
  }
});

// Get all Tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Edit Task
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
  } catch (err) {
    res.status(400).json({ message: 'Error updating task', error: err });
  }
});

// Delete Task
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted', task });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting task', error: err });
  }
});

// Mark Task as Completed/Incompleted
router.patch('/:id/complete', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, { completed: req.body.completed }, { new: true });
    res.json(task);
  } catch (err) {
    res.status(400).json({ message: 'Error updating task status', error: err });
  }
});

module.exports = router;

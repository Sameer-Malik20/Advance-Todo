import { useState, useContext } from 'react';
import TaskContext from './TaskContext';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = { title, description, dueDate, category };
    addTask(taskData);
    setTitle('');
    setDescription('');
    setDueDate('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 mb-4 rounded shadow-md">
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title" 
        className="border p-2 mb-2 w-full rounded" 
        required
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Description" 
        className="border p-2 mb-2 w-full rounded"
        required
      ></textarea>
      <input 
        type="date" 
        value={dueDate} 
        onChange={(e) => setDueDate(e.target.value)} 
        className="border p-2 mb-2 w-full rounded"
        required
      />
      <select 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        className="border p-2 mb-4 w-full rounded"
        required
      >
        <option value="">Select Category</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Urgent">Urgent</option>
        <option value="Other">Other</option>
      </select>
      <button 
        type="submit" 
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
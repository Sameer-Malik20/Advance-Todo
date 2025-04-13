import { useState } from 'react';
import TaskList from './taskList';
import AddTask from './addTask';
import SearchFilterBar from './searchFilter';

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => setShowForm(!showForm);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">Task Mate</h1>
      <SearchFilterBar />
      <div className="flex justify-end mb-4">
        <button 
          onClick={toggleForm} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {showForm ? 'Close Form' : 'Add New Task'}
        </button>
      </div>
      {showForm && <AddTask />}
      <TaskList />
    </div>
  );
};

export default HomePage;
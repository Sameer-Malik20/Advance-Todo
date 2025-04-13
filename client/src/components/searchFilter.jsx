import { useContext, useState, useEffect } from 'react';
import TaskContext from './TaskContext';

const SearchFilterBar = () => {
  const { tasks, setFilteredTasks } = useContext(TaskContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  // Debounce the search term to avoid excessive re-renders
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // Wait for 500ms after the last keystroke

    return () => clearTimeout(timer); // Clear the timer if searchTerm changes before the timeout
  }, [searchTerm]);

  // Filter tasks when either searchTerm, category, or tasks change
  useEffect(() => {
    const filtered = tasks.filter(task =>
      (task.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
       task.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase())) &&
      (category ? task.category === category : true)
    );
    setFilteredTasks(filtered);
  }, [debouncedSearchTerm, category, tasks, setFilteredTasks]);

  // Extract unique categories from tasks for the dropdown
  const categories = [...new Set(tasks.map(task => task.category))];

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-4">
      <input
        type="text"
        placeholder="Search tasks..."
        className="flex-1 border p-2 rounded"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <select
        className="border p-2 rounded"
        value={category}
        onChange={e => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilterBar;

import { useContext, useState } from 'react';
import TaskContext from './TaskContext';

const TaskList = () => {
  const { filteredTasks, deleteTask, markTaskComplete, updateTask } = useContext(TaskContext);
  
  // State to manage which section to show
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  // State to handle editing task
  const [editingTask, setEditingTask] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [updatedCategory, setUpdatedCategory] = useState('');
  const [updatedDueDate, setUpdatedDueDate] = useState('');

  const filterTasks = () => {
    if (selectedFilter === 'active') {
      return filteredTasks.filter(task => !task.completed);
    }
    if (selectedFilter === 'completed') {
      return filteredTasks.filter(task => task.completed);
    }
    return filteredTasks; // For 'all' filter
  };
  
  const filtered = filterTasks();

 const handleEditClick = (task) => {
    setEditingTask(task);
    setUpdatedTitle(task.title);
    setUpdatedDescription(task.description);
    setUpdatedCategory(task.category);
    setUpdatedDueDate(task.dueDate);
  };

  // Function to handle task edit submission
  const handleEditSubmit = () => {
    if (editingTask) {
      const updatedTask = {
        ...editingTask,
        title: updatedTitle,
        description: updatedDescription,
        category: updatedCategory,
        dueDate: updatedDueDate
      };
      updateTask(editingTask._id, updatedTask);
      setEditingTask(null); // Close the edit form
      setUpdatedTitle('');
      setUpdatedDescription('');
      setUpdatedCategory('');
      setUpdatedDueDate('');
    }
  };


  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setSelectedFilter('all')}
          className={`p-2 ${selectedFilter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedFilter('active')}
          className={`p-2 ${selectedFilter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Active
        </button>
        <button
          onClick={() => setSelectedFilter('completed')}
          className={`p-2 ${selectedFilter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Completed
        </button>
      </div>
      
      {/* Task Lists */}
      <div className="task-list">
        {filtered.map(task => (
          <div key={task._id} className="task-card p-4 mb-2 border rounded shadow-sm bg-white">
            {/* Task details */}
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p>{task.description}</p>
            <p className="text-sm text-gray-500">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
            <p className="text-sm text-gray-700">Category: {task.category}</p>
            
            {/* Circle Toggle Button */}
            <div className="flex items-center gap-2 mt-2">
              {task.completed ? (
                <button
                  onClick={() => markTaskComplete(task._id, false)}
                  className="w-6 h-6 border-2 border-gray-500 rounded-full bg-green-500"
                />
              ) : (
                <button
                  onClick={() => markTaskComplete(task._id, true)}
                  className="w-6 h-6 border-2 border-gray-500 rounded-full bg-gray-200"
                />
              )}

              {/* Show Edit/Delete for Active Tasks */}
              {!task.completed && (
                <div className="flex gap-2">
                  <button onClick={() => handleEditClick(task)} className="text-yellow-500 p-2">
                    Edit
                  </button>
                  <button onClick={() => deleteTask(task._id)} className="text-red-500 p-2">
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Edit Task Modal */}
      {editingTask && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
            
            <div className="mb-2">
              <label htmlFor="title" className="block text-sm">Title</label>
              <input
                type="text"
                id="title"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                className="p-2 w-full border rounded"
              />
            </div>
            
            <div className="mb-2">
              <label htmlFor="description" className="block text-sm">Description</label>
              <input
                type="text"
                id="description"
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
                className="p-2 w-full border rounded"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="category" className="block text-sm">Category</label>
              <select
                id="category"
                value={updatedCategory}
                onChange={(e) => setUpdatedCategory(e.target.value)}
                className="p-2 w-full border rounded"
              >
                <option value="">Select a Category</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Study">Study</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="mb-2">
              <label htmlFor="dueDate" className="block text-sm">Due Date</label>
              <input
                type="date"
                id="dueDate"
                value={updatedDueDate}
                onChange={(e) => setUpdatedDueDate(e.target.value)}
                className="p-2 w-full border rounded"
              />
            </div>

            <div className="flex gap-4">
              <button onClick={handleEditSubmit} className="bg-blue-500 text-white p-2 rounded">
                Save
              </button>
              <button onClick={() => setEditingTask(null)} className="bg-gray-500 text-white p-2 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;

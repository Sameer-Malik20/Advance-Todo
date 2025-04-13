import { TaskProvider } from './components/TaskContext';
import HomePage from './components/home';

function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-100">
        <HomePage />
      </div>
    </TaskProvider>
  );
}

export default App;
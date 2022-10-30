import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskCombo from './components/TaskCombo'

function App() {
  return (
    <div className="App">
      <TaskForm />
      <TaskList />
      <TaskCombo />
    </div>
  );
}

export default App;

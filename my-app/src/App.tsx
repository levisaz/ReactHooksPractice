import React from 'react';
import './App.css';
import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Task1',
      completed: false
    },
    {
      id: 2,
      text: 'Task2',
      completed: false
    },
    {
      id: 3,
      text: 'Task3',
      completed: false
    }
  ])
  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;

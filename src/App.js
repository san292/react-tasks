import React, { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';
// import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  // function pour supprimer une tachee(task)
  const deleteTask = async (id) => {
    // setTasks(tasks.filter((task) => task.id !== id));
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    });
    // const data = await res.json();
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // function pour faire le rappel de la tache avec le double click
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // function pour ajouter une tache(task)
  const addTask = async (task) => {
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    const data = await res.json();
    setTasks([...tasks, data]);
    console.log('dataadddddddddddddddddd', data);
  };

  //function pour afficher le formuliare addtask ou le masquer
  const showAddTaskForm = () => {
    setShowAddTask(!showAddTask);
  };

  //function pour fetcher les tasks au server
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    console.log('data', data);
    return data;
  };

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  return (
    <div className="container">
      <Header onShowAdd={showAddTaskForm} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        'pas de tache à afficher '
      )}
    </div>
  );
}

export default App;

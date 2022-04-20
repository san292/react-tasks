import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';

// import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  // GET TASKS (function pour fetcher les taches au server)

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    console.log('data', data);
    return data;
  };

  // GET TASK (function pour fetcher une tache au server)
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
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

  // DELETE TASK (function pour supprimer une tache)

  const deleteTask = async (id) => {
    // setTasks(tasks.filter((task) => task.id !== id));
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    });
    // const data = await res.json();
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // ADD TASK (function pour ajouter une tache)

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

  // function pour faire le rappel de la tache avec le double click
  const toggleReminder = async (id) => {
    const taskToToogle = await fetchTask(id);
    console.log('taskToToogle', taskToToogle);
    const upTask = { ...taskToToogle, reminder: !taskToToogle.reminder };
    console.log('upTask', upTask);

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(upTask)
    });
    const data = await res.json();
    setTasks(data);

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <Router>
      <div className="container">
        <Header onShowAdd={showAddTaskForm} showAddTask={showAddTask} />
        <Routes>
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

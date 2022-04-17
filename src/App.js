import React, { useState } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'rdv dentiste',
      day: '3 mai à 14h00',
      reminder: true
    },
    {
      id: 2,
      text: 'rdv ecole assia',
      day: '6 mars à 14h00',
      reminder: true
    },
    {
      id: 3,
      text: 'sortie cinema avec les petits',
      day: '20 avril à 15h00',
      reminder: true
    }
  ]);

  // function pour supprimer une tachee(task)
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));

    // function pour faire le rappel de la tache avec le double click
  };
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //function pour ajouter une tache(task)
  const addTask = (task) => {
    console.log('addtask----->');
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
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

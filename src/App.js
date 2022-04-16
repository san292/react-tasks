import React, { useState } from 'react';
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
  };
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} />
      ) : (
        'pas de tache à afficher '
      )}
    </div>
  );
}

export default App;

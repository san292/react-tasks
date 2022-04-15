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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;

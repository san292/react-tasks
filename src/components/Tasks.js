import Task from './Task';

const Tasks = ({ tasks, deleteTask, onToggle }) => {
  console.log('tasks from component tasks', tasks);
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Tasks;

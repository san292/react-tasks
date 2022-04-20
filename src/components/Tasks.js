import Task from './Task';

const Tasks = ({ tasks, deleteTask, onToggle }) => {
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

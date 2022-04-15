import Task from './Task';

const Tasks = ({ tasks }) => {
  console.log('-----', tasks);
  return (
    <div>
      {tasks.map((task) => (
        <Task task={task} />
      ))}
    </div>
  );
};

export default Tasks;

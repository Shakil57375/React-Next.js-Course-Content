import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";
import { initialTasks } from "../src/data/tasks";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );
    console.log(maxId);
    return maxId + 1;
  };

  // handlers
  const handleAddTask = (text) => {
    console.log(text);
    setTasks([
      ...tasks,
      {
        id: getNextId(tasks),
        text: text,
        done: false,
      },
    ]);
  };

  const handleChangeTask = (task) => {
    const updatedTask = tasks.map((pTask) => {
      if (pTask.id === task.id) {
        return task;
      } else {
        return pTask;
      }
    });
    setTasks(updatedTask);
  };

  const handledeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <p>Prague Itinerary</p>
      <AddTask onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handledeleteTask}
      />
    </div>
  );
}

export default App;

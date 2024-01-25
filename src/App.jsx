import React, { useState } from "react";
import AddTask from "./Components/AddTask";
import { initialTasks } from "../src/data/tasks";
import TaskList from "./Components/TaskList";
const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );

    return maxId + 1;
  };

  // handlers
  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: getNextId(tasks),
        text: text,
        done: false,
      },
    ]);
  };

  const handleChange = (task) => {
    const updatedTask = tasks.map((pTask) => {
      if (pTask.id === task.id) {
        return task;
      } else {
        return pTask;
      }
    });
    setTasks(updatedTask);
  };

  const handleDelete = (Taskid) => {
    setTasks(tasks.filter((task) => task.id !== Taskid));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onTaskChange={handleChange}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;

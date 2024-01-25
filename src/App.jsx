import React, { useReducer, useState } from "react";
import AddTask from "./Components/AddTask";
import { initialTasks } from "../src/data/tasks";
import TaskList from "./Components/TaskList";
import { TaskReducer } from "./Reducer/taskReducer";
const App = () => {
  const [tasks, dispatch] = useReducer( TaskReducer, initialTasks);
  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );

    return maxId + 1;
  };

  // handlers
  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: getNextId(tasks),
      text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <div>
      <h1>Todo List</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onTaskChange={handleChangeTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
};

export default App;

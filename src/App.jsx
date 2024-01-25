import React, { useReducer, useState } from "react";
import AddTask from "./Components/AddTask";
import { initialTasks } from "../src/data/tasks";
import TaskList from "./Components/TaskList";
import taskReducer from "./Reducer/taskReducer";
import { useImmerReducer } from "use-immer";
const App = () => {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);
  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );

    return maxId + 1;
  };

 // handlers
 const handleAddTask = (text) => {
  dispatch({
      type: "added",
      text,
      id: getNextId(tasks),
  });
};

const handleChangeTask = (task) => {
  dispatch({
      type: "changed",
      task,
  });
};

const handleDeleteTask = (taskId) => {
  dispatch({
      type: "deleted",
      id:  taskId,
  });
};
 
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

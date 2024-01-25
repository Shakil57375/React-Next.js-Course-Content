import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onTaskChange, onDelete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onTaskChange={onTaskChange}
        />
      ))}
    </div>
  );
};

export default TaskList;

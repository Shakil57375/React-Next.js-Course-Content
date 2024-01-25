import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onChangeTask={onChangeTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

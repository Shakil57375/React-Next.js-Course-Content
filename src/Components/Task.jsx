import React, { useState } from "react";

const Task = ({ task, onChangeTask, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) =>{
            onChangeTask({
                ...task,
                text : e.target.value
            })
          }}
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <button onClick={() => setIsEditing(false)} className="btn btn-accent">
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)} className="btn btn-accent">
          Edit
        </button>
      </>
    );
  }
  return (
    <div>
      <li className="menu">
        <label className="flex gap-5 items-center">
          <input
            type="checkbox"
            checked={task.done}
            onChange={(e) => {
              onChangeTask({
                ...task,
                done: e.target.checked,
              });
            }}
            className="checkbox checkbox-accent"
          />
          {/* {isEditing ? (
            <>
              <input
                type="text"
                value={task.text}
                className="input input-bordered input-accent w-full max-w-xs"
              />
            </>
          ) : (
            <>{task.text}</>
          )}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="btn btn-accent"
          >
            {isEditing ? "Save" : "Edit"}
          </button> */}
          {taskContent}
          <button
            onClick={() => onDeleteTask(task.id)}
            className="btn btn-accent"
          >
            Delete
          </button>
        </label>
      </li>
    </div>
  );
};

export default Task;

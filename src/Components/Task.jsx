import React, { useState } from "react";

const Task = ({ task, onTaskChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  let textContent;
  if (isEditing) {
    textContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) =>
            onTaskChange({
              ...task,
              text: e.target.value,
            })
          }
          placeholder="Type here"
          className="input input-bordered input-secondary w-full max-w-xs"
        />
        <button onClick={() => setIsEditing(false)} className="btn btn-accent">
          Save
        </button>
      </>
    );
  } else {
    textContent = (
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
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) =>
          onTaskChange({
            ...task,
            done: e.target.checked,
          })
        }
        className="checkbox checkbox-accent"
      />
      {textContent}
      <button onClick={() => onDelete(task.id)} className="btn btn-accent">
        Delete
      </button>
    </div>
  );
};

export default Task;

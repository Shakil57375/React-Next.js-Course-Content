import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Type here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input input-bordered input-secondary w-full max-w-xs"
      />
      <button onClick={() => onAdd(text)} className="btn btn-accent">
        Add Task
      </button>
    </div>
  );
};

export default AddTask;

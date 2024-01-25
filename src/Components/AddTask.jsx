import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  return (
    <div className="flex gap-5">
      <input
        type="text"
        placeholder="Add Task"
        className="input input-bordered input-accent w-full max-w-xs"
        value={text}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.keyCode === 13) {
            setText("");
            onAdd(text);
          }
        }}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAdd(text);
        }}
        className="btn btn-accent"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;

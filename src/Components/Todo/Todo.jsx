import React, { useState } from "react";

export default function Todo({ todo, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEdited] = useState(todo);
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = () => {
    onEdit(editedTodo);
    setIsEditing(false);
  };
  return (
    <div className="mt-4">
      {isEditing ? (
        <div className="flex gap-2">
          <input
            type="text"
            value={editedTodo}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSave();
              }
            }}
            className="input input-bordered input-error w-full max-w-xs"
            onChange={(e) => setEdited(e.target.value)}
          />
          <button className="btn btn-success" onClick={handleSave}>save</button>
        </div>
      ) : (
        <div className="flex gap-3 mt-2 items-center">
          <span>{todo}</span>
          <button
            className="bg-red-500 px-5 py-2 rounded-lg"
            onClick={onDelete}
          >
            Delete
          </button>
          <button
            className="bg-yellow-500 px-5 py-2 rounded-lg"
            onClick={handleEdit}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

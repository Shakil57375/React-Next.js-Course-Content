/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
const Todos = ({ todos, handleDelete, onEdit }) => {
  const [isEdited, setIsEdited] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(" ");
  const handleSave = () => {
    onEdit(updatedTodo);
    setIsEdited(false);
  };

  const handleEdit = () => {
    setIsEdited(true);
  };

  return (
    <div className="flex items-center justify-center mt-5 gap-3">
      {isEdited ? (
        <div className="flex items-center gap-3">
          <input
            type="text"
            className="input input-bordered input-info w-full max-w-xs"
            value={updatedTodo}
            placeholder="Edit your todo"
            onChange={(e) => setUpdatedTodo(e.target.value)}
          />
          <button
            className="bg-green-600 px-4 py-3 ml-3 rounded-lg"
            onClick={handleSave}
          >
            save
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center mt-5 gap-3">
          <p className="text-xl font-bold">{todos}</p>
          <AiFillDelete
            className="text-xl text-red-600 cursor-pointer"
            onClick={handleDelete}
          />
          <MdEdit className="text-xl cursor-pointer" onClick={handleEdit} />
        </div>
      )}
    </div>
  );
};

export default Todos;

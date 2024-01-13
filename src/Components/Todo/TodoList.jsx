import React, { useState } from "react";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState(" ");
  const handleAddingTodos = () => {
    setTodos([...todos, newTodos]);
    setNewTodos(" ");
  };
  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };
  const editTodo = (updateTodo, index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = updateTodo;
    setTodos(updatedTodos);
  };
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div>
          <p className="text-2xl font-bold mb-2">Add your todos here</p>
        </div>
        <div  className="flex gap-2">
          <input
            type="text"
            placeholder="Type here"
            value={newTodos}
            onChange={(e) => setNewTodos(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddingTodos();
              }
            }}
            className="input input-bordered input-error w-full max-w-xs"
          />
          <button onClick={handleAddingTodos} className="btn btn-success">
            Success
          </button>
        </div>
      </div>
      <div>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            onDelete={() => handleDelete(index)}
            onEdit={(updateTodo) => editTodo(updateTodo, index)}
          />
        ))}
      </div>
    </div>
  );
}

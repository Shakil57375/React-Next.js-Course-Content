import { useState } from "react";
import Todos from "./Todos";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleAddingTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo(" ");
    }
  };

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleEditTodos = (index, updatedTodo) => {
    const previousTodos = [...todos];
    previousTodos[index] = updatedTodo;
    setTodos(previousTodos);
  };
  console.log(todos);
  return (
    <div className="mt-5">
      <div className="flex items-center justify-center">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          type="text"
          placeholder="Create your todos"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.keyCode === 13) {
              handleAddingTodo();
            }
          }}
          className="input input-bordered input-info w-full max-w-xs"
        />
        <button
          className="bg-green-600 px-4 py-3 ml-3 rounded-lg"
          onClick={handleAddingTodo}
        >
          Add
        </button>
      </div>
      {todos.map((todo, index) => (
        <Todos
          key={index}
          handleDelete={() => handleDelete(index)}
          todos={todo}
          onEdit={(updatedTodo) => handleEditTodos(index, updatedTodo)}
        />
      ))}
    </div>
  );
};

export default TodoList;

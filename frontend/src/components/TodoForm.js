import React, { useState } from "react";
import axios from "axios";

const TodoForm = ({ getAllTodos }) => {
  const [todo, setTodo] = useState("");
  const handleAddTodo = async () => {
    try {
      const resp = await axios.post("http://localhost:5500/api/v1/todos/", {
        title: todo,
      });
      console.log(resp);
      setTodo("");
      getAllTodos();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" min-w-[500px] border border-gray-400 flex ">
      <input
        type="text"
        className="grow py-2 px-1"
        placeholder="Add your new todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="p-2 bg-gray-800 text-white px-7 "
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;

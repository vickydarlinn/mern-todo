import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import axios from "axios";

const App = () => {
  const [allTodos, setAllTodos] = useState([]);
  async function getAllTodos() {
    const todos = await axios.get("http://localhost:5500/api/v1/todos/");
    setAllTodos(todos.data.data);
  }
  return (
    <div className="flex flex-col items-center mt-40 gap-1">
      <TodoForm getAllTodos={getAllTodos} />
      <TodoList allTodos={allTodos} getAllTodos={getAllTodos} />
    </div>
  );
};

export default App;

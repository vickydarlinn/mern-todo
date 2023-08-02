import React, { useState } from "react";
import axios from "axios";

const Todo = ({ todo, getAllTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState("");

  const handleEditClick = (todo) => {
    setIsEditing(true);
    setEditedTodo(todo.title);
  };

  const handleSaveClick = async (todo) => {
    try {
      setIsEditing(false);
      const response = await axios.patch(
        `http://localhost:5500/api/v1/todos/${todo._id}`,
        {
          title: editedTodo,
        }
      );
      console.log(response);
      getAllTodos();
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteTodo = async (todo) => {
    const response = await axios.delete(
      `http://localhost:5500/api/v1/todos/${todo._id}`
    );
    console.log(response);
    getAllTodos();
  };

  if (isEditing) {
    return (
      <div className="flex min-w-[500px] border border-gray-500 bg-gray-300  gap-3 items-center">
        <input
          type="text"
          className="grow p-1"
          value={editedTodo}
          onChange={(e) => setEditedTodo(e.target.value)}
        />
        <button onClick={() => handleSaveClick(todo)}>Save</button>
      </div>
    );
  }

  return (
    <div className="flex min-w-[500px] border border-gray-500 bg-gray-300 p-1 gap-3 items-center">
      <p className="grow">{todo.title}</p>
      <button onClick={() => handleEditClick(todo)}>Edit</button>
      <button onClick={() => handleDeleteTodo(todo)}>Delete</button>
    </div>
  );
};

export default Todo;

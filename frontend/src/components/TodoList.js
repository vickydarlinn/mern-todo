import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const TodoList = ({ getAllTodos, allTodos }) => {
  useEffect(() => {
    getAllTodos();
  }, []);
  return (
    <div className="flex flex-col gap-1">
      {allTodos.map((todo) => (
        <Todo key={todo._id} todo={todo} getAllTodos={getAllTodos} />
      ))}
    </div>
  );
};

export default TodoList;

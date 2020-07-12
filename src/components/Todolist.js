import React from "react";
import TodoItems from "./TodoItems";
export default function Todolist({ todos }) {
  return (
    <ul>
      {todos.map((el) => (
        <TodoItems name={el.title} key={el.id} {...el} />
      ))}
    </ul>
  );
}

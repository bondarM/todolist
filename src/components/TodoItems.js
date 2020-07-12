import React, { useContext } from "react";
import { Context } from "./Context";

export default function TodoItems({ title, id, completed }) {
  const cls = ["todo"];
  if (completed) {
    cls.push("completed");
  }

  const { toggleTodo, removeTodo } = useContext(Context);

  return (
    <li className={cls.join(" d-flex ")}>
      <label>
        <input
          className="inp__opasity"
          checked={completed}
          onChange={() => toggleTodo(id)}
          type="checkbox"
        />
        <span>{title}</span>
        <i
          onClick={() => removeTodo(id)}
          className="material-icons delete__icon  red-text"
        >
          delete
        </i>
      </label>
    </li>
  );
}

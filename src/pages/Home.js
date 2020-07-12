import React, { useState, useEffect } from "react";
import Todolist from "../components/Todolist";
import { Context } from "../components/Context";
import axios from "axios";
export default function Home() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Ваши задачи на сегодня",
      completed: false,
    },
  ]);

  const [todoTitle, setTodoTitile] = useState(" ");

  useEffect(() => {
    const raw = localStorage.getItem("todos") || [];
    setTodos(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (event) => {
    if (event.key === "Enter") {
      if (todoTitle.length < 1) {
        return false;
      }

      axios
        .post("https://todo-list-v1-43615.firebaseio.com/todolist.json", todos)
        .then((response) => {
          setTodos([
            ...todos,
            {
              id: Date.now(),
              title: todoTitle,
              completed: false,
            },
          ]);
          setTodoTitile("");
        })
        .catch((err) => {
          console.log("errorrrrr");
        });
    }
  };

  const removeTodo = (id) => {
    axios
      .delete("https://todo-list-v1-43615.firebaseio.com/todolist.json", todos)
      .then((response) => {
        setTodos(
          todos.filter((todo) => {
            return todo.id !== id;
          })
        );
      })
      .catch((err) => {
        console.log("errrrrrr delete");
      });
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((el) => {
        if (el.id === id) {
          el.completed = !el.completed;
        }
        return el;
      })
    );
  };

  return (
    <Context.Provider value={{ removeTodo, toggleTodo }}>
      <div className="col-lg-10 m-auto">
        <div className="input-field">
          <input
            className="text__inout"
            value={todoTitle}
            onChange={(event) => setTodoTitile(event.target.value)}
            onKeyPress={addTodo}
            type="text"
          />
          <label>Todo name</label>
        </div>
        <Todolist todos={todos} />
      </div>
    </Context.Provider>
  );
}

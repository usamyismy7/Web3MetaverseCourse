"use client";
import React, { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
    },
    {
      id: 2,
      text: "Learn NextJS",
    },
    {
      id: 3,
      text: "Learn NodeJS",
    },
  ]);
  const [input, setInput] = useState("");
  let randomNumber = Math.floor(Math.random() * 100);
  const addTodo = (todo) => {
    setTodos([...todos, { id: randomNumber, text: todo }]);
    setInput("");
  };
  const removeTodo = (id) => {
    const selectedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(selectedTodo);
  };

  // importing todos from jsonplaceholder
  const [todo, setTodo] = useState([]);
  const fetchTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setTodo(data);
    console.log(data);
  };
  React.useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todo</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>{todo.id}</p>
            <p>{todo.text}</p>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          value={input}
          type="text"
          placeholder="Add Todo"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => addTodo(input)}>Add</button>
      </div>
    </div>
  );
}

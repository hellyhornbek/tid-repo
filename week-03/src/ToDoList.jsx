import "./ToDoList.css";
import { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import NewTodoForm from "./NewTodoForm";

// reads this list's saved todos, used as useState's initial value
function loadTodos(storageKey, fallback) {
  const saved = localStorage.getItem(storageKey);
  return saved ? JSON.parse(saved) : fallback;
}

function ToDoList({ firstName, todos: initialTodos }) {
  const storageKey = `todos-${firstName}`;
  const [todos, setTodos] = useState(() => loadTodos(storageKey, initialTodos));

  // re-saves to localStorage every time todos changes
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(todos));
  }, [todos, storageKey]);

  // called from NewTodoForm's onAdd; appends a new todo object
  function handleAdd(text) {
    const newTodo = { id: crypto.randomUUID(), text, done: false };
    setTodos([...todos, newTodo]);
  }

  // called from ToDoItem's onToggle; flips one todo's done flag
  function handleToggle(id) {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  // called from ToDoItem's onRemove; drops one todo by id
  function handleRemove(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  return (
    <div className="List">
      <h1>To-Do-List for {firstName}</h1>
      <NewTodoForm onAdd={handleAdd} />
      {todos.length === 0 ? (
        <p>Nothing to do. Enjoy the afternoon.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onRemove={handleRemove}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToDoList;

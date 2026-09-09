import { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import NewTodoForm from "./NewTodoForm";

// reads the saved list once, used as useState's initial value
function loadTodos() {
  const saved = localStorage.getItem("todos");
  return saved ? JSON.parse(saved) : [];
}

function App() {
  const [todos, setTodos] = useState(loadTodos);

  // re-saves to localStorage every time todos changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
    <>
      <h1>To-Do-List</h1>
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
    </>
  );
}

export default App;

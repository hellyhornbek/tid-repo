// one row in the list; reports clicks up via onToggle/onRemove, changes no state itself
function ToDoItem({ todo, onToggle, onRemove }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />{" "}
      <span>{todo.text}</span>{" "}
      <button onClick={() => onRemove(todo.id)}>Delete</button>
    </li>
  );
}

export default ToDoItem;

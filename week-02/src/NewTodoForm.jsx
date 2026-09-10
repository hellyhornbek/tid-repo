import { useState } from "react";

// captures the new-task text; only job is to send it up via onAdd
function NewTodoForm({ onAdd }) {
  const [text, setText] = useState("");

  // runs on Enter or Add click; sends text to App, then clears the input
  function handleSubmit(event) {
    event.preventDefault();
    onAdd(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task"
      />
      <button disabled={text.trim().length === 0}>Add</button>
    </form>
  );
}

export default NewTodoForm;

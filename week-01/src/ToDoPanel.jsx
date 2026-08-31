function ToDoPanel({ firstName, lastName, children }) {
  return (
    <>
      <h1 style={{ color: "red" }}>
        To Do List for {firstName + " " + lastName}
      </h1>
      <div style={{ backgroundColor: "palegreen" }}>{children}</div>
    </>
  );
}

export default ToDoPanel;

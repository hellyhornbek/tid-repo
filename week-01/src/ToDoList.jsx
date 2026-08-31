function ToDoList({ firstName, lastName, todos }) {
  let h1Style = { color: "blue", backgroundColor: "yellow" };

  function handleAdd(event) {
    console.log("we should add a new item");
  }

  return (
    <>
      <h1 style={h1Style}>To Do List for {firstName + " " + lastName}</h1>
      <ul>
        {todos.map((elem, index) => (
          <li key={index}>{elem}</li>
        ))}
      </ul>

      <button onClick={handleAdd}>Add New Task</button>
    </>
  );
}

export default ToDoList;

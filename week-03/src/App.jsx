import "./css/App.css";
import ToDoList from "./ToDoList";

function App() {
  const hansToDoList = [
    { id: crypto.randomUUID(), text: "Call the landlord", done: false },
    { id: crypto.randomUUID(), text: "Book the dentist", done: false },
  ];

  const bastiansToDoList = [
    { id: crypto.randomUUID(), text: "Buy milk", done: false },
    { id: crypto.randomUUID(), text: "Book the dentist", done: false },
  ];

  return (
    <>
      <ToDoList firstName="Hans" todos={hansToDoList} />
      <ToDoList firstName="Bastian" todos={bastiansToDoList} />
    </>
  );
}

export default App;

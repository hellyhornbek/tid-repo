import "./css/App.css";
import ToDoList from "./ToDoList";
import Parse from "parse";

Parse.initialize(
  "qLoDr2F0BdNc5osqdhD7d2CpG79PELLbnYJ1AQ9L",
  "KWgaeHnVSsf73KNVT3HTeIxNf2m62iXTOCceEUSg",
);

Parse.serverURL = "https://parseapi.back4app.com";

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
      <ToDoList firstName="Marie" todos={bastiansToDoList} />
    </>
  );
}

export default App;

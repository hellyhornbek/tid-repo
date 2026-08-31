import "./App.css";
import ToDoList from "./ToDoList.jsx";
import ToDoPanel from "./ToDoPanel.jsx";

function App() {
  const hansToDoList = ["Call the landlord", "Book the dentist"];
  const bastiansToDoList = ["Buy milk", "Book the dentist"];

  return (
    <>
      <ToDoList firstName={"Hans"} lastName={"Hornbek"} todos={hansToDoList} />
      <ToDoList
        firstName={"Bastian"}
        lastName={"Sivertsen"}
        todos={bastiansToDoList}
      />
      <ToDoPanel firstName={"Johan"} lastName={"Krøyer"}>
        <ol>
          <li>Prepare Figma Tutorial</li>
          <li>Prepare Assignment</li>
        </ol>
      </ToDoPanel>

      <ToDoList
        style={{ color: "red" }}
        firstName={"Johanne"}
        lastName={"Beltoft"}
        todos={["Eat Lunch", "Grab a Coffee"]}
      />
    </>
  );
}

export default App;

import "./css/App.css";
import ToDoList from "./ToDoList";
import Parse from "parse";

Parse.initialize(
  "qLoDr2F0BdNc5osqdhD7d2CpG79PELLbnYJ1AQ9L",
  "KWgaeHnVSsf73KNVT3HTeIxNf2m62iXTOCceEUSg",
);

Parse.serverURL = "https://parseapi.back4app.com";

function App() {
  return (
    <>
      <ToDoList firstName="Hans" />
    </>
  );
}

export default App;

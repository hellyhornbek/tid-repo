import Parse from "parse";

const ToDoItem = Parse.Object.extend("ToDoItem");

function toPlainObject(parseObject) {
  return {
    id: parseObject.id,
    text: parseObject.get("text"),
    done: parseObject.get("done"),
  };
}

export async function fetchTodos() {
  const query = Parse.Query(ToDoItem);
  query.ascending("createdAd");
  const result = await query.find();
  return result.map(toPlainObject);
}

export async function createToDo(text) {
  const item = new ToDoItem();
  item.set("text", text);
  item.set("done", false);
  return toPlainObject(await item.save());
}

export async function setTodoDone(id, done) {
  const item = ToDoItem.createWithoutData(id);
  item.set("done", done);
  return toPlainObject(await item.save());
}

export async function deleteTodo(id) {
  const item = ToDoItem.createWithoutData(id);
  await item.destroy();
}

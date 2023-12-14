async function getResponse() {
  const response = await fetch("http://localhost:3000/assets/hello.txt");
  // const data = await response.json();
  const data = await response.text();
  console.log(data);
}
getResponse();

async function postResponse() {
  const res = await fetch("http://localhost:3000/api/echo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: "Hello Echo" }),
  });
  const data = await res.json();
  console.log(data);
}
postResponse();

const baseUrl = "http://localhost:3000/api/todos";

type Todo = {
  id: number;
  name: string;
};

async function getTodos(): Promise<{ todos: Todo[] }> {
  const res = await fetch(baseUrl);
  return res.json();
}

async function addTodos(name: string): Promise<{ id: string }> {
  const res = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(name),
  });
  return res.json();
}

async function getTodo(id: string): Promise<Todo | null> {
  const res = await fetch(`${baseUrl}/${id}`);
  if (res.ok) {
    return res.json();
  }
  return null;
}

async function updateTodo(todo: Todo): Promise<void> {
  await fetch(`${baseUrl}/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: todo.name }),
  });
}

async function deleteTodo(id: string): Promise<{ success: boolean }> {
  const res = await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
  return { success: res.ok };
}

async function main() {
  try {
    const todos = await getTodos();
    console.log(todos);

    const newTodo = await addTodos("new todo");
    console.log(newTodo);

    const todo = await getTodo(newTodo.id);
    console.log(todo);

    await updateTodo({
      id: Number(newTodo.id),
      name: "updated todo",
    });
    const updatedTodo = await getTodo(newTodo.id);
    console.log(updatedTodo);

    await deleteTodo(newTodo.id);
    const deletedTodo = await getTodo(newTodo.id);
    console.log(deletedTodo);
  } catch (e) {
    console.error(e);
  }
}

main();

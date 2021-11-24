function loadTodos() {
  return JSON.parse(localStorage.todos || '[]');
}

function saveTodos(todos) {
  localStorage.todos = JSON.stringify(todos);
}

function generateId() {
  const nextId = JSON.parse(localStorage.lastId || '0') + 1;
  localStorage.lastId = nextId;
  return nextId;
}

export async function getAll() {
  return loadTodos();
}

export async function createTodo(title) {
  const todos = loadTodos();

  const todo = {
    id: generateId(),
    title,
    completed: false,
  };

  todos.push(todo);
  this.saveTodos(todos);

  return todo;
}

export async function updateTodo(id, changes) {
  const todos = loadTodos();

  const ix = todos.findIndex((t) => t.id === id);
  Object.assign(todos[ix], changes);

  saveTodos(todos);
  return todos[ix];
}

export async function deleteTodo(id) {
  const todos = loadTodos();
  saveTodos(todos.filter((t) => t.id !== id));
}

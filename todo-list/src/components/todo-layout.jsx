import { useState } from "react";
import "./todo.css";

function init() {
  const todos = [
    { id: 1, task: "Learn React", completed: true },
    { id: 2, task: "Build Todo UI", completed: false },
    { id: 3, task: "Add routing", completed: false },
  ];
  return todos;
}

export default function TodoList() {
  let [todos, setToDO] = useState(init());
  const [newTask, setNewTask] = useState("");

  function deleteTodo(id) {
    setToDO(todos.filter((todo) => todo.id !== id));
  }
  function CheckChange(id) {
    setToDO(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }
  function complete(completed) {
    if (completed) {
      return {
        textDecoration: "line-through",
        backgroundColor: "rgba(22, 21, 23, 0.5)",
      };
    }

    return {
      backgroundColor: "rgba(170, 59, 255, 0.5)",
    };
  }
  function addList(e) {
    e.preventDefault();

    if (newTask.trim() === "") return setNewTask("");

    const task = {
      id: Date.now(),
      task: newTask,
      completed: false,
    };

    setToDO([...todos, task]);
    setNewTask("");
  }
  const completedTasks = todos.filter((todo) => todo.completed).length;
  let remaining = todos.length - completedTasks;
  return (
    <div>
      <h1>Todo List</h1>
      <p>Manage your tasks effortlessly</p>
      <form id="nav" onSubmit={addList}>
        <input
          type="text"
          name="add"
          id="add"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button id="add-btn">
          Add Task <i className="fa-solid fa-plus"></i>{" "}
        </button>
      </form>
      <div id="container">
        {todos.map((todo, index) => (
          <div id="task" key={index} style={complete(todo.completed)}>
            <div>
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                checked={todo.completed}
                onChange={() => CheckChange(todo.id)}
              />
              <span>
                {index + 1}. {todo.task}
              </span>
            </div>
            <button onClick={() => deleteTodo(todo.id)}>
              <i id="trash" className="fa-solid fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
      <div id="last">
        <div id="count">{remaining} Taks Remaining</div>
        <div id="complete">{completedTasks} Completed</div>
      </div>
    </div>
  );
}

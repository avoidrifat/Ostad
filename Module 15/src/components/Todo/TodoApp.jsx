import { useState } from "react";
import "./Todo.css";

function TodoApp() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    if (task.trim() !== "") {
      setTaskList((prevTaskList) => [...prevTaskList, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    setTaskList((prevTaskList) => prevTaskList.filter((_, i) => i !== index));
  };

  return (
    <div className="main" >
      <div className="container" >
        <h1 className="header">ToDo List</h1>
        <form onSubmit={handleAddTask}>
          <input type="text" value={task} onChange={handleTaskChange} />
          <button type="submit">Add Task</button>
        </form>
        <ul>
          {taskList.map((task, index) => (
            <li key={index}>
              {task}
              <button className="submitBtn" onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;

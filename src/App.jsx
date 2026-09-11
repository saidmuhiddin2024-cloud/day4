import { useState } from "react";
import "./App.css";

const data = [
  {
    id: 1,
    title: "WAKE UP",
    time: "07:00",
    completed: false,
  },
  {
    id: 2,
    title: "PRAY",
    time: "07:10",
    completed: false,
  },
  {
    id: 3,
    title: "GET READY",
    time: "07:20",
    completed: false,
  },
  {
    id: 4,
    title: "GO TO SCHOOL",
    time: "07:40",
    completed: false,
  },
  {
    id: 5,
    title: "START CLASSES",
    time: "08:10",
    completed: false,
  },
  {
    id: 6,
    title: "STUDY AT SCHOOL",
    time: "08:10 - 13:00",
    completed: false,
  },
  {
    id: 7,
    title: "GO HOME",
    time: "13:00",
    completed: false,
  },
  {
    id: 8,
    title: "ARRIVE HOME",
    time: "13:30",
    completed: false,
  },
  {
    id: 9,
    title: "HAVE LUNCH",
    time: "13:40",
    completed: false,
  },
  {
    id: 10,
    title: "CHANGE CLOTHES",
    time: "14:00",
    completed: false,
  },
  {
    id: 11,
    title: "GO TO SOFTCLUB",
    time: "14:10",
    completed: false,
  },
  {
    id: 12,
    title: "PRACTICE CODING",
    time: "14:10 - 18:00",
    completed: false,
  },
  {
    id: 13,
    title: "LEAVE SOFTCLUB",
    time: "20:00",
    completed: false,
  },
  {
    id: 14,
    title: "ARRIVE HOME",
    time: "22:00",
    completed: false,
  },
  {
    id: 15,
    title: "TAKE A SHOWER",
    time: "22:00 - 22:20",
    completed: false,
  },
  {
    id: 16,
    title: "GO TO MY ROOM",
    time: "22:20",
    completed: false,
  },
  {
    id: 17,
    title: "PREPARE SOFTCLUB LESSONS",
    time: "23:30 - 03:00",
    completed: false,
  },
  {
    id: 18,
    title: "GO TO SLEEP",
    time: "03:10",
    completed: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(data);

  const [task, setTask] = useState("");

  const addTask = () => {
    if (!task.trim()) return;

    const newTask = {
      id: Date.now(),
      title: task,
      time: "",
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((e) => e.id !== id));
  };

  const checkTask = (id) => {
    setTasks(tasks.map((e) => (e.id === id ? { ...e, completed: !e.completed } : e)));
  };

  const completedTasks = tasks.filter((e) => e.completed).length;

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1>My Daily Tasks</h1>
        </div>

        <div className="add-box">
          <input
            type="text"
            placeholder="Write a new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
          />

          <button onClick={addTask}>Add</button>
        </div>

        <div className="task-list">
          {tasks.map((e) => (
            <div className={`task ${e.completed ? "completed" : ""}`} key={e.id}>
              <div className="task-left">
                <input type="checkbox" checked={e.completed} onChange={() => checkTask(e.id)} />

                <span>{e.title}</span>

                <small>{e.time}</small>
              </div>

              <button className="delete" onClick={() => deleteTask(e.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>

        <div className="counter">
          <span>Total Tasks:</span>

          <strong>
            {completedTasks} / {tasks.length}
          </strong>
        </div>
      </div>
    </div>
  );
}

export default App;

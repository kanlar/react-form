import { useEffect, useState } from "react";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import TaskContext from "./context/Task";

import "./App.css";
import { useContext } from "react";

function App() {
  const { fetchTasks } = useContext(TaskContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <div className="container">
        <TaskCreate />
        <h1>Görevler</h1>
        <TaskList />
      </div>
    </>
  );
}

export default App;

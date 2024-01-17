import { useContext } from "react";
import TaskShow from "./TaskShow";
import TaskContext from "../context/Task";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return <TaskShow key={index} task={task} />;
      })}
    </div>
  );
}

export default TaskList;

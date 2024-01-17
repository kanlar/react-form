import { useContext } from "react";
import { useState } from "react";
import TasksContext from "../context/Task";
import TaskCreate from "./TaskCreate";

function TaskShow({ task }) {
  const { deleteTaskById, editTaskById } = useContext(TasksContext);
  const [showEdit, setShowEdit] = useState(false);
  const handleRemoveClick = () => {
    deleteTaskById(task.id);
  };
  const handleEditClick = () => {
    return setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    editTaskById(id, updatedTitle, updatedTaskDesc);
  };
  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <>
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className={`task-delete`} onClick={handleRemoveClick}>
              Sil
            </button>
            <button className="task-edit" onClick={handleEditClick}>
              Düzenle
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskShow;

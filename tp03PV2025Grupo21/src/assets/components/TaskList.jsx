import React from "react";
import TaskItem from "./TaskItem"; // Importa el componente TaskItem
import "./Tarea.css";

function TaskList({ tasks, onEliminar, onRealizado }) {
  return (
    <ol className="todo_list">
      {tasks?.length > 0 ? (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onEliminar={onEliminar} onRealizado={onRealizado}/>
        ))
      ) : (
        <p>No hay tareas</p>
      )}
    </ol>
  );
} // genera la lista de tareas, si no hay tareas muestra un mensaje

export default TaskList;

import "./Tarea.css";
import React from "react";

function TaskItem({ task, onEliminar, onRealizado }) {
  return (
    <div className="task-container">
      <li id={task?.id} className={`todo_item ${task.completed ? "completed" : ""}`}>
        <button className="items_check" onClick={() => onRealizado(task.id)}>
          <svg>
            <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
          </svg>
          <p>{task?.title}</p>
        </button>
      </li>
      <button className="delete-button" onClick={() => onEliminar(task.id)}>
        <span className="TextoOculto">Eliminar</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 6h18" />
          <path d="M8 6V4h8v2" />
          <path d="M10 11v6" />
          <path d="M14 11v6" />
          <path d="M5 6l1 14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-14" />
        </svg>
      </button>
    </div>
  );
}

export default TaskItem;
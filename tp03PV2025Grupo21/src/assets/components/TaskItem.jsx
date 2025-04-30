function TaskItem({ task, onEliminar }) {
  return (
    <li id={task?.id} className="todo_item">
      <button className="items_check">
        <svg>
          <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
        </svg>
        <p>{task?.title}</p>
      </button>
      <div className="items_izquierda">
        <button onClick={() => onEliminar(task.id)}>
          <span className="TextoOculto">Eliminar</span>
          <svg>
            <path d="" />
          </svg>
        </button>
      </div>
    </li>
  );
} // define los elementos de la lista de tareas
export default TaskItem; // exporta el componente TaskItem para que pueda ser utilizado en otros archivos

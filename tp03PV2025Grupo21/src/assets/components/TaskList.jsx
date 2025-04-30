function TaskItem({ task }) {
    return (
      <li id={task?.id} className="todo_item">
        <button className="items_check">
          <svg>
            <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
          </svg>
          <p>{task?.title}</p>
        </button>
        <div className="items_izquierda">
          <button>
            <span className="TextoOculto">Eliminar</span>
            <svg>
              <path d="" />
            </svg>
          </button>
        </div>
      </li>
    );
  } // define los elementos de la lista de tareas
  
  function TaskList({ tasks }) {
    return (
      <ol className="todo_list">
        {tasks?.length > 0 ? (
        tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))
        ) : (
          <p>No hay tareas</p>
        )}
      </ol>
    );
  } // genera la lista de tareas, si no hay tareas muestra un mensaje 
  
  export default TaskList;
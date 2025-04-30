  import React from 'react';
  import TaskItem from './TaskItem'; // Importa el componente TaskItem
  
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
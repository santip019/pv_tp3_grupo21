import React, { useState } from "react";
import Formulario from "./TaskInput";
import TaskList from "./TaskList";

function Home() {
  const [tasks, setTasks] = useState([]);

  const agregarTarea = (tarea) => {
    const nuevaTarea = {
      id: Date.now(),
      title: tarea,
    };
    setTasks([...tasks, nuevaTarea]);
  };

  const eliminarTarea = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="wrapper">
      <Formulario onAgregar={agregarTarea} />
      <TaskList tasks={tasks} onEliminar={eliminarTarea} />
    </div>
  );
}

export default Home;

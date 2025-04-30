import React, { useState } from "react";
import Formulario from "./TaskInput";
import TaskList from "./TaskList";

function Home() {
  const [tasks, setTasks] = useState([]);

  const agregarTarea = (tarea) => {
    const nuevaTarea = {
      id: Date.now(),
      title: tarea,
      completed: false,
    };
    setTasks([...tasks, nuevaTarea]);
  };

  const eliminarTarea = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const tareaRealizada = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="wrapper">
      <Formulario onAgregar={agregarTarea} />
      <TaskList tasks={tasks} onEliminar={eliminarTarea} onRealizado={tareaRealizada}/>
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import Formulario from "./TaskInput";
import TaskList from "./TaskList";
import "./Tarea.css";

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
    setTasks(tasks.filter((task) => task.id !== id));
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
      <header className="header">
        <h1 className="title">Gestor de Tareas</h1>
        <p className="subtitle">Organiza tus tareas de manera eficiente</p>
      </header>
      <main>
        <Formulario onAgregar={agregarTarea} />
        {tasks.length > 0 ? (
          <TaskList
            tasks={tasks}
            onEliminar={eliminarTarea}
            onRealizado={tareaRealizada}
          />
        ) : (
          <p className="no-tasks">No hay tareas pendientes. ¡Agrega una nueva tarea!</p>
        )}
      </main>
    </div>
  );
}

export default Home;
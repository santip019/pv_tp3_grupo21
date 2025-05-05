import { useState } from "react";
import "./Tarea.css";

function Formulario({ onAgregar }) {
  const [tarea, setTarea] = useState("");

  const taskInput = (evento) => {
    setTarea(evento.target.value);
  };

  const envio = (evento) => {
    evento.preventDefault();
    if (tarea.trim() !== "") {
      onAgregar(tarea);
      setTarea("");
    }
  };

  return (
    <form className="formulario" onSubmit={envio}>
      <label htmlFor="tarea">
        <input
          type="text"
          name="tarea"
          id="tarea"
          placeholder="Ingresar tarea"
          value={tarea}
          onChange={taskInput}
        />
      </label>
      <button type="submit">
        <span className="TextoOculto">Enviar </span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </form>
  );
}

export default Formulario;

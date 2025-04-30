import { useState } from "react";

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
        <span className="TextoOculto">Enviar</span>
        <svg>
          <path d="" />
        </svg>
      </button>
    </form>
  );
}

export default Formulario;

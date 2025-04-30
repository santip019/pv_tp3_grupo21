import { useState } from "react";

function Formulario() {
  const [tarea, setTarea] = useState(""); 

  const taskInput = (evento) => {
    setTarea(evento.target.value); // actualiza el estado
  };

  const envio = (evento) => {
    evento.preventDefault();
    console.log("Tarea enviada:", tarea); 
    setTarea(""); // limpia el estado después de enviar
    evento.target.reset(); // resetea el formulario
  };

  return (
    <form className="formulario" onSubmit={envio}>
      <label htmlFor="tarea">
        <input
          type="text"
          name="tarea"
          id="tarea"
          placeholder="Ingresar tarea"
          value={tarea} // vincula el valor al estado
          onChange={taskInput} // llama a la función 'taskInput' al cambiar el valor
        />
      </label>
      <button>
        <span className="TextoOculto">Enviar</span>
        <svg>
          <path d="" />
        </svg>
      </button>
    </form>
  );
}

export default Formulario;
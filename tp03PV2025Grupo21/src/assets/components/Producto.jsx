import './Producto.css';
import Arreglo from "./Arreglo";

function Producto() {
  let productos = Arreglo();

  function agregarproducto(event) {
    event.preventDefault();

    const nombreInput = document.getElementById("nombre")
    const precioInput = document.getElementById("precio")

    const descripcion = nombreInput.value.trim();
    const precio = Number(precioInput.value);

    if (descripcion && !isNaN(precio)) {
      const producto = { descripcion, precio };
      productos.push(producto);

      const lista = document.getElementById("lista-p");
      const elemento = document.createElement("li");
      elemento.textContent = `Producto: ${producto.descripcion} - Precio: $${producto.precio}`;
      lista.appendChild(elemento);
      nombreInput.value = "";
      precioInput.value = "";

      /* Actividad 1 */
      productos.forEach((p) => {
        console.log(`Producto: ${p.descripcion} - Precio: $${p.precio}`);
      });
      /* Actividad 2*/
      const mayoresA20 = productos.filter((p) => p.precio > 20);
      console.log("Productos con precio mayor a $20:", mayoresA20);
    }
  }
  return (
    <>
      <form onSubmit={agregarproducto}>
        <input type="text" id="nombre" placeholder="Nombre del Producto" required />
        <input type="number" id="precio" placeholder="Precio" required />
        <button id="boton" type="submit">Agregar Producto</button>
      </form>
      <h2>Productos Agregados:</h2>
      <ul id="lista-p"></ul>
    </>
  );
}

export default Producto;
import './Producto.css'
import React, { useEffect } from "react";
import Arreglo from "./Arreglo";

function Producto() {
  const productos = Arreglo();

  useEffect(() => {
    productos.forEach(producto => {
      console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`)
    })
  }, [productos])

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto, index) => (
          <li>
            Producto: {producto.descripcion} - Precio: ${producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );

}
export default Producto;
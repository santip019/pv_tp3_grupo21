import './Producto.css';
import React, { useState } from "react";

function Producto() {
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [precioFiltro, setPrecioFiltro] = useState("");

  const agregarProducto = () => {
    if (!producto || !precio) return;

    const nuevo = {
      descripcion: producto,
      precio: parseFloat(precio),
      ivaAplicado: false
    };

    setProductos([...productos, nuevo]);
    setProducto("");
    setPrecio("");
  };

  const filtrar = () => {
    const minimo = parseFloat(precioFiltro);
    if (isNaN(minimo)) return;
    setProductos(productos.filter(p => p.precio > minimo));
  };

  // ACTIVIDAD 3 - Crear array con IVA y mostrar en consola
  const agregarIVA = () => {
    const actualizados = productos.map(p => {
      if (!p.ivaAplicado) {
        return {
          ...p,
          precio: parseFloat((p.precio * 1.21).toFixed(2)),
          ivaAplicado: true
        };
      }
      return p;
    });
    setProductos(actualizados);
    console.log("Productos con IVA aplicado:", actualizados);
  };

  //  ACTIVIDAD 6 - Eliminar menor
  const eliminarMenor = () => {
    const menor = Math.min(...productos.map(p => p.precio));
    const nuevaLista = productos.filter(p => p.precio !== menor);
    setProductos(nuevaLista);
    console.log("Lista después de eliminar el menor:", nuevaLista);
  };

  // ACTIVIDAD 4 - Ordenar
  const ordenar = () => {
    const copia = [...productos];
    copia.sort((a, b) => a.precio - b.precio);
    setProductos(copia);
    console.log("Productos ordenados:", copia);
  };

  //  ACTIVIDAD 1 - Mostrar en consola 
  const mostrarProductosEnConsola = () => {
    productos.forEach(p => {
      console.log(`Producto: ${p.descripcion} - Precio: $${p.precio}`);
    });
  };

  //  ACTIVIDAD 2 - Filtrar > 20 y mostrar en consola
  const filtrarMayoresA20 = () => {
    const mayoresA20 = productos.filter(p => p.precio > 20);
    console.log("Productos con precio > $20:", mayoresA20);
  };

  //  ACTIVIDAD 5 - Agregar nuevo
  const agregarNuevo = () => {
    const nuevo = {
      descripcion: "Teclado Mecanico",
      precio: 25000,
      ivaAplicado: false
    };
    setProductos([...productos, nuevo]);
    console.log("Nuevo agregado.");
  };

  return (
    <div>
      <h2>Productos</h2>

      <input
        placeholder="Producto"
        value={producto}
        onChange={e => setProducto(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={e => setPrecio(e.target.value)}
      />
      <button onClick={agregarProducto}>Agregar</button>
      <br />
      <input
        type="number"
        placeholder="Precio mínimo para filtrar"
        value={precioFiltro}
        onChange={e => setPrecioFiltro(e.target.value)}
      />
      <button onClick={filtrar}>Filtrar</button>

      <div>
        <button onClick={filtrarMayoresA20}>Mayor de $20</button>
        <button onClick={agregarIVA}>Aplicar IVA</button>
        <button onClick={ordenar}>Ordenar</button>
        <button onClick={agregarNuevo}>Agregar nuevo</button>
        <button onClick={eliminarMenor}>Eliminar Menor</button>
        <button onClick={mostrarProductosEnConsola}>Mostrar array</button>
      </div>

      <ul>
        {productos.map((p, i) => (
          <li key={i}>
            {p.descripcion} - ${p.precio} {p.ivaAplicado && "(IVA aplicado)"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Producto;

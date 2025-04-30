import './App.css'
import Home from './assets/components/Tarea.jsx'
import Producto from './assets/components/Producto.jsx';

function App() {
  return (
    <div className="container">
      <h1 className="title">Lista de tareas</h1>
        <Producto />
        <Home />
    </div>
  )
}

export default App
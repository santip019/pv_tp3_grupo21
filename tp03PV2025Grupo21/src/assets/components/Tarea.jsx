import React from "react";
import Formulario from "./Formulario";
import TaskList from "./TaskList";

function Home() {
  return (
    <div className="wrapper">
      <Formulario />
      <TaskList tasks={[]} />
    </div>
  );
}
export default Home;
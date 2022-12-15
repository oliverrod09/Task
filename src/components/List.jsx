import React from "react";
import { useContext } from "react";
import Card from "./Card";
import { Contexto } from "../context/Contexto";


function List({}) {
  const {tareas} = useContext(Contexto)

  if (tareas.length === 0) {
    return <h1 className="text-5xl text-white text-center mt-10">No hay tareas aun</h1>;
  }

  return (
    <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
      {tareas.map((tarea) => (
        <Card key={tarea.id} tarea={tarea}/>
      ))}
    </div>
  );
}

export default List;

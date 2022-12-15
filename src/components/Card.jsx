import React from "react";
import { useContext } from "react";
import { Contexto } from "../context/Contexto";

function Card({ tarea }) {
  const { eliminarTarea } = useContext(Contexto);
  return (
    <div key={tarea.id} className="bg-slate-200 rounded-md">
      <h1 className="text-2xl text-cyan-700 border-b-2 bg-white rounded-t-md border-cyan-700 font-bold p-4 text-center">{tarea.title}</h1>
      <p className="my-6 text-zinc-800 italic p-4">{tarea.description}</p>
      <button
        onClick={() => {
          eliminarTarea(tarea.id);
        }}
        className="bg-red-600 text-white hover:bg-red-500 p-2 mr-4 mb-4 w-max rounded-md relative float-right"
      >
        Eliminar
      </button>
    </div>
  );
}

export default Card;

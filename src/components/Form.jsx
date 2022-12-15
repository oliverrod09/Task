import React from "react";
import { useEffect, useState, useContext } from "react";
import { Contexto } from "../context/Contexto";

function Form() {

  const {crearTarea} = useContext(Contexto);


  function AddTarea(e) {
    crearTarea(title, description);
    e.preventDefault();
    setTitle("");
    setDescription("");
  }
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form onSubmit={AddTarea} className="w-3/6 flex justify-center items-center flex-col gap-4 rounded-lg p-5 bg-slate-800 shadow-2xl mx-auto mb-4">
      <input
        type="text"
        placeholder="Titulo"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
        className="w-full p-4 rounded-md"
      />
      <textarea
        name=""
        placeholder="Descripción"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="w-full p-4 rounded-md"
      ></textarea>
      <button className="px-6 py-2 rounded-md text-white bg-green-500 hover:bg-green-400">Agregar</button>
    </form>
  );
}

export default Form;

import { createContext } from "react";
import { useState, useEffect } from "react";
import { tareas as datos } from "../data/tareas";

export const Contexto = createContext();


export function ContextoProvider(props) {
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
      setTareas(datos);
    }, []);
  
    function crearTarea(tareaTitle, description) {
      setTareas([
        ...tareas,
        {
          id: tareas.length,
          title: tareaTitle,
          description: description,
        },
      ]);
    }
  
    function eliminarTarea(tareaId) {
      setTareas(tareas.filter((tarea) => tarea.id !== tareaId));
    }
  
    let x = 20;
  return <Contexto.Provider value={{
    tareas, 
    crearTarea,
    eliminarTarea
  }}>{props.children}</Contexto.Provider>;
}


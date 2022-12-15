import React from "react";
import List from "./components/List";
import Form from "./components/Form";


function App() {
  return (
    <>
    <section className="bg-slate-900 min-h-screen">
      <h1 className="text-center text-white py-2 mb-3 text-6xl">Actividades</h1>
      <Form/>
      <List/>
    </section>
      
    </>
  );
}

export default App;

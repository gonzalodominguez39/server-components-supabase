"use client";

import { useState } from "react";

export default function Home() {
    const initialState = {
    id: -1,
    first_name: "",
    last_name: "",
    age: 0,
  };

  const [formValues,setFormValues] = useState(initialState)
  type user = {
    id: number;
    first_name: string;
    last_name: string;
    age: number;
    created_at: string;
  };


  const handleFormChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target
    setFormValues({...formValues,[name]:value})
  }


  return (
    <main className="bg-gray-600">
      <h4 className="text-xl">Lista de usuarios</h4>z
      <h4 className="text-xl font-bold">Crear Usuario</h4>
      <form className="mt-4">
        <div className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-300"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formValues.first_name}
              onChange={handleFormChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
          </div>
          <div>
            <label
              htmlFor="apellido"
              className="block text-sm font-medium text-gray-300"
            >
              Apellido
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formValues.last_name}
              onChange={handleFormChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
          </div>
          <div>
            <label
              htmlFor="edad"
              className="block text-sm font-medium text-gray-300"
            >
              Edad
            </label>
            <input
              type="number"
              id="edad"
              name="edad"
              value={formValues.age}
              onChange={handleFormChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
          </div>
        </div>
        <div className=" flex m-5 justify-center gap-5">
          <button
            type="submit"
            className="mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          >
            Guardar
          </button>
          <button
            type="submit"
            className="mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          >
            Eliminar
          </button>
        </div>
      </form>
    </main>
  );
}

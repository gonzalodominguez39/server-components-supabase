"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { userType } from "./types/user";
import { UserItem } from "@/components/UserItem";
import { updateUser, createUser } from "@/lib/actions/user";

export default function Home() {
  const initialState = {
    id: -1,
    first_name: "",
    last_name: "",
    age: 0,
  };

  const [formValues, setFormValues] = useState(initialState);
  const [users, setUsers] = useState<userType[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadUsers = async () => {
    try {
      const supabase = await createClient();
      const { data: users } = await supabase.from("users").select().order("id");
      setUsers(users);
    } catch (error: unknown) {
      setError(error as string);
      console.log("Error loading users:", error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("change");
    const { name, value } = e.target;
    console.log(name, value);
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormAction = async (formData: FormData) => {
    let isCompleted: boolean | unknown;
    if (formValues.id === -1) {
      isCompleted = await createUser(formData);
    } else {
      isCompleted = await updateUser(formData);
    }
    if (isCompleted) {
      loadUsers();
    }else{
      setError(isCompleted as string)
      console.log(isCompleted)
    }


    setFormValues(initialState);
  };

  const handleEditUser = (user: userType) => {
    setFormValues(user);
  };


  return (
    <main className="bg-gray-600">
      <h4 className="text-xl">Lista de usuarios</h4>z
      <h4 className="text-xl font-bold">Crear Usuario</h4>
      <form className="mt-4" action={handleFormAction}>
        <div className="flex flex-col gap-4">
            <input
              type="number"
              id="id"
              name="id"
              value={formValues.id}
              readOnly
              className="hidden"
            />
          <div>
             
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-300"
            >
              Nombre
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
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
              id="last_name"
              name="last_name"
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
              id="age"
              name="age"
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
      <div>
        {users ? (
          users.map((user) => (
            <UserItem key={user.id} onRefresh={loadUsers} onEdit={handleEditUser} {...user} />
          ))
        ) : (
          <div>
            <p>{error}</p>
          </div>
        )}
      </div>
    </main>
  );
}

"use client";

import { userType } from "@/app/types/user";
import { createClient } from "@/lib/supabase/client";
import { useState } from "react";

type UserItemProps = userType & {
onRefresh :()=>void
};

const supabase = createClient();

export const UserItem = ({
  id,
  first_name: firstName,
  last_name: lastName,
  age,
  onRefresh,
}: UserItemProps) => {
  const [deleteLabel, setDeleteLabel] = useState<string>("Eliminar");
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleEditUser = () => {};
  const handleDeleteUser = async () => {
    console.log("handledelete")
    setDeleteLabel("eliminando..");
    try {
      const { error } = await supabase.from("users").delete().eq("id", id);
      if (error) {
        setError(error?.message);
        return;
      }
      setDeleteLabel("eliminado");
        onRefresh();
    } catch (error:unknown) {
       setError("ha ocurrido un error al eliminar el usuario");
       console.log(error);
    }
  };
  const handleConfirmDelete = () => {
    setDeleteLabel("confirmar");
    setConfirmDelete(true);
  };

  return (
    <div className="mb-4">
      <div className="flex flex-row items-center">
        <p>{`${firstName} ${lastName},`}</p>
        <p className="text-md ml-1">Edad {age}</p>
      </div>

      {error  && <p className="text-red-500 text-sm">{error}</p>}

      <button
        className="border-white text-white border-2 text-sm  px-4 rounded-sm"
        onClick={confirmDelete ?handleDeleteUser : handleConfirmDelete}
      >
        {deleteLabel}
      </button>

      <button
        className="ml-2 bg-white text-sm text-black px-4 rounded-sm hover:bg-slate-200"
        onClick={handleEditUser}
      >
        Editar
      </button>
    </div>
  );
};

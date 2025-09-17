"use client";
import { userType } from "@/app/types/user";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

type UserItemProps = {
  id: number;
  first_name: string;
  last_name: string;
  age: number;
  error?: string;
  deleteLabel: string;
};

export const UserItem = ({
  first_name: firstName,
  last_name: lastName,
  age,
  error,
  deleteLabel,
}: UserItemProps) => {
  const [error, setError] = useState<string | null>(null);
  const [deleteLabel, setDeleteLabel] = useState<string>("Eliminar");
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const loadUsers = async () => {
    try {
      const supabase = await createClient();
      const { data } = await supabase.from("users").select();
      console.log(data);
    } catch (error) {}
  };
  const handleEditUser = () => {};
  const handleDeleteUser = async () => {};
  const handleConfirmDelete = () => {};
  useEffect(() => {loadUsers()}, []);
  return (
    <div className="mb-4">
      <div className="flex flex-row items-center">
        <p>{`${firstName} ${lastName},`}</p>
        <p className="text-md ml-1">Edad {age}</p>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        className="border-white text-white border-2 text-sm  px-4 rounded-sm"
        onClick={confirmDelete ? handleDeleteUser : handleConfirmDelete}
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

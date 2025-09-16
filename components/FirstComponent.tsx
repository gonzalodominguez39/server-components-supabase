'use client'

import { createClient } from "@/lib/supabase/client";
import { useEffect } from "react";

export const FirstComponent = () => {

    useEffect(() => {
  const loadUsers = async()=>{
try {
  const supabase = await createClient()
  const {data} = await supabase.from('users').select()
  console.log(data)
} catch (error) {
  
}
  }
loadUsers()
}, []);
  return (
    <div>FirstComponent</div>
  )
}

'use server'
import { createClient } from "../supabase/server";

export const createUser = async (formData: FormData) => {
  try {
    const supabase = await createClient();

    const firstName = formData.get("first_name");
    const lastName = formData.get("last_name");
    const age = formData.get("age");
    const { error } = await supabase
      .from("users")
      .insert({ first_name: firstName, last_name: lastName, age: age });
      if(error) return false;
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const updateUser = async (formData: FormData) => {
    console.log(formData);
  try {
    const supabase = await createClient();

    const firstName = formData.get("first_name");
    const lastName = formData.get("last_name");
    const age = Number( formData.get("age"));
    const id = formData.get("id");
    console.log("user"+firstName+lastName+age+id);
    const { error } = await supabase
      .from("users")
      .update({ first_name: firstName, last_name: lastName, age: age }).eq("id", id);
      if(error) {
        console.log(error);
        return false;
      };
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }

};

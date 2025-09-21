import { createClient } from "@/lib/supabase/server";
const blogDetail = async({params}:{params:Promise<{id:number}>})=>{
  const supabase = await createClient();
    const id = (await params).id;

  const { data: post, error: errorPost } = await supabase.from("post")
    .select(`
    title,
    content,
    publish_date,
    image,
    category(name),
    author(first_name,last_name)    
    `).eq('id',id).single();
console.log(post,errorPost)

return <div>blog detail</div>
}
export default blogDetail;
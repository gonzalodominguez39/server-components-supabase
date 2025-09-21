import { createClient } from "@/lib/supabase/server";
import { Post } from "./components/Post";
import { postType } from "../types/post";


const BlogPage = async () => {
  const supabase = await createClient();
  const { data: posts, error: errorPosts } = await supabase.from("post")
    .select(`id,
    title,
    description,
    publish_date,
    image,
    category(name),
    author(first_name,last_name)    
    `);

  if (errorPosts) return <div>Error cargando posts</div>;
  
  console.log(posts, errorPosts);
  return <div className="flex flex-col gap-4 justify-center">{posts.map((post:postType) =><Post key={`home-post-${post.id}`} {...post}/>)}</div>;
};
export default BlogPage;

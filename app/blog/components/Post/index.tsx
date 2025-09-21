import { authorType } from "@/app/types/author";
import { categoryType } from "@/app/types/category";
import { postType } from "@/app/types/post";
import dayjs from "dayjs";
import Link from "next/link";

export const Post = (post: postType) => {

  console.log(post);
 return (
    <div className="mb-4 flex max-w-screen-xl bg-transparent border-2 border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="flex-shrink-0 w-48 h-48">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover rounded-l-2xl"
        />
      </div>

      <div className="flex-1 p-4 flex flex-col justify-between ">
        <Link href={`/blog/${post.id}`}>
        <h4 className="mt-2 text-xl font-semibold text-white">{post.title}</h4>
        </Link>
        <div>
          <span className="text-sm font-medium text-white">
            {(post.category as categoryType).name}
          </span>
 
          <p className="mt-2 text-white text-sm line-clamp-3">
            {post.description}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-white">
          <p>
            By{" "}
            <span className="font-medium text-white">
              {(post.author as authorType).first_name} {(post.author as authorType).last_name}
            </span>
          </p>
          <p>{dayjs(post.publish_date).format("DD/MM/YYYY")}</p>
        </div>
      </div>
    </div>
  );
};

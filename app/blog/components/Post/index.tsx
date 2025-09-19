import { postType } from "@/app/types/post";

export const Post = (post: postType) => {
  return (
    <div className="mb-4 max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <span className="text-sm font-medium text-indigo-600">
          {post.categories[0]?.name}
        </span>
        <h2 className="mt-2 text-xl font-semibold text-gray-900">
          {post.title}
        </h2>
        <p className="mt-2 text-gray-600 text-sm line-clamp-3">
          {post.description}
        </p>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <p>
            By{" "}
            <span className="font-medium text-gray-800">
              {post.authors[0]?.first_name} {post.authors[0]?.last_name}
            </span>
          </p>
          <p>{new Date(post.publish_date).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

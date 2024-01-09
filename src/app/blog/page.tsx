import { PostCard } from "@/components/postcard/PostCard";

const BlogPage = () => {
  return (
    <div className="flex flex-wrap gap-5">
      {/* Pantallas grandes (lg) */}
      <div className="w-full sm:w-[50%] lg:w-[30%]">
        <PostCard />
      </div>
      <div className="w-full sm:w-[50%] lg:w-[30%]">
        <PostCard />
      </div>
      <div className="w-full sm:w-[50%] lg:w-[30%]">
        <PostCard />
      </div>
      <div className="w-full sm:w-[50%] lg:w-[30%]">
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;

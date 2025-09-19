import { BlogHeader } from "./components/BlogHeader";
import { BlogFooter } from "./components/BlogFooter";
const BlogLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      <BlogHeader />
      <main>{children}</main>
      <BlogFooter />
    </>
  );
};
export default BlogLayout;
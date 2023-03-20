import { InferGetStaticPropsType, NextPage } from "next";
import BlogCard from "../../components/BlogCard";
import Wrapper from "../../components/Wrapper";
import { PostsApiResponse, readPostsContent } from "../../lib/postHelper";

export const getStaticProps = async () => {
  const postInfo: PostsApiResponse = readPostsContent();

  return {
    props: {
      posts: postInfo,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blogs: NextPage<Props> = ({ posts }) => {
  return (
    <Wrapper>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        Blog
      </h1>

      <div className="max-w-3xl space-y-3 my-6">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            desc={post.meta}
            slug={post.slug}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Blogs;

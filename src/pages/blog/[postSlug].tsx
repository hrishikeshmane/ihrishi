import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { ParsedUrlQuery } from "querystring";
import { serialize } from "next-mdx-remote/serialize";
import Wrapper from "../../components/Wrapper";

type BlogPageProps = InferGetStaticPropsType<typeof getStaticProps>;

type Post = {
  post: {
    title: string;
    content: MDXRemoteSerializeResult;
  };
};

const components = {
  h2: (props) => <h2 className="text-whites" {...props} />,
};

export const getStaticPaths: GetStaticPaths = async () => {
  const dirPathToRead = path.join(process.cwd(), "src/posts");
  const dirs = fs.readdirSync(dirPathToRead);
  const paths = dirs.map((filename) => {
    const filePathToRead = path.join(process.cwd() + "/src/posts/" + filename);
    const fileContent = fs.readFileSync(filePathToRead, { encoding: "utf-8" });
    return { params: { postSlug: matter(fileContent).data.slug } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

interface IGetStaticProps extends ParsedUrlQuery {
  postSlug: string;
}

export const getStaticProps: GetStaticProps<Post> = async (context) => {
  try {
    const { params } = context;
    const { postSlug } = params as IGetStaticProps;

    const filePathToRead = path.join(
      process.cwd() + "/src/posts/" + postSlug + ".md"
    );
    const fileContent = fs.readFileSync(filePathToRead, { encoding: "utf-8" });

    const source: any = await serialize(fileContent, {
      parseFrontmatter: true,
    });

    return {
      props: {
        post: {
          content: source,
          title: source.frontmatter.title,
        },
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const BlogPage: NextPage<BlogPageProps> = (props) => {
  return (
    <Wrapper>
      <div className="max-w-3xl mx-auto">
        <h1 className="font-semibold text-4xl py-5">{props.post.title}</h1>
        <div className="prose dark:prose-invert pb-20 ">
          <MDXRemote {...props.post.content} lazy={true} />
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogPage;

import React from "react";
import cn from "classnames";
import { dehydrate, QueryClient, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { GetStaticProps } from "next";

type Props = {
  title: string;
  repo: string;
  gradient: string;
  link: string;
};

const getLanguages = async (repo: string) => {
  const res = await axios.get(
    `https://api.github.com/repos/hrishikeshmane/${repo}/languages`
  );
  return res.data;
};

const BlogPostCard = (props: Props) => {
  const { title, gradient, repo, link } = props;
  const { isLoading, isError, data, error } = useQuery(
    ["languages"],
    () => getLanguages(repo),
    // {
    //   initialData: props.posts,
    // }
  );

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className={cn(
        "transform hover:scale-[1.01] transition-all",
        "rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 cursor-pointer",
        gradient
      )}
    >
      <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
            {title}
          </h4>
        </div>
        <small>{repo}</small>
        <div className="flex items-center text-gray-800 dark:text-gray-200 capsize">
          {/* {isError && <p>Error</p>} */}
          {/* {data && Object.keys(data)} */}
          <span className="text-xs text-gray-400 align-baseline capsize">
            {isLoading && <p>Loading..</p>}
            {data && Object.keys(data).toLocaleString()}
          </span>
        </div>
      </div>
    </a>
  );
};

export default BlogPostCard;

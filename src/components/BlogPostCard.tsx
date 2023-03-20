import React from "react";
import cn from "classnames";
import { useQuery } from "react-query";
import axios from "axios";

type Props = {
  title: string;
  gradient: string;
  link: string;
};

const BlogPostCard = (props: Props) => {
  const { title, gradient, link } = props;

  return (
    <a
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
          <h4 className=" md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
            {title}
          </h4>
        </div>
        {/* <small>{repo}</small>
        <div className="flex items-center text-gray-800 dark:text-gray-200 capsize">
          <span className="text-xs text-gray-400 align-baseline capsize">
            {isLoading && <p>Loading..</p>}
            {data && Object.keys(data).toLocaleString()}
          </span>
        </div> */}
      </div>
    </a>
  );
};

export default BlogPostCard;

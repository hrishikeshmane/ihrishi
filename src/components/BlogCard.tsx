import Link from "next/link";
import { FC } from "react";

interface BlogCardProps {
  title: String;
  desc: String;
  slug: String;
}

const Blog: FC<BlogCardProps> = ({ title, desc, slug }): JSX.Element => {
  return (
    <Link legacyBehavior href={"/blog/" + slug}>
      <a className="block">
        <div className=" dark:bg-neutral-900 p-2 rounded transition-all  bg-slate-100  hover:scale-[1.01]">
          <h1 className="text-black dark:text-gray-300 text-xl font-semibold">
            {title}
          </h1>
          <p className="text-gray-500 text-sm">{desc}</p>
        </div>
      </a>
    </Link>
  );
};

export default Blog;

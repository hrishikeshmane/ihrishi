import React from "react";
import cn from "classnames";
import { useQuery } from "react-query";
import axios from "axios";
import Image from "next/image";

type Props = {
  title: string;
  gradient: string;
  link: string;
  logo?: string;
  subheading?: string;
};

const FeatureCard = (props: Props) => {
  const { title, gradient, link, logo, subheading } = props;

  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={link}
      className={cn(
        "transform hover:scale-[1.01] transition-all",
        "rounded-xl w-full bg-gradient-to-r p-1 cursor-pointer",
        gradient
      )}
    >
      <div className="w-full flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
        <div className="flex flex-row justify-between">
          <div className="flex items-center gap-3 w-full">
            {logo && (
              <Image
                width={25}
                height={25}
                src={logo}
                alt={title}
                className="rounded-full"
              />
            )}
            <div className="flex flex-col">
              <h4 className="md:text-lg font-medium text-gray-900 dark:text-gray-100 tracking-tight">
                {title}
              </h4>
            </div>
          </div>
        </div>
        {subheading && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {subheading}
          </p>
        )}
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

export default FeatureCard;

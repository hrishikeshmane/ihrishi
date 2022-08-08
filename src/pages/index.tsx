import Head from "next/head";
import Image from "next/image";
import { QueryClient, QueryClientProvider } from "react-query";
import BlogPostCard from "../components/BlogPostCard";
import ProjectCard from "../components/ProjectCard";
import Wrapper from "../components/Wrapper";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Hrishikesh Mane | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Hrishikesh Mane | Home" />
        <meta
          name="description"
          content="Hrishikesh Mane's portfolio website"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ihrishi.vercel.app/" />
        <meta property="og:title" content="Hrishikesh Mane | Home" />
        <meta
          property="og:description"
          content="Hrishikesh Mane's portfolio website"
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/hrishikeshmane"
        />
      </Head>
      <Wrapper>
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Hrishikesh Mane
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Software Engineer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Self taught Software Engineer. Passionate about Web development,
              Typescript, and React / Next.js.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Hrishikesh Mane"
              height={176}
              width={176}
              src="https://avatars.githubusercontent.com/hrishikeshmane"
              sizes="30vw"
              priority
              className="rounded-full filter"
            />
          </div>
        </div>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Blogs
        </h3>
        <div className="flex gap-6 flex-col md:flex-row">
          <BlogPostCard
            title="Video Library App"
            repo="netflix-clone-neog"
            link="http://netflix-clone-neog.vercel.app/"
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
          <BlogPostCard
            title="Pomodoro App"
            repo="pomodoro-app-neog"
            link="https://pomodoro-app-5cc39.web.app/"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          />
          <BlogPostCard
            title="E-commerce App"
            repo="amzn-clone-react-neog"
            link="http://amzn-clone-react-neog.vercel.app/"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          />
        </div>

        <section>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/hrishikeshmane"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            Read all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </section>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard
          index="01"
          href="https://www.youtube.com/watch?v=MxR5I5_hOKk&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=2"
          length="1:02:45"
          title="Introduction to React 2025"
          subtitle="A project subtitle goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <ProjectCard
          index="02"
          href="https://www.youtube.com/watch?v=AGl52moyISU&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=3"
          length="54:22"
          title="Firestore, Chakra UI, Absolute Imports"
          subtitle="A project subtitle goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <ProjectCard
          index="03"
          href="https://www.youtube.com/watch?v=3g6-v3_BNbM&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=4"
          length="1:08:30"
          title="Designing & Building the Dashboard"
          subtitle="A project subtitle goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <ProjectCard
          index="04"
          href="https://www.youtube.com/watch?v=u8iv_yhSRI8&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=5"
          length="1:13:45"
          title="Firebase Admin with Next.js + SWR"
          subtitle="A project subtitle goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/hrishikeshmane"
          className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
        >
          All Projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 ml-1"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
            />
          </svg>
        </a>
      </Wrapper>
    </>
  );
}

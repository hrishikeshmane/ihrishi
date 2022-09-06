import Head from "next/head";
import Image from "next/image";
import cn from "classnames";
import BlogPostCard from "../components/BlogPostCard";
import ProjectCard from "../components/ProjectCard";
import Wrapper from "../components/Wrapper";
import Link from "next/link";

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
              Self taught Fullstack Engineer, passionate about Web development,
              Javscript / Typescript, and React / Next.js.
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
        <div
          className={cn(
            "flex justify-center",
            "transform hover:scale-[1.01] transition-all",
            "rounded-xl w-full bg-gradient-to-r p-1",
            "from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          )}
        >
          <h2 className="text-2xl my-3">Comming soon</h2>
        </div>
        {/* <div className="flex gap-6 flex-col md:flex-row">
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
        </div> */}

        <section>
          <Link href="/blog">
            <a className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
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
          </Link>
        </section>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard repo="netflix-clone-neog" index="01" />
        <ProjectCard repo="amzn-clone-react-neog" index="02" />
        <ProjectCard repo="pomodoro-app-neog" index="03" />
        <ProjectCard repo="slack-clone" index="04" />
        <ProjectCard repo="ForNotes-neog" index="05" />
        <ProjectCard repo="Component-lib" index="06" />
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

import Head from "next/head";
import Image from "next/image";
import { Suspense } from "react";
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
              className="rounded-full filter grayscale"
            />
          </div>
        </div>
      </Wrapper>
    </>
  );
}

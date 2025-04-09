import Head from "next/head";
import Image from "next/image";
import FeatureCard from "../components/FeatureCard";
import ProjectCard from "../components/ProjectCard";
import Wrapper from "../components/Wrapper";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Hrishikesh Mane | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Hrishikesh Mane | Home" />
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/v2/C4D03AQFAK2rWdPXGdQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1658730194543?e=1749686400&v=beta&t=FEKWqL3jm96Z57Sii-7JY0FAbfnHbSGRCWdziZUklLM"
        />
        <meta
          name="og:description"
          content="Hrishikesh Mane portfolio website"
        />
        <meta property="og:url" content="https://ihrishi.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>

      <Wrapper>
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Hrishikesh Mane
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Software Engineer | Founder | Angel Investor
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Rewriting the tech playbook with a lineup of breakthrough products
              while reshaping the way products are built.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 md:ml-auto">
            <Image
              alt="Hrishikesh Mane"
              height={176}
              width={176}
              src="https://media.licdn.com/dms/image/v2/C4D03AQFAK2rWdPXGdQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1658730194543?e=1749686400&v=beta&t=FEKWqL3jm96Z57Sii-7JY0FAbfnHbSGRCWdziZUklLM"
              // src="https://avatars.githubusercontent.com/hrishikeshmane"
              sizes="30vw"
              priority
              className="rounded-full filter"
            />
          </div>
        </div>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Building
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            logo="https://media.licdn.com/dms/image/v2/D4E0BAQGv9QdgNAFQZA/company-logo_100_100/company-logo_100_100/0/1731737040026/jobseekr_io_logo?e=1749686400&v=beta&t=ZnCwpX6XNWaLhwpiklsWGWXpirPFNnrZVuXtCG3_oJk"
            title="Jobseekr.io"
            subheading="Co-founder"
            link="https://jobseekr.io"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          />
          <FeatureCard
            logo="https://media.licdn.com/dms/image/v2/D4E0BAQHSV7NKfJe4HA/company-logo_100_100/B4EZUEqqo0GwAQ-/0/1739540049268?e=1749686400&v=beta&t=g4JKiN9PE5YB86Iwp19vir0rzRNihLlbMUwrTWT6mFQ"
            title="Greencard, Inc."
            subheading="Co-founder & Advisor"
            link="https://greencard.inc"
            gradient="from-[#00F5A0] to-[#00D9F5]"
          />
          <FeatureCard
            logo="https://media.licdn.com/dms/image/v2/C510BAQHVCypa5PIpnw/company-logo_200_200/company-logo_200_200/0/1630632440398/skidoo_logo?e=1749686400&v=beta&t=7jgVFbJTV9c88NP6d8OnadAmUgCAcw9qhSSt_XnuDvw"
            title="Skidoo AI"
            subheading="Investor & Advisor"
            link="https://theskidoo.com"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          />
          <FeatureCard
            logo="https://media.licdn.com/dms/image/v2/D4E0BAQF5hVkeVq8Ykw/company-logo_100_100/B4EZW6COsxHgAQ-/0/1742582902653/readunshackled_logo?e=1749686400&v=beta&t=z5m4N2LQ_k0lpEqul3s2UuMKZvXozMVDiNRAdGUG9CQ"
            title="Unshackled.club"
            subheading="CTO & Advisor"
            link="https://unshackled.club"
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
        </div>

        {/* <section>
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
        </section> */}

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Blog
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

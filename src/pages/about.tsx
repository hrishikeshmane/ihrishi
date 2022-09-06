import { nanoid } from "nanoid";
import Link from "next/link";
import Wrapper from "../components/Wrapper";

type IWorkExp = {
  position: string;
  location: string;
  company: string;
  duration: string;
  description: Array<String>;
};

type IEducation = {
  university: string;
  location: string;
  course: string;
  duration: string;
};

const workExp: IWorkExp[] = [
  {
    position: "Software Developer",
    company: "Iauro System",
    duration: "December 2021 - July 2022",
    location: "Pune, IN",
    description: [
      "Led a team of 5 to design and develop an enterprise low code platform estimated to save over 20% of man-hours.",
      "Mentored 2 interns on the team in expanding Javascript, Typescript, and React skillset.",
      "Leveraged Webpack Module Federation to enable Micro Frontend architecture.",
      "Improved team productivity by 10% by writing a boilerplate code generator using Nx plugins.",
      "Built an abstracted component library on top of Material UI React to increase code reusability throughout the organization.",
      "Introduced Storybook to build, test, and track use cases of UI components in isolation.",
      "Collaborated with Project manager, DevOps, and Backend teams to build and deploy single-page web applications.",
    ],
  },
  {
    position: "Technical Support Engineer- End User Computing",
    company: "VMware",
    duration: "June 2020 - December 2021",
    location: "Bangalore, IN",
    description: [
      "Deep and fundamental understanding of Cloud computing, Desktop and Application virtualization, and Datacenter management",
      "Gained proficiency over VMware Products- VMware vSphere, VMware Horizon, and Unified Access Gateway along with Microsoft services for virtualization and Infrastructure management.",
      "Analyzed Networks, VMs, Gateways, Load Balancer, and Connection Server logs to derive a plan of action to mitigate and solve critical production issues.",
      "Diagnostic techniques to identify production environment problems, investigate the cause, and draft solutions to correct failures.",
      "Collaborated with Staff Engineers, Account Managers, and customers to solve production issues.",
      "Documented problems, workaround, solution implementation, RCA, and bug reports.",
    ],
  },
  {
    position: "Python Developer Intern",
    company: "Codingnest",
    duration: "July 2019- Sep 2019",
    location: "Pune, IN",
    description: [
      "Built a Chatbot using RASA.ai and TensorFlow for collecting customer doubts and suggesting solutions from forums.",
      "Programmed an Optical Character Recognition application for extracting details from invoices using Natural Language Processing.",
    ],
  },
  {
    position: "Machine Learning Intern",
    company: "ASCP GPU on Cloud Pvt. Ltd.",
    duration: "March 2019- July 2019",
    location: "Pune, IN",
    description: [
      "Prototyped Deep Learning models using TensorFlow and Keras.",
      "Performed Computer Vision and Automation tasks using OpenCV Python Scripts.",
      "Deployed trained model using Docker.",
    ],
  },
];

const education: IEducation[] = [
  {
    university: "Binghamton University",
    location: "Binghamton, NY",
    course: "MS in Computer Science",
    duration: "August 2022 - Current (Expected graduation: May 2024)",
  },
  {
    university: "Neog Bootcamp",
    location: "Bangalore, IN",
    course: "Full stack development",
    duration: "January 2021 - September 2021",
  },
  {
    university: "MES College of Engineering",
    location: "Pune, IN",
    course: "B.E. Computer Engineering",
    duration: "June 2016 - April 2020",
  },
];

export default function About() {
  return (
    <Wrapper>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white ">
        About Me
      </h1>
      <div className="mb-8 prose dark:prose-invert prose-a:text-[#3b82f6] leading-6 text-black dark:text-white max-w-none">
        <h2>Links</h2>
        <ul>
          <li>
            Twitter: <a href="https://twitter.com/ihrishi_">@ihrishi_</a>
          </li>
          <li>
            GitHub:{" "}
            <a href="https://github.com/hrishikeshmane">@hrishikeshmane</a>
          </li>
          <li>
            Website:{" "}
            <Link href="https://ihrishi.vercel.app/">
              <a>https://ihrishi.vercel.app/</a>
            </Link>
          </li>
          <li>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/hrishikesh-mane-755bab16a/">
              https://www.linkedin.com/in/hrishikesh-mane-755bab16a/
            </a>
          </li>
        </ul>

        <div className="my-8 w-full">
          <h2>Professional Experience</h2>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {workExp.map(
              ({ position, company, duration, description, location }) => (
                <li key={nanoid()} className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white my-1">
                      {company}
                    </h3>
                    <p className="ml-auto mr-2 mb-1 text-sm font-bold leading-none text-gray-400 dark:text-gray-500">
                      {location}
                    </p>
                  </div>
                  <div className="flex my-0">
                    <i>{position}</i>
                    <time className="ml-auto mr-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      {duration}
                    </time>
                  </div>
                  <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    <ul>
                      {description.map((point) => (
                        <li key={nanoid()} className="my-0">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* <a
                  href="#"
                  className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Learn more{" "}
                  <svg
                    className="ml-2 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a> */}
                </li>
              )
            )}
          </ol>
        </div>

        <div className="my-8 w-full">
          <h2>Education</h2>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {education.map(({ university, location, course, duration }) => (
              <li key={nanoid()} className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <div className="flex items-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white my-1">
                    {university}
                  </h3>
                  <p className="ml-auto mr-2 mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {location}
                  </p>
                </div>
                <p className="flex my-0">
                  <i>{course}</i>
                  <time className="ml-auto mr-2 mt-0 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {duration}
                  </time>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Wrapper>
  );
}

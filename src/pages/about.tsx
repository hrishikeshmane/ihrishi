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
    position: "Software Developer Engineer Intern",
    company: "Amazon Web Services (AWS)",
    duration: "May 2023 - August 2023",
    location: "Cupertino, CA",
    description: [
      "Led the successful decoupling of a service from a tightly coupled monolith system in Java, enabling the transition toward a robust microservice architecture. Resulted in increased system availability and improved scalability.",
      "Spearheaded the designing and development of a highly efficient service, replacing the existing search platform with Elastic search technology. Implemented a seamless migration process, enhancing search functionality, and improving availability to 99% across 50+ regions in AWS network.",
      "Added Metrix, logs, and Alarms to mitigate and troubleshoot Dynamo DB and web services using AWS Cloudwatch, resulted in 50% less customer tickets and identify anomalies preemptively in pre production regions.",
      "Enforced type safety across microservices REST API via Smithy and code generation, reducing bugs by 15%.",
      "Introduced robust authorization and throttling based on service principals and service level agreements, elevating security in a multi-tenant and multi-region application for more than 1500 customers.",
      "Elevated onboarding docs and team wiki, improving accessibility and knowledge sharing. Enhanced new hire experiences and facilitated efficient information retrieval for team members.",
    ],
  },
  {
    position: "Software Developer Frontend",
    company: "Iauro System",
    duration: "December 2021 - July 2022",
    location: "Pune, IN",
    description: [
      "Directed a 5-member engineering team in conceiving and crafting an enterprise-grade low-code platform, projected to slash man-hours by over 60%.",
      "Mentored and guided 2 interns, expanding their proficiency in Javascript, Typescript, and React, fostering skill development within the team.",
      "Employed webpack Module Federation for Micro Frontend, enhancing modularity and scalability by 33%.",
      "Pioneered the implementation of a mono repository structure using Nx, enhancing workflow methodologies across the organization.",
      "Realized a 30% boost in team productivity through the development of a boilerplate code generator using Nx plugins.",
      "Constructed an abstracted component library atop Material UI React, amplifying code reusability by 85% across the organization.",
      "Introduced Storybook as a tool to autonomously build, test, and monitor usage scenarios for UI components in isolation.",
      "Orchestrated collaborative efforts with Project Management, DevOps, and Backend teams for the creation and deployment of single-page web applications."
    ],
  },
  {
    position: "Software Engineer End User Computing",
    company: "VMware",
    duration: "June 2020 - December 2021",
    location: "Bangalore, IN",
    description: [
      "Implemented comprehensive Integration and Unit test strategies, elevating branch coverage from 55% to 90%",
      "Designed a tool to identify analogous customer tickets and internal knowledge base articles, leveraging customer symptoms, expediting  resolution of repetitive tickets by 80%. ",
      "Conducted in-depth analysis of connection server and security server logs, proficiently identifying and rectifying virtual machine connection anomalies.",
      "Demonstrated expertise in deploying and managing data center and cloud infrastructure, leveraging VMware Horizon and Vsphere. Successfully resolving complexities related to Access Gateways and Identity Access Manager, guaranteeing the establishment of robust secure connections.",
      "Collaborated with Staff Engineers, Account Managers, and customers to solve production issues.",
      "Achieved an unbroken six-month track record of maintaining 100% customer satisfaction by effectively addressing and resolving issues in a timely and thorough manner.",
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

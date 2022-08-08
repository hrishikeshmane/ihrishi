/* eslint-disable react/no-unescaped-entities */
import FunctionCard from "../../components/FunctionCard";
import Wrapper from "../../components/Wrapper";

const snippets = [
  {
    key: "1",
    title: "Hook",
    slug: "useHook",
    logo: "https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png",
    description: "hello world",
  },
  {
    key: "2",
    title: "Hook2",
    slug: "useHook2",
    logo: "https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png",
    description: "hello world2",
  },
  {
    key: "3",
    title: "Hook",
    slug: "useHook",
    logo: "https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png",
    description: "hello world",
  },
  {
    key: "4",
    title: "Hook2",
    slug: "useHook2",
    logo: "https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png",
    description: "hello world2",
  },
  {
    key: "5",
    title: "Hook",
    slug: "useHook",
    logo: "https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png",
    description: "hello world",
  },
  {
    key: "6",
    title: "Hook2",
    slug: "useHook2",
    logo: "https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png",
    description: "hello world2",
  },
  {
    key: "7",
    title: "Hook",
    slug: "useHook",
    logo: "https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png",
    description: "hello world",
  },
  {
    key: "8",
    title: "Hook2",
    slug: "useHook2",
    logo: "https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png",
    description: "hello world2",
  },
];

export default function Snippets() {
  return (
    <Wrapper>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        Code Snippets
      </h1>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        These are a collection of code snippets I've used in the past and seem
        to use them often.
      </p>
      <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
        {snippets.map((snippet) => (
          <FunctionCard
            key={snippet.slug}
            title={snippet.title}
            slug={snippet.slug}
            logo={snippet.logo}
            description={snippet.description}
          />
        ))}
      </div>
    </Wrapper>
  );
}

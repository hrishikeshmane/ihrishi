import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import { useState } from "react";
import Wrapper from "../../components/Wrapper";
import Gist from "super-react-gist";
import { snippets } from "./";

export default function SnippetsPage() {
  const [snippet, setSnippet] = useState(snippets[0]);
  return (
    <Wrapper>
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <div className="flex justify-between w-full mb-8">
          <div>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              {snippet.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              {snippet.description}
            </p>
          </div>
          <div className="mt-2 sm:mt-0">
            <Image
              alt={snippet.title}
              height={48}
              width={48}
              src={snippet.logo}
              className="rounded-full"
            />
          </div>
        </div>
        <Gist
          url={snippet.gist}
          LoadingComponent={() => <div>Waiting for Gist...</div>}
          ErrorComponent={() => <div>Could not fetch component</div>}
        />
      </article>
    </Wrapper>
  );
}

import axios from "axios";
import { useQuery } from "react-query";

type Props = {
  repo: string;
  index: string;
};

const getRepo = async (repo: string) => {
  const res = await axios.get(
    `https://api.github.com/repos/hrishikeshmane/${repo}`
  );
  return res.data;
};

const getLanguages = async (repo: string) => {
  const res = await axios.get(
    `https://api.github.com/repos/hrishikeshmane/${repo}/languages`
  );
  return res.data;
};

export default function ProjectCard({ repo, index }: Props) {
  const {
    isLoading: isRepoLoading,
    isError: isRepoError,
    data: repoData,
    error: repoError,
  } = useQuery(["repo", repo], () => getRepo(repo));

  const {
    isLoading: isLangLoading,
    isError: isLangError,
    data: langData,
    error: langError,
  } = useQuery(["languages", repo], () => getLanguages(repo));

  return (
    <a
      className="w-full"
      href={repoData?.homepage}
      aria-label={repo}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-full border-b border-gray-200 dark:border-gray-700 py-3 transform hover:scale-[1.01] transition-all">
        <div className="flex flex-col sm:flex-row justify-between items-baseline">
          <div className="flex items-center">
            <div className="text-gray-500 dark:text-gray-400 text-left mr-6">
              {index}
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg font-medium w-full text-gray-800 dark:text-gray-100">
                {repo}
              </h4>
              <h4 className="text-xs font-medium w-full text-gray-600 dark:text-gray-400">
                {isLangLoading && <p>Loading..</p>}
                {langData && Object.keys(langData).toLocaleString()}
              </h4>
              <h5 className="text-sm font-medium w-full text-gray-600 dark:text-gray-500">
                {isLangLoading && <p>Loading..</p>}
                {repoData?.description}
              </h5>
            </div>
          </div>
          <div className="flex items-center mt-2 sm:mt-0 w-full sm:w-auto justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500 dark:text-gray-100"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>{" "}
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}

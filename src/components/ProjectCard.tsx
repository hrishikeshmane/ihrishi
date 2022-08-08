type Props = {
  href: string;
  length: string;
  title: string;
  index: string;
  subtitle: string;
};

export default function ProjectCard({
  href,
  length,
  title,
  index,
  subtitle,
}: Props) {
  return (
    <a
      className="w-full"
      href={href}
      aria-label={title}
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
                {title}
              </h4>
              <h4 className="text-sm font-medium w-full text-gray-600 dark:text-gray-400">
                {subtitle}
              </h4>
            </div>
          </div>
          <div className="flex items-center mt-2 sm:mt-0 w-full sm:w-auto justify-between">
            <p className="text-gray-500 dark:text-gray-400 text-left sm:text-right w-32 md:mb-0 mr-2 ml-10 sm:ml-0">
              {length}
            </p>
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

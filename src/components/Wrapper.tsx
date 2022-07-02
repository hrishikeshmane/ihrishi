import { FC, ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Footer from "./Footer";
import NavItem from "./NavItem";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";

type Props = {
  children: ReactNode;
};

const Wrapper = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <div className="flex flex-col md:mx-20 lg:mx-72">
      <div className="mt-10">
        <div className="px-5">
          <nav className="flex items-center justify-between w-full relative max-w-2xl ">
            <div className="ml-[-0.60rem]">
              <NavItem href="/" text="Home" />
              <NavItem href="/about" text="About" />
              <NavItem href="/blog" text="Blog" />
              <NavItem href="/snippets" text="Snippets" />
            </div>
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
            >
              <span className="z-10 ">
                {mounted &&
                  (resolvedTheme === "dark" ? (
                    <MdOutlineDarkMode />
                  ) : (
                    <BsSunFill />
                  ))}
              </span>
            </button>
          </nav>
        </div>

        <div className="px-5 pt-8 md:pt-16 lg:pt-16">
          <main id="main">{children}</main>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Wrapper;

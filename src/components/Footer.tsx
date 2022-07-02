import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center mx-6 mt-40 border-t border-gray-200 dark:border-gray-800">
      <div className="sm:flex">
        <div className="flex flex-col w-1/3">
          {[
            {
              link: "/",
              text: "Home",
            },
          ].map((link, index) => (
            <Link passHref href={link.link} key={index}>
              <span className="footer-links">{link.text}</span>
            </Link>
          ))}
        </div>
        <div className="flex flex-col w-1/3">
          {[
            {
              link: "/about",
              text: "About",
            },
            {
              link: "/blog",
              text: "Blog",
            },
          ].map((link, index) => (
            <Link passHref href={link.link.toLowerCase()} key={index}>
              <span className="footer-links">{link.text}</span>
            </Link>
          ))}
        </div>
        <div className="flex flex-col w-1/3">
          {[
            {
              link: "https://github.com/hrishikeshmane",
              text: "GitHub",
            },
            {
              link: "https://twitter.com/ihrishi_",
              text: "Twitter",
            },
            {
              link: "https://www.linkedin.com/in/hrishikesh-mane-755bab16a/",
              text: "LinkedIn",
            },
          ].map((link, index) => (
            <a
              href={link.link}
              target="_blank"
              rel="noreferrer"
              key={index}
              className="footer-links"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

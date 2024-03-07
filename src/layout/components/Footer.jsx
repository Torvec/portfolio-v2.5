import PropTypes from "prop-types";
import UpArrowIcon from "../assets/upArrowIcon.svg?react";
import EmailIcon from "../assets/emailIcon.svg?react";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  function SocialLink({ href, children, newTab = true }) {
    return (
      <a
        href={href}
        target={newTab ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-orange-500"
      >
        {children}
      </a>
    );
  }

  SocialLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    newTab: PropTypes.bool,
  };

  return (
    <>
      <footer className="flex flex-col items-center gap-5 border-t-2 border-stone-200 bg-stone-900 p-5 px-2 text-center font-sans uppercase text-stone-200 md:flex-row md:items-baseline md:justify-between md:text-lg lg:p-10">
        <p>&copy; {getCurrentYear()} Edward Vonschondorf</p>
        <div className="flex flex-col justify-center gap-6 lg:flex-row lg:gap-12">
          <SocialLink href="https://www.linkedin.com/in/edward-von/">
            <span>LinkedIn</span>
            <UpArrowIcon className="h-5 w-5" />
          </SocialLink>
          <SocialLink href="https://github.com/Torvec">
            <span>GitHub</span>
            <UpArrowIcon className="h-5 w-5" />
          </SocialLink>
          <SocialLink href="https://dev.to/torvec">
            <span>Dev.to</span>
            <UpArrowIcon className="h-5 w-5" />
          </SocialLink>
          <SocialLink href="https://www.youtube.com/channel/UCdhU_w39u0BIgNfsRXs8taQ">
            <span>Youtube</span>
            <UpArrowIcon className="h-5 w-5" />
          </SocialLink>
          <SocialLink href="mailto:me@edward-vonschondorf.dev" newTab={false}>
            <span>E-Mail</span>
            <EmailIcon className="h-6 w-6" />
          </SocialLink>
        </div>
      </footer>
      <section className="flex justify-center border-t-2 border-stone-500 bg-yellow-300 font-bold">
        CURRENTLY UNDER DEVELOPMENT
      </section>
    </>
  );
}

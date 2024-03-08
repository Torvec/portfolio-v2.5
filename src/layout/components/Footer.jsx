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
    <footer className="flex gap-5 border-t-4 border-stone-200 bg-stone-900 px-5 py-10 font-sans text-stone-200 md:flex-row md:items-baseline md:justify-between md:text-lg lg:p-10">
      <div className="w-2/3">
        <p className="mb-2">&copy; {getCurrentYear()} Edward Vonschondorf</p>
        <SocialLink href="mailto:me@edward-vonschondorf.dev" newTab={false}>
          <span>Contact Me</span>
          <EmailIcon className="h-6 w-6" />
        </SocialLink>
      </div>
      <div className="flex flex-col gap-2 w-1/3">
        <p className="font-bold">Socials:</p>
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-12">
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
        </div>
      </div>
    </footer>
  );
}

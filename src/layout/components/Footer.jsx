import UpArrowIcon from "../assets/upArrowIcon.svg?react";
import EmailIcon from "../assets/emailIcon.svg?react";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="border-t-2 border-stone-200 flex flex-col md:flex-row items-center md:items-baseline md:justify-between gap-10 bg-stone-900 px-2 lg:p-10 text-center font-sans md:ext-lg uppercase text-stone-200">
      <p>&copy; {getCurrentYear()} Edward Vonschondorf</p>
      <div className="flex justify-center gap-6 md:gap-12">
        <a
          href="https://www.linkedin.com/in/edward-von/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-orange-500"
        >
          <span>LinkedIn</span>
          <UpArrowIcon className="h-5 w-5" />
        </a>
        <a
          href="https://github.com/Torvec"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-orange-500"
        >
          <span>GitHub</span>
          <UpArrowIcon className="h-5 w-5" />
        </a>
        <a
          href="https://dev.to/torvec"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-orange-500"
        >
          <span>Dev.to</span>
          <UpArrowIcon className="h-5 w-5" />
        </a>
        <a
          href="mailto:me@edward-vonschondorf.dev"
          className="flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-orange-500"
        >
          E-Mail
          <EmailIcon className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
}

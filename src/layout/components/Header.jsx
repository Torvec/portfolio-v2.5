import { Link, NavLink } from "react-router-dom";
import EVLogo from "../assets/evLogo.svg?react";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-stone-500 bg-stone-100 px-2 lg:px-10">
      <nav className="text-md flex items-center font-semibold lg:text-lg">
        <Link to="/">
          <EVLogo className="h-14 w-14 pr-2 lg:pr-6" />
        </Link>
        <NavLink
          className="flex items-center self-stretch border-x-2 border-stone-500 px-4 text-orange-500 transition-all duration-300 ease-in-out hover:bg-stone-200 hover:px-6 hover:text-stone-800"
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          className="flex items-center self-stretch border-r-2 border-stone-500 px-4 text-orange-500 transition-all duration-300 ease-in-out hover:bg-stone-200 hover:px-6 hover:text-stone-800"
          to="/resume"
        >
          Resume
        </NavLink>
      </nav>
      <a
        href="mailto:me@edward-vonschondorf.dev"
        className="flex self-end border-x-2 border-t-2 border-orange-700 bg-orange-500 px-4 pb-2 pt-3 text-stone-100 transition-all duration-300 ease-in-out hover:border-stone-500 hover:bg-stone-300 hover:pb-3 hover:pt-4 hover:text-stone-800"
      >
        Contact Me
      </a>
    </header>
  );
}

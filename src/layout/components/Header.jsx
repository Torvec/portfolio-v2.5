import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import EVLogo from "../assets/evLogo.svg?react";

export default function Header() {
  function HeaderNavLink({ to, children, borderClass }) {
    return (
      <NavLink
        className={`flex items-center self-stretch ${borderClass} px-4 text-orange-500 transition-all duration-300 ease-in-out hover:bg-stone-200 hover:px-6 hover:text-stone-900`}
        to={to}
      >
        {children}
      </NavLink>
    );
  }

  HeaderNavLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    borderClass: PropTypes.string.isRequired,
  };

  return (
    <header className="flex items-center justify-between border-b-2 border-stone-900 bg-stone-100">
      <nav className="text-md flex items-center font-semibold lg:text-lg">
        <Link to="/">
          <EVLogo className="h-10 w-10 m-1 hover:mx-2 transition-all duration-300 ease-in-out" />
        </Link>
        <HeaderNavLink borderClass="border-l-2 border-stone-900" to="/about">
          About
        </HeaderNavLink>
        <HeaderNavLink borderClass="border-x-2 border-stone-900" to="/projects">
          Projects
        </HeaderNavLink>
        <HeaderNavLink borderClass="border-r-2 border-stone-900" to="/resume">
          Resume
        </HeaderNavLink>
      </nav>
      <a
        href="mailto:me@edward-vonschondorf.dev"
        className="px-4 hover:px-6 flex self-stretch items-center border-l-2 border-orange-900 bg-orange-500 text-stone-100 transition-all duration-300 ease-in-out hover:border-stone-900 hover:bg-stone-300 hover:text-stone-900"
      >
        Contact
      </a>
    </header>
  );
}

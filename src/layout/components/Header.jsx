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
    <>
      <section className="flex justify-center border-b-2 border-stone-900 bg-yellow-300 font-bold">
        CURRENTLY UNDER DEVELOPMENT
      </section>
      <header className="flex items-center justify-between border-b-2 border-stone-900 bg-stone-100 px-2 lg:px-10">
        <nav className="text-md flex items-center font-semibold lg:text-lg">
          <Link to="/">
            <EVLogo className="my-1 h-14 w-14 pr-2 md:my-0 lg:pr-6" />
          </Link>
          <HeaderNavLink borderClass="border-l-2 border-stone-900" to="/">
            About
          </HeaderNavLink>
          <HeaderNavLink
            borderClass="border-x-2 border-stone-900"
            to="/projects"
          >
            Projects
          </HeaderNavLink>
          <HeaderNavLink borderClass="border-r-2 border-stone-900" to="/resume">
            Resume
          </HeaderNavLink>
        </nav>
        <a
          href="mailto:me@edward-vonschondorf.dev"
          className="flex self-end border-x-2 border-t-2 border-orange-900 bg-orange-500 px-4 pb-2 pt-3 text-stone-100 transition-all duration-300 ease-in-out hover:border-stone-900 hover:bg-stone-300 hover:px-5 hover:text-stone-900"
        >
          Contact
        </a>
      </header>
    </>
  );
}

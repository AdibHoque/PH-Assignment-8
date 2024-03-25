import {Link, NavLink} from "react-router-dom";
import "../index.css";

export default function NavBar() {
  const navClass = ({isActive, isPending}) =>
    isPending || isActive
      ? "text-[#23BE0A] hover:text-[#23BE0A] border border-[#23BE0A] font-semibold"
      : "border border-white";
  const links = (
    <>
      <li>
        <NavLink to="/" className={navClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/listedbooks" className={navClass}>
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink to="/pagestoread" className={navClass}>
          Pages to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="p-2 mr-2 btn btn-ghost btn-md bg-[#23BE0A] lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link className="text-[#131313] font-bold text-2xl lg:text-3xl leading-6">
          Book Bank
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2">{links}</ul>
      </div>
      <div className="navbar-end flex gap-3">
        <a className="btn text-white bg-[#23BE0A]">Sign In</a>
        <a className="btn text-white bg-[#59C6D2]">Sign Up</a>
      </div>
    </div>
  );
}

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="md:w-[60%] w-[90%] md:mx-auto mb-10 mx-auto rounded-full py-6 px-4 bg-[rgba(255,255,255,0.35)] backdrop-blur-lg z-[100] sticky top-5">
      <ul className="flex w-full gap-5 justify-between px-4">
        <li className="hover:">
          <NavLink to={`/`} className="font-bold md:text-xl text-slate-900 ">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className="font-bold md:text-xl text-slate-700"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className="font-bold md:text-xl text-slate-700"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

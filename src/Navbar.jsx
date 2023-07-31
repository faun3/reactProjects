import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="md:w-[60%] w-[90%] md:mx-auto my-10 mx-auto rounded-full py-6 px-4 bg-[rgba(255,255,255,0.35)] backdrop-blur-lg z-[100] sticky top-5">
      <ul className="flex w-full gap-5 justify-between px-4">
        <li className="hover:">
          <Link
            to={`/`}
            className="font-bold md:text-xl text-slate-900 rounded-full p-3 border-slate-700 border-[2px]"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link to={"/about"} className="font-bold md:text-xl text-slate-700">
            About
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className="font-bold md:text-xl text-slate-700">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

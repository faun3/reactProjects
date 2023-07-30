const Navbar = () => {
  return (
    <nav className="md:w-[60%] w-[90%] md:mx-auto my-10 mx-auto rounded-full py-6 px-4 bg-[rgba(255,255,255,0.35)] backdrop-blur-lg z-[100] sticky top-5">
      <ul className="flex w-full gap-5 justify-between px-4">
        <li className="hover:">
          <a
            href=""
            className="font-bold text-xl text-slate-900 rounded-full p-3 border-slate-700 border-[2px]"
          >
            Projects
          </a>
        </li>
        <li>
          <a href="" className="font-bold text-xl text-slate-700">
            About
          </a>
        </li>
        <li>
          <a href="" className="font-bold text-xl text-slate-700">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

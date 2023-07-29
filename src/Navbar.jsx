const Navbar = () => {
  return (
    <nav className="md:w-[50%] sm:w-full mx-auto my-10 rounded-full bg-slate-700 py-6 px-4">
      <ul className="flex w-full gap-5 justify-between px-4">
        <li className="hover:bg-slate-200">
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

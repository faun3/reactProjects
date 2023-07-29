const Navbar = () => {
  return (
    <nav className="md:w-[50%] sm:w-full mx-auto my-10 rounded-full py-6 px-4 bg-[rgba(255,255,255,0.25)] backdrop-blur-md z-[100] sticky top-5">
      <ul className="flex w-full gap-5 justify-between px-4">
        <li className="hover:">
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

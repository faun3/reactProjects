const Navbar = () => {
  return (
    <nav className="md:w-[60%] w-[90%] md:mx-auto my-10 mx-auto rounded-full py-6 px-4 bg-[rgba(255,255,255,0.25)] backdrop-blur-md z-[100] sticky top-5">
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

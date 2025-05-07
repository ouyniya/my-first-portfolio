export const Navbar = () => {
  return (
    <div className="container flex gap-4 items-center justify-between">
      {/* Menu */}
      <div>
        <ul className="flex gap-2 text-xl h-16 items-center">
          <li>
            <a
              href="#"
              className="hover:text-orange-300 transition-all duration-500"
            >
              Home <span className="text-orange-300">&bull;</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-300 transition-all duration-500"
            >
              About <span className="text-orange-400">&bull;</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-300 transition-all duration-500"
            >
              Portfolio
            </a>
          </li>
        </ul>
      </div>

      {/* logo */}
      <div>
        <a href="#">
          <p className="font-semibold text-2xl">
            <span className="text-orange-300">Nys</span>
            <span>Dev</span>
          </p>
        </a>
      </div>
    </div>
  );
};

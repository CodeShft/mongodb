const HamburgerMenu = () => {
  return (
    <div>
      <nav className="relative">
        <button className="hamburger md:hidden" aria-label="Toggle menu">
          <span className="block w-6 h-1 bg-white mb-2"></span>
          <span className="block w-6 h-1 bg-white mb-2"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </button>

        <div className="menu hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="mobile-menu hidden absolute bg-white top-0 right-0 w-3/4 h-screen p-5">
          <ul className="space-y-6">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HamburgerMenu;

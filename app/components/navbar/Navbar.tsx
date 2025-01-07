import Logo from "./Logo";
import Search from "./Search";
import CardCount from "./CardCount";
import User from "./User";
import HamburgerMenu from "./HamburgerMenu";

const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between gap-0 md:gap-4 px-3 md:px-10 h-16 bg-orange-600">
      <Logo />

      <div className="hidden md:flex gap-4 items-center">
        <div className="opacity-90">
          <Search />
        </div>
        <CardCount />
        <User />
      </div>

      <div className="md:hidden flex items-center gap-2">
        <div className="opacity-90">
          <Search />
        </div>
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;

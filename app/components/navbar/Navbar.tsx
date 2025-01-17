"use client";
import Logo from "./Logo";
import Search from "./Search";
import User from "./User";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between gap-2 md:gap-6 px-4 md:px-10 h-16 bg-orange-600 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center gap-2 md:gap-6 ml-2">
        <div>
          <Logo />
        </div>

        <div className="hidden md:flex items-center gap-x-6 ml-2">
          <Link
            href="/stilettos"
            className="text-white hover:text-yellow-500 font-bold px-3 py-2 rounded-md transition duration-300"
          >
            Stilettos
          </Link>
          <Link
            href="/wedge-heels"
            className="text-white hover:text-yellow-500 font-bold px-3 py-2 rounded-md transition duration-300"
          >
            Wedge Heels
          </Link>
          <Link
            href="/block-heels"
            className="text-white hover:text-yellow-500 font-bold px-3 py-2 rounded-md transition duration-300"
          >
            Block Heels
          </Link>
          <Link
            href="/cowboy-heels"
            className="text-white hover:text-yellow-500 font-bold px-3 py-2 rounded-md transition duration-300"
          >
            Cowboy Heels
          </Link>
          <Link
            href="/booties"
            className="text-white hover:text-yellow-500 font-bold px-3 py-2 rounded-md transition duration-300"
          >
            Booties
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-6 ml-auto">
        <div className="relative ml-2 w-full md:w-auto">
          <Search />
        </div>

        <User />

        <div className="md:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
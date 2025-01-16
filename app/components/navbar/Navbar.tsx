"use client";

import Logo from "./Logo";
import Search from "./Search";
import User from "./User";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between gap-1 md:gap-7 px-2 md:px-15 h-16 bg-orange-600 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center gap-1 md:gap-9">
        <div className="md:ml-6">
          <Logo />
        </div>

        <div className="hidden md:flex items-center gap-x-11 ml-12">
          <Link
            href="/stilettos"
            className="text-white hover:text-yellow-500 font-bold"
          >
            Stilettos
          </Link>
          <Link
            href="/wedge-heels"
            className="text-white hover:text-yellow-500 font-bold"
          >
            Wedge Heels
          </Link>
          <Link
            href="/kitten-heels"
            className="text-white hover:text-yellow-500 font-bold"
          >
            Kitten Heels
          </Link>
          <Link
            href="/block-heels"
            className="text-white hover:text-yellow-500 font-bold"
          >
            Block Heels
          </Link>
          <Link
            href="/cowboy-heels"
            className="text-white hover:text-yellow-500 font-bold"
          >
            Cowboy Heels
          </Link>
          <Link
            href="/booties"
            className="text-white hover:text-yellow-500 font-bold"
          >
            Booties
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-1 md:gap-9 ml-auto">
        <div className="relative ml-2">
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

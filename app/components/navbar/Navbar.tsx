"use client";

import { useState } from "react";
import Logo from "./Logo";
import Search from "./Search";
import User from "./User";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between gap-2 md:gap-4 px-3 md:px-10 h-16 bg-orange-600 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center gap-4">
        <Logo />

        <div className="hidden md:flex items-center gap-4">
          <Link href="/stilettos" className="text-white hover:text-amber-700">
            Stilettos
          </Link>
          <Link href="/wedge-heels" className="text-white hover:text-amber-700">
            Wedge Heels
          </Link>
          <Link
            href="/kitten-heels"
            className="text-white hover:text-amber-700"
          >
            Kitten Heels
          </Link>
          <Link href="/block-heels" className="text-white hover:text-amber-700">
            Block Heels
          </Link>
          <Link
            href="/cowboy-heels"
            className="text-white hover:text-amber-700"
          >
            Cowboy Heels
          </Link>
          <Link href="/booties" className="text-white hover:text-amber-700">
            Booties
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <Search />
        <User />

        <div className="md:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

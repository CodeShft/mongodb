"use client";
import Logo from "./Logo";
import User from "./User";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";
import Search from "@/app/Search";
import { HiOutlineUser } from "react-icons/hi";

const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-4 md:px-10 h-16 bg-orange-600 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center gap-4 flex-grow">
        <Logo />
      </div>

      <div className="flex items-center gap-2 ml-auto w-full sm:w-auto md:w-auto">
        <div className="hidden md:flex items-center gap-x-2 ml-8 flex-grow">
          <Link
            href="/login"
            className="text-white hover:text-yellow-500 font-bold px-3 py-2 rounded-md transition duration-300 flex items-center gap-2"
          >
            <HiOutlineUser className="text-white" />
            Login
          </Link>

          <Link
            href="/stilettos"
            className="text-white hover:text-yellow-500 font-bold px-3 py-2 rounded-md transition duration-300"
          >
            Stilettos
          </Link>

          <Link
            href="/wedgeheels"
            className="text-white hover:text-yellow-500 font-bold px-3 py-2 rounded-md transition duration-300"
          >
            Wedge Heels
          </Link>

          <Link
            href="/blockheels"
            className="text-white hover:text-yellow-500 font-bold px-3 py-2 rounded-md transition duration-300"
          >
            Block Heels
          </Link>

          <Link
            href="/cowboyheels"
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

        <div className="relative w-full sm:w-full md:w-72 ml-4 flex-grow max-w-full">
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

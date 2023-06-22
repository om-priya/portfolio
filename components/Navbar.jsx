"use client";
import Link from "next/link";
import { BsFire } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(true);
  return (
    <>
      <header className="flex items-center justify-between p-2 shadow-2xl mb-6">
        {/* logo */}
        <div className="flex items-center gap-2">
          <BsFire size={30} color="red" />
          <Link href={"/"}>
            <h1 className="text-2xl font-semibold hover:scale-110 hover:text-[#884A39]">
              Om Priya
            </h1>
          </Link>
        </div>

        {/* Navbar for mobile screens */}
        <button className="sm:hidden" onClick={() => setHamburger(!hamburger)}>
          {hamburger ? <FaBars size={30} /> : <RxCross1 size={30} />}
        </button>
        {/* Navbar for big screens */}
        <nav className="hidden sm:inline-block">
          <ul className="font-medium space-x-3">
            <Link className="hover:border-b-2" href={"/"}>
              Home
            </Link>
            <Link className="hover:border-b-2 hover:scale-110" href={"/about"}>
              About
            </Link>
            <Link className="hover:border-b-2 hover:scale-110" href={"/skills"}>
              Skills
            </Link>
            <Link
              className="hover:border-b-2 hover:scale-110"
              href={"/projects"}
            >
              Projects
            </Link>
            <Link
              className="hover:border-b-2 hover:scale-110"
              href={"/contact"}
            >
              Contact
            </Link>
          </ul>
        </nav>
      </header>
      {!hamburger && (
        <ul className=" mt-4 font-medium flex flex-col min-w-full items-center gap-4 mb-6">
          <Link className="hover:border-b-2 hover:scale-110" href={"/"}>
            Home
          </Link>
          <Link className="hover:border-b-2 hover:scale-110" href={"/about"}>
            About
          </Link>
          <Link className="hover:border-b-2 hover:scale-110" href={"/skills"}>
            Skills
          </Link>
          <Link className="hover:border-b-2 hover:scale-110" href={"/projects"}>
            Projects
          </Link>
          <Link className="hover:border-b-2 hover:scale-110" href={"/contact"}>
            Contact
          </Link>
        </ul>
      )}
    </>
  );
};

export default Navbar;

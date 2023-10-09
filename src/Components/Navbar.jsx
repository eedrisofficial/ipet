import React, { useState } from "react";
import { FaPaw } from "react-icons/fa";
import { AiFillFlag, AiOutlineMenu } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import NavbarUl from "./NavbarUl";
import MobileNavbar from "./MobileNavbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <React.Fragment>
      <nav className="hidden font-semibold font-sans  px-[50px] py-[30px] text-[#494949] lg:flex  justify-between 2xl:justify-evenly 2xl:py-[60px] ">
        <Link to="/">
          <div className="flex gap-1 items-center">
            <p className="bg-[#FFBD59] p-2 rounded-md">
              <FaPaw className="text-[#000000]" />
            </p>
            <h1 className="font-bold text-[14px] xl:text-[20px] 2xl:text-[30px]">
              iPET
            </h1>
          </div>
        </Link>
        <NavbarUl />
        <div className="flex justify-center items-center gap-6">
          <div className="flex items-center">
            <p>
              <CgMenuGridO className="text-[18px] xl:text-[20px] 2xl:text-[50px]" />
            </p>
            <select className="text-[16px] font-semibold  border-2 border-[#000]">
              <option value="pet">Pets</option>
              <option value="cat">Cats</option>
              <option value="dog">Dogs</option>
            </select>
          </div>

          <p>
            <AiFillFlag className="text-[#000000] font-bold text-[16px] xl:text-[20px] 2xl:text-[40px]" />
          </p>
          <button className="text-[#000000] text-[12px] font-bold border-[1px] rounded-md px-2 lg:text-[16px]  2xl:text-[30px]">
            Sign in
          </button>
        </div>
      </nav>
      <div
        onClick={() => setMobileNav(!mobileNav)}
        className="cursor-pointer flex p-2 md:p-4 lg:hidden"
      >
        {/* HAMBURGER OUTLINE ICON */}
        <AiOutlineMenu className="text-[24px] md:text-[60px]" />
        <MobileNavbar mobileNav={mobileNav} setMobileNav={setMobileNav} />
      </div>
    </React.Fragment>
  );
};

export default Navbar;

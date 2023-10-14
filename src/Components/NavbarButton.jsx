import React from "react";
import { Link } from "react-router-dom";

const NavbarButton = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        <Link to="/signup">
          <button className="lg:text-[#000000] text-[12px] font-bold border-[1px] rounded-md px-2 lg:text-[16px]  2xl:text-[30px] hover:bg-[#f4f4f4] hover:text-[#000]">
            Sign up
          </button>
        </Link>
        <Link to="/signin">
          <button className="lg:text-[#000000] text-[12px] font-bold border-[1px] rounded-md px-2 lg:text-[16px]  2xl:text-[30px] hover:bg-[#f4f4f4] hover:text-[#000]">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavbarButton;

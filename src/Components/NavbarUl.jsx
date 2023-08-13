import React from "react";

const NavbarUl = () => {
  return (
    <ul
      className="flex flex-col  items-center gap-4 text-[14px] md:text-[28px] lg:text-[14px] cursor-pointer lg:flex-row
      2xl:text-[30px]"
    >
      <li className=" hover:underline lg:hover:no-underline lg:hover:bg-[#f4f4f4] p-1 rounded-md">
        About us
      </li>
      <li className=" hover:underline lg:hover:no-underline lg:hover:bg-[#f4f4f4] p-1 rounded-md">
        Adopt
      </li>
      <li className=" hover:underline lg:hover:no-underline lg:hover:bg-[#f4f4f4] p-1 rounded-md">
        Donate
      </li>
      <li className=" hover:underline lg:hover:no-underline lg:hover:bg-[#f4f4f4] p-1 rounded-md">
        Events
      </li>
      <li className=" hover:underline lg:hover:no-underline lg:hover:bg-[#f4f4f4] p-1 rounded-md">
        Contact us
      </li>
      <li className=" hover:underline lg:hover:no-underline lg:hover:bg-[#f4f4f4] p-1 rounded-md">
        Blog
      </li>
      <li className=" hover:underline lg:hover:no-underline lg:hover:bg-[#f4f4f4] p-1 rounded-md">
        Resources
      </li>
    </ul>
  );
};

export default NavbarUl;

// import { RiUserFollowFill } from "react-icons/ri";
import { RiUserFollowFill } from "react-icons/ri";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  const today = new Date();
  return (
    <div className="bg-[#000] mt-10">
      <div className="bottom-0 h-[200px] text-[#FFFFFF] font-bold grid grid-row-2  gap-6 lg:flex justify-around  items-center p-6  font-serif cursor-pointer">
        <div className="mt-5 ">
          <ul className="flex flex-row lg:flex-col gap-2 justify-center">
            <li className="hover:underline hover:scale-105 duration-300">
              Adopt
            </li>
            <li className="hover:underline hover:scale-105 duration-300">
              Donate
            </li>
            <li className="hover:underline hover:scale-105 duration-300">
              Events
            </li>
            <li className="hover:underline hover:scale-105 duration-300">
              Contact us
            </li>
          </ul>
        </div>

        <div className="">
          <h1 className="justify-center mt-4 flex">
            Follow us
            <span className="text-[#FFF] ml-2">
              <RiUserFollowFill size={25} />
            </span>
          </h1>
          <div className="flex justify-center flex-row gap-6 p-4 md:gap-16 lg:gap-14 animate-pulse">
            <a
              href="https://www.linkedin.com/in/haruna-idris-68aa3223a/"
              className="text-[#FFBD59] hover:-translate-y-1 hover:scale-105  duration-300 "
            >
              <BsLinkedin size={25} />
            </a>
            <a
              href="https://twitter.com/I_am_eedris"
              className=" text-[#FFBD59] hover:-translate-y-1 hover:scale-105  duration-300 "
            >
              <BsTwitter size={28} />
            </a>
            <a
              href="https://www.instagram.com/eedrisofficial/"
              className=" text-[#FFBD59] hover:-translate-y-1 hover:scale-105  duration-300"
            >
              <FaInstagramSquare size={28} />
            </a>
            <a
              href="https://www.facebook.com/IdrisHarunaAlih"
              className="text-[#FFBD59] hover:-translate-y-1 hover:scale-105  duration-300 "
            >
              <FaFacebookSquare size={28} />
            </a>
          </div>
        </div>
      </div>
      <p className=" text-center p-6 text-[#FFFFFF] text-[18px]">
        &copy; {today.getFullYear()} || All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;

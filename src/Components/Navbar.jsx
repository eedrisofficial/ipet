import { FaPaw } from "react-icons/fa";
import { AiFillFlag } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="">
      <nav className="flex justify-between font-semibold font-sans  px-[50px] py-[30px] text-[#494949] ">
        <div className="flex gap-1 items-center">
          <p className="bg-[#FFBD59] p-2 rounded-md">
            <FaPaw className="text-[#000000]" />
          </p>
          <h1 className="font-bold text-[14px]">iPET</h1>
        </div>
        <ul className="flex items-center gap-4 text-[14px] cursor-pointer">
          <li>About us</li>
          <li>Adopt</li>
          <li>Donate</li>
          <li>Events</li>
          <li>Contact us</li>
          <li>Blog</li>
          <li>Resources</li>
        </ul>
        <div className="flex justify-center items-center gap-6">
          <div className="flex items-center">
            <p>
              <CgMenuGridO size={18} />
            </p>
            <select className="text-[13px] font-semibold">
              <option value="pet">Pets</option>
              <option value="cat">Cats</option>
              <option value="dog">Dogs</option>
            </select>
          </div>

          <p>
            <AiFillFlag size={15} className="text-[#000000] font-bold" />
          </p>
          <button className="text-[#000000] text-[12px] font-bold border-[1px] rounded-md px-2">
            Sign in
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

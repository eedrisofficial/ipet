import { BiSolidCloudUpload } from "react-icons/bi";
import { GiSittingDog } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-16 mt-5 lg:mt-10 font-sans text-[#494949]  text-[16px]">
      <div className="flex flex-col gap-3 items-center text-center">
        <div className="text-[#000000] font-bold text-[40px]">
          <h1>
            Every Pet Deserves a{" "}
            <span className="text-[#FFBD59]"> Loving </span>
            Home.
          </h1>
          <h1>
            <span className="text-[#FFBD59]">Adopt</span> a Pet Today.
          </h1>
        </div>
        <p className="px-[50px] lg:px-[300px]">
          Browse our available animals and learn more about the adoption
          process. Together, we can
          <span className="font-semibold px-1">
            rescue, rehabilitate, and rehome pets in need.
          </span>
          Thank you for supporting our mission to bring joy to families through
          pet adoption.
        </p>
      </div>
      <div>
        <div className="flex gap-1">
          <div className="flex text-[#000000] font-semibold">
            <p className="bg-[#E9E9E9] flex items-center py-1 gap-6 px-2">
              <GiSittingDog size={30} className="text-[#000000]" />
              <span className="bg-[#E9E9E9]">
                <select name="" id="" className="bg-[#E9E9E9] border-0">
                  <option value="">Dog</option>
                </select>
              </span>
            </p>
            <input
              type="text"
              placeholder="Search dogs..."
              className="border-1 p-1 focus:border-2 outline-none font-normal text-[12px] bg-[#f5f5f5] focus:bg-white"
            />
            <p className="flex items-center gap-1 bg-[#E9E9E9] px-2">
              <BiSolidCloudUpload size={20} className="cursor-pointer" />
              <span>Search by image</span>
            </p>
          </div>
          <button className="bg-[#000000] px-2 w-[100px]  text-white rounded-md text-[12px] flex justify-center items-center gap-1 font-semibold">
            <span>
              <AiOutlineSearch size={15} />
            </span>
            Search
          </button>
        </div>
        <div className="flex gap-1 items-center">
          <p className="font-semibold">Frequents:</p>
          <ul className="flex gap-2 text-[14px] underline">
            <li>Parrot,</li>
            <li>Cat,</li>
            <li>Black-dog</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;

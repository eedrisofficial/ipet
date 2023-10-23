import React, { useState } from "react";

const SingleFrame = ({ animal }) => {
  const [isHover, setIsHover] = useState(false);

  function handleMouseEnter(e) {
    setIsHover(true);
  }
  function handleMouseLeave(e) {
    setIsHover(false);
  }
  return (
    <React.Fragment>
      <div className="relative flex flex-col shadow-lg  overflow-hidden ">
        <div className="">
          <img
            src={animal.Image}
            alt={animal.category}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className=" w-[180px] h-[120px]   2xl:w-[550px] 2xl:h-[400px] hover:scale-150  duration-500 overflow-hidden"
          />
          <button
            className={`bg-[#2C3639] text-[#FFF] text-[18px] font-bold  absolute top-12 left-10 p-2 rounded-md ${
              isHover ? "" : "hidden"
            }`}
          >
            Adopt me
          </button>
        </div>

        <div className="text-[#7a7878] text-[12px] font-semibold  md:text-[16px] lg:text-[14px]  2xl:text-[40px]">
          {animal.name}{" "}
          <span className="text-[10px]  text-[#7a7878] font-light rounded-full px-2 md:text-[12px] lg:text-[18px]  2xl:text-[40px] ">
            {animal.number}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleFrame;

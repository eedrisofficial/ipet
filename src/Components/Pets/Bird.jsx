import React, { useState } from "react";
import SingleFrame from "./SingleFrame";
import { bird } from "../Local DB/Bird";

const Bird = () => {
  const [pet, setPet] = useState(bird);
  return (
    <div className="flex  justify-center items-center cursor-pointer pt-4">
      <div>
        <h1 className="py-1 text-[20px] font-bold flex gap-3 items-center">
          Birds
          <span className="border-2 border-[#e5e5e5] text-[14px] text-[#7a7878] font-normal rounded-full p-1 px-2">
            14
          </span>
        </h1>
        <div className="flex flex-wrap gap-10">
          {pet.map((animal) => (
            <SingleFrame animal={animal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bird;

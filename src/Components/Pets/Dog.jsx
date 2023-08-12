import React, { useState } from "react";
import { dog } from "../Local DB/Dog";
import SingleFrame from "./SingleFrame";

const Dog = () => {
  const [pet, setPet] = useState(dog);
  return (
    <div className="flex  justify-center items-center pt-10">
      <div>
        <h1 className="py-1 text-[20px] font-bold flex gap-3 items-center">
          Dogs
          <span className="border-2 border-[#e5e5e5] text-[14px] text-[#7a7878] font-normal rounded-full p-1 px-2">
            35
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

export default Dog;

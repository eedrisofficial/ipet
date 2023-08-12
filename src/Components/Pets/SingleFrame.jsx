const SingleFrame = ({ animal }) => {
  return (
    <div>
      <div className=" flex flex-col ">
        <img
          src={animal.Image}
          alt={animal.category}
          className="w-[220px] h-[150px] "
        />

        <div className="text-[#7a7878] text-[12px] font-semibold ">
          {animal.name}{" "}
          <span className="text-[10px] text-[#7a7878] font-light rounded-full px-2 ">
            {animal.number}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleFrame;

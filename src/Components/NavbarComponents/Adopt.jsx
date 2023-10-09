import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Adopt = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="h-screen">
        <h1 className="flex justify-center items-center h-[100%] font-extrabold text-[28px]">
          You have not pick any pet
        </h1>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Adopt;

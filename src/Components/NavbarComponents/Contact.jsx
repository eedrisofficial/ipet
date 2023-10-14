import React from "react";
import Navbar from "../Navbar";

const Contact = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section className=" flex items-center justify-center py-10 px-[100px]">
        <div className="w-[100%]  flex items-center shadow-lg  ">
          <div className="w-[50%] flex flex-col gap-4 p-5">
            <h2 className="font-bold text-2xl text-[#FFBD59]">
              Get In <span className="text-[#2C3639]">Touch</span>{" "}
            </h2>
            <p className="">
              connect with us via our customer support or locate us on social
              media.
              <span className="font-bold">
                we're at your service round the clock, ready to engage.
              </span>
            </p>
            <form action className="flex flex-col gap-4">
              <input
                className="p-2 mt-4 border font-thin outline-none focus:border-[#FFBD59]"
                type="text"
                name="name"
                placeholder="Name *"
              />
              <input
                className="p-2 border font-thin outline-none focus:border-[#FFBD59]"
                type="text"
                name="number"
                placeholder="Phone Number"
              />
              <textarea
                className="p-2 border font-thin outline-none focus:border-[#FFBD59]"
                name="message"
                placeholder="Write Your Message..."
                cols={8}
                rows={5}
                defaultValue={""}
              />
              <button className="bg-[#2C3639] text-white py-2 hover:bg-indigo-950">
                SEND
              </button>
            </form>
          </div>
          <div className="w-[50%] hidden lg:flex ">
            <img src="/donate2.jpeg" alt="" className="w-full h-[100%]" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;

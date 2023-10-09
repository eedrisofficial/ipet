import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import Bird from "./Pets/Bird";
import Cat from "./Pets/Cat";
import Dog from "./Pets/Dog";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="mb-10">
        <Hero />
        <Dog />
        <Cat />
        <Bird />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;

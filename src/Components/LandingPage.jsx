import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import Bird from "./Pets/Bird";
import Cat from "./Pets/Cat";
import Dog from "./Pets/Dog";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        animate={{}}
        className="mb-10"
      >
        <Hero />
        <Dog />
        <Cat />
        <Bird />
      </motion.div>
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;

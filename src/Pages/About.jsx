import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/aboutus.jpg';

const About = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <div className="relative w-full md:w-1/2 overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-24 transform -skew-x-12 origin-left hidden md:block"></div>
        <motion.img
          animate={{ // moves left & right
            rotate: [20,-20,20,-20]
          }}
          transition={{
            duration: 5,     // speed of one shake
            repeat: Infinity,  // keep repeating
            repeatType: "loop" // loop forever
          }}
          src={aboutImg}
          alt="About Crowbar"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-16">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative text-xl md:text-2xl lg:text-3xl text-gray-800 leading-loose max-w-md font-light"
        >
          {" "}
          <span className="font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Dhilip PURUSHOTHAMAN
          </span>
          , Director of{" "}
          <span className="font-semibold text-indigo-600">Crowbar Ltd.</span>{" "}
         Crowbar Ventures Ltd is a brand new, small scale enterprise registered in central London and led by Dhilip Purushothaman.{" "}
          <span className="italic text-purple-800"><p>Business and domestic software development.</p></span>
        </motion.p>
      </div>

    </div>
  );
};

export default About;

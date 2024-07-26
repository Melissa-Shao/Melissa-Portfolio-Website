"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  const fileUrl = '/Melissa_Shao_Resume.pdf';

  return (
    <motion.div className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>

      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* image container */}
        <div className="h-2/5 relative lg:h-full lg:w-1/2">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
        {/* text container */}
        <div className="h-1/2 flex flex-col lg:h-full lg:w-1/2 gap-8 items-center justify-center">
          {/* title */}
          <h1 className="text-3xl md:text-6xl font-bold">Crafting Digital Experiences, Designing Tomorrow.</h1>
          {/* desc */}
          <p className="md:text-lg">Welcome to my digital canvas, where innovation, creativity, and technical expertise converge. With a keen eye for aesthetics, a mastery of code, and a deep understanding of data, my portfolio showcases a diverse collection of projects that reflect my commitment to excellence.</p>
          {/* buttons */}
          <div className="flex gap-4 w-full">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View my work</button>
            </Link>
            <a href={fileUrl} target="_blank" rel="noopener noreferrer">
              <button className="p-4 rounded-lg ring-1 ring-black flex flex-row justify-between items-center">
                See My Resume
              </button>
            </a>
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default Homepage;
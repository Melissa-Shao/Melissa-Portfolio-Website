"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Contactpage = () => {
  const text = 'Say Hello';

  const [success, setSuccess] = useState(true);
  const [error, setError] = useState(true);

  return (
    <motion.div className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl md:text-6xl">
          <div className="">
            {text.split("").map((letter, index) => (
              <motion.span key={index} initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }} className="">{letter}</motion.span>
            ))}
            <span className="text-4xl md:text-6xl p-4">🛸</span>
          </div>
        </div>

        {/* form container */}
        <form action="" className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-4 justify-center p-4 md:p-8 lg:p-16">
          <span>Dear Melissa,</span>
          <textarea rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none" />
          <span>My email address is:</span>
          <input type="text" className="bg-transparent border-b-2 border-b-black outline-none" />
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-2">Send</button>
          {success && <span className="text-green-300 font-semibold">Message sent successfully!</span>}
          {error && <span className="text-red-300 font-semibold">Message failed to send!</span>}
        </form>

      </div>
    </motion.div >
  )
};

export default Contactpage;
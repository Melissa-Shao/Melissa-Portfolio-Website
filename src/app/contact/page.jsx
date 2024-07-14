"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contactpage = () => {
  const text = 'Say Hello';

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        (result) => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        },
      );
  };

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
        <form
          onSubmit={sendEmail}
          ref={form} action="" className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-4 justify-center p-4 md:p-8 lg:p-16">
          <span>Dear Melissa,</span>
          <textarea rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none" name="userMessage" />
          <span>My email address is:</span>
          <input name="userEmail" type="text" className="bg-transparent border-b-2 border-b-black outline-none" />
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
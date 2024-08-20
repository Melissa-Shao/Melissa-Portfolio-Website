"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "SmileEstate App",
    desc: "SmileEstate is a platform designed to help people find and post properties for sale or rent, with a real-time chat feature to enhance communication efficiency between both parties.",
    img: "/smile.png",
    link: "https://smile-estate-app.onrender.com",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Dronify App",
    desc: "Dronify is a web application that deploys autonomous drones (on-demand) to offer package delivery and roadside assistance for autonomous car owners during accidents, thereby reducing delivery time and traffic congestion.",
    img: "/dronify.png",
    link: "https://dronify-mbme.onrender.com/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "ProcrastinHate App",
    desc: "Developed an innovative application designed to help users tackle procrastination by providing tools and resources to improve their physical and mental health. Encourage users to stay focused and productive, and improve their happiness and well-being.",
    img: "/1.png",
    link: "https://dtc11-project.web.app",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Pikachu Game",
    desc: "Pikachu game is a text-based single-user dungeongame that allows users to play as Pikachu and interact with other characters in the game. The game is designed to be fun and engaging for users of all ages.",
    img: "/pikachu.png",
    link: "https://github.com/candiceweily/1510_team_project.git",
  },
  {
    id: 5,
    color: "from-red-300 to-blue-300",
    title: "Data Analysis Project",
    desc: "This project involves a data analysis workflow using Kaggle API for data acquisition, followed by data management and analysis using Python, Pandas, and SQL.",
    img: "/data.png",
    link: "https://github.com/Melissa-Shao/data-analysis-project.git",
  },
];

const Portfoliopage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-6xl md:text-8xl lg:text-8xl text-center">My Projects</div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex ">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"></div>

            {items.map(item => (<div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>
              <div className="flex flex-col gap-8 text-white">
                <h1 className="text-3xl font-bold md:text-4xl lg:text-4xl xl:text-5xl xl:pt-8">{item.title}</h1>
                <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[500px] xl:h-[350px]">
                  <Image src={item.img} alt='' fill />
                </div>
                <p className=" w-80 md:w-96 lg:w-[500px] text-xl md:text-lg lg:text-lg xl:w-[500px]">{item.desc}</p>
                <Link href={item.link} target="_blank" rel="noopener noreferrer" className="flex justify-end"><button className="p-2 text-lg md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold rounded m-2">See Demo</button></Link>
              </div>
            </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="w-screen h-screen flex flex-col items-center justify-center text-center bg-gradient-to-t from-yellow to-purple">
        <h1 className="text-6xl md:text-6xl lg:text-8xl">Want to contact me?</h1>
        {/*  portfolio svg  */}
        <div className="relative">

          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full Stack Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link href="/contact" className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center">Contact Me
          </Link>
        </div>
      </div>
    </motion.div>
  )
};

export default Portfoliopage;
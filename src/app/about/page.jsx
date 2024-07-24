"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const Aboutpage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillInView = useInView(skillRef, { margin: '100px' });
  // const isSkillInView = useInView(skillRef,{once:true});

  const experienceRef = useRef();
  const isExperienceInView = useInView(experienceRef, { margin: '100px' });

  return (
    <motion.div className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>

      {/* container */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>

        {/* text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* biography container */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">ABOUT ME</h1>
            {/* biography description */}
            <div className="text-lg">
              <p className="pb-2">My name is Melissa. Currently, I am a full-time student in the Computer Systems Technology program at BCIT. Previously, I worked in the financial field for over eight years, during which I honed my skills in leadership, client service and data analysis.</p>
              <p>I love critical thinking and solving complex problems. The challenge of analyzing issues, breaking them down into manageable parts, and finding innovative solutions is deeply satisfying to me.I also enjoy testing and debugging, as my meticulous nature ensures thorough and accurate results.</p>
            </div>

            {/* biography quote */}
            <span className="italic">The only way to do great work is to love what you do.</span>
            {/* sign */}
            <div className="self-end">
              <svg width="185" height="77" viewBox="0 0 370 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 77C6.59034 77 12.1844 77.9573 16.4444 76C21.6565 73.6053 26.5731 70.8681 31.7222 68.3889C48.8334 60.1502 66.4572 49.7062 79.4444 35.7778C86.8281 27.859 94.358 20.181 100 10.7778C101.123 8.9058 108.528 -2.84179 102.444 4.11111C91.2126 16.9476 82.2863 30.4274 74.6667 45.6667C71.2111 52.5778 68 58.6881 68 66.5C68 71.0026 76.9501 69.3692 80 68.3889C83.7447 67.1852 87.6821 63.4972 91 61.3333C95.8075 58.198 100.291 53.1162 104 48.7778C113.226 37.9846 119.24 24.6019 127.556 13.2222C137.864 -0.884314 106 43.5283 106 61C106 69.986 107.2 71 116.222 71C118.773 71 127.273 71.6584 129 69.5C130.418 67.7275 135.636 65.046 137.778 64.2222C142.939 62.2372 148 55.9426 148 50.5C148 48.1557 142.977 48.579 141.778 49.7778C139.907 51.649 138.296 54.2882 137 56.5556C135.438 59.2884 131.594 67.6996 137 68C143.832 68.3795 151.371 68.2509 158 66.7778C178.514 62.2191 195.304 45.1098 206.389 28.0556C209.152 23.805 211.922 20.0777 215.5 16.5C222.199 9.80107 214.128 16.7136 211.444 18.7778C202.004 26.0396 191.882 33.5344 184.444 43C180.19 48.4145 151.926 71 174 71C182.481 71 187.907 67.0897 193.944 61.5556C198.806 57.0989 202.566 51.2372 207.444 47.0556C210.547 44.3962 212.839 38.0967 208.778 45C204.758 51.8329 197.488 57.2953 198 66C198.194 69.2964 216.329 66.911 219.5 64.4444C221.708 62.727 223.874 59.3282 225.222 57C226.544 54.7174 232.639 49.5925 230.444 51.0556C228.311 52.478 221.348 66.4265 224.222 68.7778C226.045 70.2692 242.754 70.5803 245.5 68.4444C249.899 65.0229 253.911 59.9924 257 55.4444C258.852 52.7177 261.054 49.9463 263.389 47.6111C265.527 45.4734 260.864 53.1088 259.444 55.7778C257.819 58.8335 250.419 73 258.056 73C262.471 73 266.924 73.1837 271.333 73C275.204 72.8387 277.305 66.4478 278.333 63.4444C280.255 57.8342 279 39.7366 279 45.6667C279 49.4894 277.82 55.7091 280.722 58.6111C285.438 63.3264 291.974 65.9601 297.778 69C301.655 71.0312 304.859 73 309.222 73C313.716 73 317.042 70.281 321 68.2778C332.581 62.4155 341.212 55.8767 350.778 47.2222C354.959 43.4394 359.299 39.8367 363.222 35.7778C363.891 35.0856 367.004 32 366 32" stroke="black" stroke-width="3" stroke-linecap="round" />
              </svg>
            </div>
            {/* scroll svg */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* skills container */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* skills title */}
            <motion.h1 initial={{ x: '-300px' }} animate={isSkillInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className="font-bold text-2xl">SKILLS</motion.h1>
            {/* skills list */}
            <motion.div initial={{ x: '-300px' }} animate={isSkillInView ? { x: 0 } : {}} className=" flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Python</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">SQL</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Java</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Firebase</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">MongoDB</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">React.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Express.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Next.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Node.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tailwind CSS</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Framer Motion</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Git</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Bash</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Figma</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Trello</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Lucidchart</div>
            </motion.div>
            {/* skills scroll svg */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* experience container */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            {/* experience title */}
            <motion.h1 initial={{ x: "-300px" }} animate={isExperienceInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className="font-bold text-2xl">EXPERIENCE</motion.h1>
            {/* experience lists */}
            <motion.div initial={{ x: "-300px" }} animate={isExperienceInView ? { x: 0 } : {}} className="">

              {/* experience list item */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3 ">
                </div>
                {/* center */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                    </div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3 flex flex-col md:gap-0 lg:gap-0">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Volunteer NewToBC Library Champion</div>
                  <div className="p-3 text-sm italic">Provided library resources, built community connections, supported integration by offering advice and tips.</div>
                  <div className="p-3 text-red-400 text-sm font-semibold"> Sep 2023 - Dec 2023
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">NewToBC</div>
                </div>
              </div>

              {/* experience list item */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3 flex flex-col md:gap-0 lg:gap-0">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Financial Analyst</div>
                  <div className="p-3 text-sm italic">
                    Analyzed financial products, delivered financial advice, developed and maintained databases.
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">Jul 2016 - Jul 2021</div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">China Minsheng Banking Corp.,Ltd</div>
                </div>
                {/* center */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                    </div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3 ">
                </div>
              </div>

              {/* experience list item */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3 ">
                </div>
                {/* center */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                    </div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3 flex flex-col md:gap-0 lg:gap-0">
                  <div className="bg-white p-3 mt-40 md:mt-0 lg:mt-0 font-semibold rounded-b-lg rounded-s-lg">Lobby Manager</div>
                  <div className="p-3 text-sm italic">Implemented data-driven strategies, implemented data-driven strategies and spearheaded a data system.</div>
                  <div className="p-3 text-red-400 text-sm font-semibold"> Jan 2014 - Jul 2016</div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">China Minsheng Banking Corp.,Ltd</div>
                </div>
              </div>

              {/* experience list item */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3 flex flex-col md:gap-0 lg:gap-0">
                  <div className="bg-white p-3 mt-36 md:mt-0 lg:mt-0 font-semibold rounded-b-lg rounded-s-lg">Bank Clerk/Teller</div>
                  <div className="p-3 text-sm italic">Utilized data analysis techniques, leveraged data insights and implemented data-driven solutions.</div>
                  <div className="p-3 text-red-400 text-sm font-semibold">2024-present</div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">China Minsheng Banking Corp.,Ltd</div>
                </div>
                {/* center */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                    </div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3 ">
                </div>
              </div>

            </motion.div>
          </div>
        </div>

        {/* svg container */}
        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  )
};

export default Aboutpage;
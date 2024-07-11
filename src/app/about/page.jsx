"use client";
import { motion } from "framer-motion";
import Brain from "@/components/brain";

const Aboutpage = () => {
  return (
    <motion.div className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>

      {/* container */}
      <div className="h-full overflow-scroll lg:flex">

        {/* text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* biography container */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* biography description */}
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, error, consectetur voluptatum tempore officia repudiandae beatae provident, consequuntur eius asperiores nobis est eveniet ipsa totam at quod porro possimus facere.</p>
            {/* biography quote */}
            <span className="italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, repellendus.</span>
            {/* sign */}
            <div className="self-end">
              <svg width="185" height="77" viewBox="0 0 370 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 77C6.59034 77 12.1844 77.9573 16.4444 76C21.6565 73.6053 26.5731 70.8681 31.7222 68.3889C48.8334 60.1502 66.4572 49.7062 79.4444 35.7778C86.8281 27.859 94.358 20.181 100 10.7778C101.123 8.9058 108.528 -2.84179 102.444 4.11111C91.2126 16.9476 82.2863 30.4274 74.6667 45.6667C71.2111 52.5778 68 58.6881 68 66.5C68 71.0026 76.9501 69.3692 80 68.3889C83.7447 67.1852 87.6821 63.4972 91 61.3333C95.8075 58.198 100.291 53.1162 104 48.7778C113.226 37.9846 119.24 24.6019 127.556 13.2222C137.864 -0.884314 106 43.5283 106 61C106 69.986 107.2 71 116.222 71C118.773 71 127.273 71.6584 129 69.5C130.418 67.7275 135.636 65.046 137.778 64.2222C142.939 62.2372 148 55.9426 148 50.5C148 48.1557 142.977 48.579 141.778 49.7778C139.907 51.649 138.296 54.2882 137 56.5556C135.438 59.2884 131.594 67.6996 137 68C143.832 68.3795 151.371 68.2509 158 66.7778C178.514 62.2191 195.304 45.1098 206.389 28.0556C209.152 23.805 211.922 20.0777 215.5 16.5C222.199 9.80107 214.128 16.7136 211.444 18.7778C202.004 26.0396 191.882 33.5344 184.444 43C180.19 48.4145 151.926 71 174 71C182.481 71 187.907 67.0897 193.944 61.5556C198.806 57.0989 202.566 51.2372 207.444 47.0556C210.547 44.3962 212.839 38.0967 208.778 45C204.758 51.8329 197.488 57.2953 198 66C198.194 69.2964 216.329 66.911 219.5 64.4444C221.708 62.727 223.874 59.3282 225.222 57C226.544 54.7174 232.639 49.5925 230.444 51.0556C228.311 52.478 221.348 66.4265 224.222 68.7778C226.045 70.2692 242.754 70.5803 245.5 68.4444C249.899 65.0229 253.911 59.9924 257 55.4444C258.852 52.7177 261.054 49.9463 263.389 47.6111C265.527 45.4734 260.864 53.1088 259.444 55.7778C257.819 58.8335 250.419 73 258.056 73C262.471 73 266.924 73.1837 271.333 73C275.204 72.8387 277.305 66.4478 278.333 63.4444C280.255 57.8342 279 39.7366 279 45.6667C279 49.4894 277.82 55.7091 280.722 58.6111C285.438 63.3264 291.974 65.9601 297.778 69C301.655 71.0312 304.859 73 309.222 73C313.716 73 317.042 70.281 321 68.2778C332.581 62.4155 341.212 55.8767 350.778 47.2222C354.959 43.4394 359.299 39.8367 363.222 35.7778C363.891 35.0856 367.004 32 366 32" stroke="black" stroke-width="3" stroke-linecap="round" />
              </svg>
            </div>
            {/* scroll svg */}
            <svg
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
            </svg>
          </div>

          {/* skills container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* skills title */}
            <h1 className="font-bold text-2xl">SKILLS</h1>
            {/* skills list */}
            <div className=" flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
            </div>
            {/* skills scroll svg */}
            <svg
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
            </svg>
          </div>

          {/* experience container */}
          <div className="flex flex-col gap-12 justify-center pb-48">
            {/* experience title */}
            <h1 className="font-bold text-2xl">experience</h1>
            {/* experience lists */}
            <div className="">

              {/* experience list item */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Senior JavaScript Engineer</div>
                  <div className="p-3 text-sm italic">job desc</div>
                  <div className="p-3 text-red-400 text-sm font-semibold">2024-present</div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">company Apple</div>
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
                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Senior JavaScript Engineer</div>
                  <div className="p-3 text-sm italic">job desc</div>
                  <div className="p-3 text-red-400 text-sm font-semibold">2024-present</div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">company Apple</div>
                </div>
              </div>

              {/* experience list item */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Senior JavaScript Engineer</div>
                  <div className="p-3 text-sm italic">job desc</div>
                  <div className="p-3 text-red-400 text-sm font-semibold">2024-present</div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">company Apple</div>
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

            </div>
          </div>
        </div>

        {/* svg container */}
        <div className="hidden lg:block w-1/3 xl:1/2 sticky top-0 z-30">
          <Brain />
        </div>
      </div>
    </motion.div>
  )
};

export default Aboutpage;
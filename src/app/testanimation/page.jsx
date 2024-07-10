"use client";
import { motion } from 'framer-motion';
const testPage = () => {
  const variants = {
    variant1: {
      x: 400, y: 100, opacity: 0.5,
      transition: { delay: 2, duration: 2 }
    },
    variant2: {
      x: 100, y: -100, roataion: 90
    },
  }

  return (
    <div className="h-full flex  items-center justify-center">
      {/* {animate={condition ? "variant1" : "variant2"} } */}
      <motion.div className="w-96 h-96 bg-orange-400 rounded-lg" variants={variants} animate="variant1"></motion.div>
    </div>
  )
}

export default testPage;
"use client";
import { motion } from "framer-motion";

const Portfoliopage = () => {
  return (
    <motion.div className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      PortfolioPage</motion.div>
  )
};

export default Portfoliopage;
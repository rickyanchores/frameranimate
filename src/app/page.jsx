'use client'

import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className="Home min-h-screen grid justify-center items-center ">
      <motion.div 
      initial={{opacity: 0, y:-50}}
      animate={{opacity: 1, y: 0}}
      duration={{duration: 1.6}}
      className="text-4xl">
        Welcome to my first framer-motion project
      </motion.div>
      
      <motion.button 
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}
      className="p-4 bg-violet-800">
        Click me
      </motion.button>
    </div>
  );
}

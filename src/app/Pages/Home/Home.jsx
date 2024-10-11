'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className="Home min-h-screen grid justify-center items-center" id="/">
        <motion.div 
      initial={{opacity: 0, y:-50}}
      animate={{opacity: 1, y: 0}}
      duration={{duration: 2.0}}
      className="text-4xl">
        Welcome to my first framer-motion project
      </motion.div>

      <motion.div 
         initial={{opacity: 0, y:-50}}
         animate={{opacity: 1, y: 0}}
         duration={{duration: 2.0}}
        className="Box bg-teal-500 p-12">
        Box
      </motion.div>

      <motion.div 
                 initial={{opacity: 0, y:-50}}
                 animate={{opacity: 1, y: 0}}
                 duration={{duration: 3.0}}
                 whileHover={{scale: 1.1}}
                 whileTap={{scale: 0.9}}
        className='Card bg-purple-600 text-white p-6 w-[360px] rounded-md'>
        Card
      </motion.div>
    </div>
  )
}

export default Home
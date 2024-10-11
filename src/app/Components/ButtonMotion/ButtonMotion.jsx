import React from 'react'

import { motion } from 'framer-motion';
const ButtonMotion = () => {
  return (
    <motion.button 
    whileHover={{scale: 1.1}}
    whileTap={{scale: 0.9}}
    className="bg-red-800">
      Click me
    </motion.button>
  )
}

export default ButtonMotion;
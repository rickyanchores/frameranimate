import React from 'react'
import { motion } from 'framer-motion';
const Card = () => {
  return (
    <motion.div 
    initial={{opacity: 0, y:-50}}
    animate={{opacity: 1, y: 0}}
    duration={{duration: 3.0}}
    whileHover={{scale: 1.1}}
    whileTap={{scale: 0.9}}
    className="Card bg-purple-600 p-4">
        <h1>Card</h1>
    </motion.div>
  )
}

export default Card;
import React from 'react'
import { motion } from 'framer-motion';

const ImageCard = () => {
  return (
    <motion.div className='ImageCard bg-slate-900'
    initial={{opacity: 0, y:-50}}
    animate={{opacity: 1, y: 0}}
    duration={{duration: 3.0}}
    whileHover={{scale: 1.1}}
    whileTap={{scale: 0.9}}>
        <img src="" alt="image" />
        <p>This is image</p>
    </motion.div>
  )
}

export default ImageCard;
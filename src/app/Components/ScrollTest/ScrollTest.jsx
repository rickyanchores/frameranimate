
import {React, useRef} from "react"
import { motion } from "framer-motion";

const ScrollTest = () => {
    const scrollRef = useRef(null)
    
    return (
      <div ref={scrollRef} style={{ overflow: "scroll" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ root: scrollRef }}
        />
      </div>
    )
  }

  export default ScrollTest;


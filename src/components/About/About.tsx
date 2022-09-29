import React, {useContext} from 'react';
import {DirectionContext} from '../DirectionContext'
import { motion} from 'framer-motion'

function About() {
  const {direction} = useContext(DirectionContext);
  console.log(direction);
  
  return (
    <motion.div 
    initial = {{x:direction.AboutStartX, y:direction.AboutStartY,opacity: 0}} 
    animate= {{x:0, y:0,opacity: 1}}
    exit={{opacity:0}} 
    transition={{duration: 1.0  }}
    className="bg-green-800 w-full h-full text-white" >
      About
    </motion.div>
  )
}

export default About
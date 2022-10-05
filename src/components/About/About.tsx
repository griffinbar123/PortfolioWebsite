import React, {useContext} from 'react';
import {DirectionContext} from '../DirectionContext'
import { motion} from 'framer-motion'

function About() {
  const {direction} = useContext(DirectionContext);
  // console.log(direction);

  const animation = {
    initial : {x:direction.AboutStartX, y:direction.AboutStartY, opacity: 0} ,
      animate: {x:0, y:0, opacity: 1},
      exit:{x:direction.AboutStartX/2, y:direction.AboutStartY/2, opacity: 0, transition:{duration: 0.5   }},
      transition:{duration: 1.3  }
  };

  const animateItem = {
    initial : {opacity: 0} ,
      animate: {opacity: 1},
      exit:{opacity: 0},
      transition:{duration: 1.6}
  };
  
  return (
    <motion.div 
    initial = {animation.initial}
    animate= {animation.animate}
    exit={animation.exit} 
    transition={animation.transition}
    className="bg-green-800 w-full h-full text-white" >
      About
    </motion.div>
  )
}

export default About
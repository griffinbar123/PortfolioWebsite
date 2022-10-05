import React, {useContext} from 'react';
import {DirectionContext} from '../DirectionContext'
import { motion} from 'framer-motion'



function Home() {
  const {direction} = useContext(DirectionContext);

  const animation = {
    initial : {x:direction.HomeStartX, y:direction.HomeStartY, opacity: 0} ,
      animate: {x:0, y:0, opacity: 1},
      exit:{x:direction.HomeStartX, y:direction.HomeStartY, opacity: 0, transition:{duration: 0.5  }},
      transition:{duration: 1.5   }
  };

  const animateItem = {
    initial : {opacity: 0} ,
      animate: {opacity: 1},
      exit:{opacity: 0},
      transition:{duration: 1.6}
  };
  // console.log(direction);
  
  return (
    <motion.div 
    initial = {animation.initial}
    animate= {animation.animate}
    exit={animation.exit} 
    transition={animation.transition}
    className="bg-yellow-500 w-full h-full text-white" >
      Home
    </motion.div>
  )
}

export default Home
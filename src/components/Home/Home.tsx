import React, {useContext} from 'react';
import {DirectionContext} from '../DirectionContext'
import { motion} from 'framer-motion'

function Home() {
  const {direction} = useContext(DirectionContext);
  console.log(direction);
  
  return (
    <motion.div 
    initial = {{x:direction.HomeStartX, y:direction.HomeStartY}} 
    animate= {{x:0, y:0}}
    exit={{opacity:0}} 
    className="bg-yellow-500 w-full h-full text-white" >
      Home
    </motion.div>
  )
}

export default Home
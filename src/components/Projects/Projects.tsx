import React, {useContext} from 'react'
import {DirectionContext} from '../DirectionContext'
import { motion} from 'framer-motion'


function Projects() {
  const {direction} = useContext(DirectionContext);
  console.log(direction);
  return (
    <motion.div initial = {{x:direction.ProjectsStartX, y:direction.ProjectsStartY, opacity: 0}} 
    animate= {{x:0,y: 0, opacity: 1}}
    transition={{duration: 1.0  }}
    exit={{opacity:0}} 
    className="bg-red-900 w-full h-full text-white" >
      Projects
    </motion.div>
  )
}

export default Projects
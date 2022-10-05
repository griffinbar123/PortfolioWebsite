import React, {useContext} from 'react'
import {DirectionContext} from '../DirectionContext'
import { motion} from 'framer-motion'
import { Link } from 'react-router-dom';


function Projects() {
  const {direction} = useContext(DirectionContext);
  console.log(direction);

  const animation = {
    initial : {x:direction.ProjectsStartX, y:direction.ProjectsStartY, opacity: 0} ,
      animate: {x:0, y:0, opacity: 1},
      exit:{x:direction.ProjectsStartX, y:direction.ProjectsStartY, opacity: 0, transition:{duration: 0.5   }},
      transition:{duration: 1.5   }
  };
  // const animateItem = {
  //   initial : {opacity: 0} ,
  //     animate: {opacity: 1},
  //     exit:{opacity: 0},
  //     transition:{duration: 1.6}
  // };
  return (
    <motion.div 
      initial = {animation.initial}
      animate= {animation.animate}
      exit={animation.exit} 
      transition={animation.transition}
      className="bg-red-500 w-full h-full overflow-hidden text-white pointer-events-none" >
        <Link to="/" className="absolute inset-y-0 z-60 left-3 h-full flex items-center flex-row-reverse">
          <motion.button 
          whileHover={{scale: 1.4, x:6 ,opacity: 1}}
          transition={{ease:"easeInOut"}}
          className=" bg-gray-500 p-3 h-1/3 opacity-60 pointer-events-auto"/>
        </Link>
        <motion.button 
        whileHover={{scale: 1.4, x:60 ,y:-26 ,opacity: 1}}
        transition={{ease:"easeInOut"}}
        className="absolute bottom-3 h-1/6 w-1/6 left-3 pointer-events-auto">
          <Link to="/about"
          className=" h-full flex items-end">
            <motion.div className=" h-full ">
              <motion.button className=" bg-gray-500 p-3 opacity-60 h-full "/>
            </motion.div>
            <motion.div className="w-full">
              <motion.button className={` bg-gray-500 p-3 opacity-60 w-full`}/>
            </motion.div>
          </Link>
        </motion.button>
        Projects
  
      </motion.div>
  )
}

export default Projects
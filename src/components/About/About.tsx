import React, {useContext} from 'react';
import {DirectionContext} from '../DirectionContext'
import { motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import useWindowDimensions from '../window';


function About() {
  const {direction, setDirection} = useContext(DirectionContext);
  // console.log(direction);

  const animation = {
    initial : {x:direction.AboutStartX, y:direction.AboutStartY, opacity: 0} ,
      animate: {x:0, y:0, opacity: 1},
      exit:{x:direction.AboutStartX/2, y:direction.AboutStartY/2, opacity: 0, transition:{duration: 0.5   }},
      transition:{duration: 1.3  }
  };

  // const animateItem = {
  //   initial : {opacity: 0} ,
  //     animate: {opacity: 1},
  //     exit:{opacity: 0},
  //     transition:{duration: 1.6}
  // };
  const { height, width } = useWindowDimensions();
  return (
    
      <motion.div 
      initial = {animation.initial}
      animate= {animation.animate}
      exit={animation.exit} 
      transition={animation.transition}
      className="bg-green-500 w-full h-full overflow-hidden text-white pointer-events-none" >
        
        <motion.button 
        whileHover={{scale: 1.4, x:60 ,y:26 ,opacity: 1}}
        transition={{ease:"easeInOut"}}
        className="absolute top-3 h-1/6 w-1/6 left-3 pointer-events-auto">
          <Link to="/"
          onClick={() => {       
            setDirection({
            HomeStartX:direction.HomeStartX, HomeStartY:direction.HomeStartY, 
          ProjectsStartX:((width)), ProjectsStartY:0,
          AboutStartX:width/2, AboutStartY:(height)
          })}}
          className=" h-full w-full items-start flex">
            <motion.div className=" h-full ">
              <motion.button className=" bg-gray-500 p-3 opacity-60 h-full "/>
            </motion.div>
            <motion.div className="w-full">
              <motion.button className={` bg-gray-500 p-3 opacity-60 w-full`}/>
            </motion.div>
          </Link>
        </motion.button>

        <motion.button 
        whileHover={{scale: 1.4, x:-60 ,y:26 ,opacity: 1}}
        transition={{ease:"easeInOut"}}
        className="absolute top-3 h-1/6 w-1/6 right-3 pointer-events-auto">
          <Link to="/projects"
          onClick={() => {
            setDirection({
            HomeStartX:((width*-1)), HomeStartY:0, 
          ProjectsStartX:direction.ProjectsStartX, ProjectsStartY:direction.ProjectsStartY,
          AboutStartX:((width*-1)/2), AboutStartY:(height)
          })}}
          className=" h-full flex flex-row-reverse">
            <motion.div className=" h-full ">
              <motion.button className=" bg-gray-500 p-3 opacity-60 h-full "/>
            </motion.div>
            <motion.div className="w-full">
              <motion.button className={` bg-gray-500 p-3 opacity-60 w-full`}/>
            </motion.div>
          </Link>
        </motion.button>
        
  
      </motion.div>
  )
}

export default About
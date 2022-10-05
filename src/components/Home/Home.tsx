import React, {useContext} from 'react';
import {DirectionContext} from '../DirectionContext'
import { motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import useWindowDimensions from '../window';


function Home() {
  const {direction, setDirection}= useContext(DirectionContext);
  const {height, width} = useWindowDimensions();
  const animation = {
      initial : {x:direction.HomeStartX, y:direction.HomeStartY, opacity: 0},
      animate: {x:0, y:0, opacity: 1},
      exit:{x:direction.HomeStartX, y:direction.HomeStartY, opacity: 0, transition:{duration: 0.5}},
      transition:{duration: 1.5}
  };

  // const animateItem = {
  //   initial : {opacity: 0} ,
  //     animate: {opacity: 1},
  //     exit:{opacity: 0},
  //     transition:{duration: 1.6}
  // };
  // console.log(direction);
  
  return (
    <motion.div 
      initial = {animation.initial}
      animate= {animation.animate}
      exit={animation.exit} 
      transition={animation.transition}
      className="bg-yellow-500 w-full h-full overflow-hidden text-white pointer-events-none" >
      <Link to="/projects" className="absolute inset-y-0 z-60 right-3 h-full flex items-center flex-row-reverse"
        onClick={() => {
          setDirection({
          HomeStartX:((width*-1)), HomeStartY:0, 
          ProjectsStartX:direction.ProjectsStartX, ProjectsStartY:direction.ProjectsStartY,
          AboutStartX:((width*-1)/2), AboutStartY:(height)
      })}}
      >
        <motion.button 
        whileHover={{scale: 1.4, x:-6 ,opacity: 1}}
        transition={{ease:"easeInOut"}}
        className=" bg-gray-500 p-3 h-1/3 opacity-60 pointer-events-auto"/>
      </Link>
      <motion.button 
        whileHover={{scale: 1.4, x:-60 ,y:-26 ,opacity: 1}}
        transition={{ease:"easeInOut"}}
        className="absolute bottom-3 h-1/6 w-1/6 right-3 pointer-events-auto opacity-60">
        <Link to="/about"
          onClick={() => {
            setDirection({
            HomeStartX:(-width/2), HomeStartY:height*-2.8, 
            ProjectsStartX:(width/2), ProjectsStartY:height*-2.8,
            AboutStartX:direction.AboutStartX, AboutStartY:direction.AboutStartY
          })}}
        className=" h-full flex items-end flex-row-reverse">
          <motion.div className=" h-full ">
            <motion.button className=" bg-gray-500 p-3 h-full"/>
          </motion.div>
          <motion.div className="w-full">
            <motion.button className={` bg-gray-500 p-3 w-full`}/>
          </motion.div>
        </Link>
      </motion.button>
      Home

    </motion.div>
  )
}

export default Home
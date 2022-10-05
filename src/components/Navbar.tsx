import React, {useContext} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {DirectionContext} from './DirectionContext'
import useWindowDimensions from './/window'
import { motion} from 'framer-motion'
import {useState, useEffect  } from 'react' 

function Navbar() {
  const location =  useLocation();

  const selected_style = "p-2 hover:bg-gray-500 hover:text-black rounded-xl bg-gray-300 text-black";
  const basic_style = "p-2 hover:bg-gray-500 hover:text-black rounded-xl";
  const { height, width } = useWindowDimensions();
  const {direction, setDirection} = useContext(DirectionContext);
  const [home_style, setHomeStyle] = useState(selected_style  );
  const [project_style, setProjectStyle] = useState(basic_style);
  const [about_style, setAboutStyle] = useState(basic_style);
  
  useEffect(() => {
    if (location.pathname === "/") {
      setHomeStyle(selected_style);
      setProjectStyle(basic_style);
      setAboutStyle(basic_style);
      setDirection({
        HomeStartX:direction.HomeStartX, HomeStartY:direction.HomeStartY, 
      ProjectsStartX:((width)), ProjectsStartY:0,
      AboutStartX:width/2, AboutStartY:(height)
      })
    } else if (location.pathname === "/projects") {
      setDirection({
        HomeStartX:((width*-1)), HomeStartY:0, 
      ProjectsStartX:direction.ProjectsStartX, ProjectsStartY:direction.ProjectsStartY,
      AboutStartX:((width*-1)/2), AboutStartY:(height)
      })
      setHomeStyle(basic_style);
      setProjectStyle(selected_style);
      setAboutStyle(basic_style);
    } else if (location.pathname === "/about") {
      setDirection({
        HomeStartX:(-width/2), HomeStartY:height*-2.8, 
      ProjectsStartX:(width/2), ProjectsStartY:height*-2.8,
      AboutStartX:direction.AboutStartX, AboutStartY:direction.AboutStartY
      })
      setHomeStyle(basic_style);
      setProjectStyle(basic_style);
      setAboutStyle(selected_style);
    }
  }, [location.pathname]);

  return (
    <div className="absolute top-0 left-0 right-0  flex flex-col justify-items-center items-center bg-inherit pt-1">
      <div className="flex flex-col bg-gray-700 bg-opacity-50 justify-items-center items-center rounded-full p-3">
      <div className="flex justify-between">
        <motion.div 
        className={home_style}
        key="direction1"
        >
          <Link to="/"
          onClick={() => {       
            setDirection({
            HomeStartX:direction.HomeStartX, HomeStartY:direction.HomeStartY, 
          ProjectsStartX:((width)), ProjectsStartY:0,
          AboutStartX:width/2, AboutStartY:(height)
          })}}>
            Home
          </Link>
        </motion.div>
        <motion.div 
        className={project_style}
        key="direction2"
        >
          <Link to="/projects"
          onClick={() => {
            setDirection({
            HomeStartX:((width*-1)), HomeStartY:0, 
          ProjectsStartX:direction.ProjectsStartX, ProjectsStartY:direction.ProjectsStartY,
          AboutStartX:((width*-1)/2), AboutStartY:(height)
          })}}>
            Projects
          </Link>
        </motion.div>
      </div>
      <motion.div 
      className={about_style}
      key="direction3"
      >
        <Link to="/about"
        onClick={() => {
          setDirection({
          HomeStartX:(-width/2), HomeStartY:height*-2.8, 
        ProjectsStartX:(width/2), ProjectsStartY:height*-2.8,
        AboutStartX:direction.AboutStartX, AboutStartY:direction.AboutStartY
        })}}>
          About
        </Link>
        </motion.div>
      </div>
      </div>

  )
}

export default Navbar
import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {DirectionContext} from './DirectionContext'
import useWindowDimensions from './/window'

function Navbar() {
  const { height, width } = useWindowDimensions();
  const {direction, setDirection} = useContext(DirectionContext);
  return (
    <div className="flex flex-col justify-items-center items-center bg-inherit position-absolute pt-1">
      <div className="flex flex-col bg-gray-700 bg-opacity-50 justify-items-center items-center rounded-full p-3">
      <div>
        <Link to="/" className="p-2   hover:bg-gray-300 hover:text-black rounded-xl"
        onClick={() => setDirection({
          HomeStartX:direction.HomeStartX, HomeStartY:direction.HomeStartY, 
        ProjectsStartX:((width)+100), ProjectsStartY:0,
        AboutStartX:0, AboutStartY:(height+100)
        })}>
          Home
        </Link>
        <Link to="/projects" className="p-2 hover:bg-gray-300 hover:text-black rounded-xl"
        onClick={() => setDirection({
          HomeStartX:((width*-1)-100), HomeStartY:0, 
        ProjectsStartX:direction.ProjectsStartX, ProjectsStartY:direction.ProjectsStartY,
        AboutStartX:((width*-1)-100), AboutStartY:(height+100)
        })}>
          Projects
        </Link>
      </div>
        <Link to="/about" className="p-2  hover:bg-gray-300 hover:text-black rounded-xl"
        onClick={() => setDirection({
          HomeStartX:(0), HomeStartY:height*-1-100, 
        ProjectsStartX:(width)+100, ProjectsStartY:height*-1-100,
        AboutStartX:direction.AboutStartX, AboutStartY:direction.AboutStartY
        })}>
          About
        </Link>
      </div>
      </div>
  )
}

export default Navbar
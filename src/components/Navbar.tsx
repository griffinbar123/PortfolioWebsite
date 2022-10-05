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
        ProjectsStartX:((width)), ProjectsStartY:0,
        AboutStartX:width/2, AboutStartY:(height)
        })}>
          Home
        </Link>
        <Link to="/projects" className="p-2 hover:bg-gray-300 hover:text-black rounded-xl"
        onClick={() => setDirection({
          HomeStartX:((width*-1)), HomeStartY:0, 
        ProjectsStartX:direction.ProjectsStartX, ProjectsStartY:direction.ProjectsStartY,
        AboutStartX:((width*-1)/2), AboutStartY:(height)
        })}>
          Projects
        </Link>
      </div>
        <Link to="/about" className="p-2  hover:bg-gray-300 hover:text-black rounded-xl"
        onClick={() => setDirection({
          HomeStartX:(-width/2), HomeStartY:height*-2.8, 
        ProjectsStartX:(width/2), ProjectsStartY:height*-2.8,
        AboutStartX:direction.AboutStartX, AboutStartY:direction.AboutStartY
        })}>
          About
        </Link>
      </div>
      </div>
  )
}

export default Navbar
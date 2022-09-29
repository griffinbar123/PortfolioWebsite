import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './components/Projects/Projects';
import Home from './components/Home/Home';
import {DirectionContextProvider} from './components/DirectionContext'
import Navbar from './components/Navbar'
import About from './components/About/About'


function App() {
  return (
    <div className="overflow-hidden h-screen w-full bg-black text-white">
      <DirectionContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </DirectionContextProvider>
    </div>
  );
}

export default App;



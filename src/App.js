import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Blog from './blog';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='blog' element={<Blog />} />
    </Routes>
  );
};
export default App;

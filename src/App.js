import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import Blog from './components/blog';
import Article1 from './components/article1';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='blog' element={<Blog />} />
      <Route path='article1' element={<Article1 />} />
    </Routes>
  );
};
export default App;

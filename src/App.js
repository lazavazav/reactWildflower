import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import Blog from './components/blog';
import Article1 from './components/article1';
import Success from './components/success';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='blog' element={<Blog />} />
      <Route path='article1' element={<Article1 />} />
      <Route path='success' element={<Success />} />
    </Routes>
  );
};
export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import Blog from './components/blog';
import Article1 from './components/article1';
import Article2 from './components/article2';
import Article3 from './components/article3';
import Success from './components/success';
import Resources from './components/resources';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='blog' element={<Blog />} />
      <Route path='article1' element={<Article1 />} />
      <Route path='article2' element={<Article2 />} />
      <Route path='article3' element={<Article3 />} />
      <Route path='success' element={<Success />} />
      <Route path='resources' element={<Resources />} />
    </Routes>
  );
};
export default App;

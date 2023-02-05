import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import Blog from './components/blog';
import ArticleKickOff from './components/articleKickOff';
import ArticleGrant from './components/articleGrant';
import ArticleSeeds from './components/articleSeeds';
import Success from './components/success';
import Resources from './components/resources';
import ArticleBluebirds from './components/articleblueBirds';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='blog' element={<Blog />} />
      <Route path='articleKickoff' element={<ArticleKickOff />} />
      <Route path='articleGrant' element={<ArticleGrant />} />
      <Route path='articleSeeds' element={<ArticleSeeds />} />
      <Route path='articleBluebirds' element={<ArticleBluebirds />} />
      <Route path='success' element={<Success />} />
      <Route path='resources' element={<Resources />} />
    </Routes>
  );
};
export default App;

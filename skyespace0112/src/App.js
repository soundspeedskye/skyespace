import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category" element={<Home />} />
      
    </Routes>
  );
};

export default App;

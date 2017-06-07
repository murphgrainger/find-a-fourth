import React, { Component } from 'react';

import Header from './components/common/Header.js'
import Home from './components/home/HomePage.js'


const App = () => {
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
};

export default App;

import React from 'react';

import {
  BrowserRouter as Router,
} from "react-router-dom";


import { Header } from './components/Header';
import { Footer } from './components/Footer';
import  AnimationRoute  from './components/AnimationsRoutes/AnimationRoute'


function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
          <AnimationRoute />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

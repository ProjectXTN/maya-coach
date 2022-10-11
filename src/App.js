import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { Etudiant } from './pages/Etudiant';
import { Contacte } from './pages/Contacte';


function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/je-suis-etudiant" element={<Etudiant />} />
            <Route path="/contacte" element={<Contacte />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

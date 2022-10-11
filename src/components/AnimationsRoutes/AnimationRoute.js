import React from 'react';

import {
    Routes,
    Route,
    useLocation,
  } from "react-router-dom";

import { AnimatePresence } from 'framer-motion'

import {Home } from '../../pages/Home';
import { Etudiant } from '../../pages/Etudiant';
import { Contacte } from '../../pages/Contacte';

const AnimationRoute = () => {

    const location = useLocation();

    return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/je-suis-etudiant" element={<Etudiant />} />
            <Route path="/contacte" element={<Contacte />} />
        </Routes>
    </AnimatePresence>
    );
}


export default AnimationRoute  ; 
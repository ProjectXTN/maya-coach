import React from 'react';

import {
    Routes,
    Route,
    useLocation,
  } from "react-router-dom";

import { AnimatePresence } from 'framer-motion'

import { Home } from '../../pages/Home';
import { Etudiant } from '../../pages/Etudiant';
import { Contacte } from '../../pages/Contacte';
import { Reconvertion } from '../../pages/Reconvertion';
import { Salarie } from '../../pages/Salarie';
import { Renseigner } from '../../pages/Renseigner';
import { Orienter } from '../../pages/Orienter'

const AnimationRoute = () => {

    const location = useLocation();

    return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/maya-coach" element={<Home />} />
            <Route path="/je-suis-etudiant" element={<Etudiant />} />
            <Route path="/contacte" element={<Contacte />} />
            <Route path="/reconvertion" element={<Reconvertion />} />
            <Route path="/je-suis-en-poste" element={<Salarie />} />
            <Route path="/se-renseigner" element={<Renseigner />} />
            <Route path="/orienter" element={<Orienter />} />
        </Routes>
    </AnimatePresence>
    );
}


export default AnimationRoute  ; 
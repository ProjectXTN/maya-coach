/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { Button } from '../../components/Button';

import imageEtudiant from '../../assets/images/reconversion-1.jpg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { Container, Row, Container2, TextOrientation } from './styles'

const Reconvertir = () => {

    const navigate = useNavigate();

    const handleClickToContact = () => {
        navigate('/contacte');
    }

  return (
    <>    
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{ x: window.innerWidth, transition: {duration: 0.4}}}
    >
        <Container>
            <Row>
                <h1>
                Se reconvertir
                </h1>
            </Row>
            <Row>
                <p>           
                Vous avez déjà eu une vie professionnelle et souhaitez changer de domaine ou de métier, vous savez ou ne savez pas encore vers quoi vous diriger
                </p>
            </Row>
            <Row>
                 <img src={ imageEtudiant }></img>
            </Row>
        </Container>

        <Container2>
            <Row>
                <h2>
                JE VOUS ACCOMPAGNE POUR
                </h2>
            </Row>
            <TextOrientation>
                        <p>
                            <ul>
                                <li>
                                Faire le bilan de vos expériences précédentes
                                </li>
                                <li>
                                Reconnaitre vos ressources et trouver vos atouts
                                </li>
                                <li>
                                Analyser les obstacles pour mieux les contourner
                                </li>
                                <li>
                                Identifier des options adaptées
                                </li>
                                <li>
                                Définir votre projet professionnel
                                </li>
                                <li>
                                Mettre en place un plan d’action
                                </li>
                            </ul>
                        </p>
            </TextOrientation>
        </Container2>

        <div className='text-center mt-5'>
            <Button title="Je contacte Maya" variant='secundary' onClick={handleClickToContact}/>
        </div>
    </motion.div>
    </>
  )
}


export { Reconvertir };
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { Button } from '../../components/Button';

import imageEtudiant from '../../assets/images/etudiant-img.jpg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { Container, Row, Container2, TextOrientation } from './styles'

const Former = () => {

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
                Se former
                </h1>
            </Row>
            <Row>
                <p>           
                Vous souhaitez vous former pour accéder à de nouvelles opportunités professionnelles et vous cherchez quelle formation vous pourriez suivre
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
                                Choisir une formation en adéquation avec votre projet professionnel
                                </li>
                                <li>
                                Sélectionner le parcours menant à l’emploi
                                </li>
                                <li>
                                Faire le tri parmi tous les catalogues de formations proposées
                                </li>
                                <li>
                                Identifier le format qui vous convient (niveau, modalités, durée,)
                                </li>
                                <li>
                                Réussir votre formation
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


export { Former };
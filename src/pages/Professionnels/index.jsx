/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { Button } from '../../components/Button';


import imageEtudiant from '../../assets/images/image-paralax-3.jpg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { Container, Row, TextOrientation, Container2 } from './styles';

const Professionnels = () => {

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
                Faire des choix professionnels
                </h1>
            </Row>
            <Row>
                <p>           
                Vous êtes en poste et vous vous demandez si c’est le bon moment pour chercher une entreprise ou accepter un nouveau poste
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
                                Faire le point sur votre situation ou bilan de carrière
                                </li>
                                <li>
                                Analyser votre questionnement
                                </li>
                                <li>
                                Comprendre votre envie de changement
                                </li>
                                <li>
                                Étudier de nouvelles propositions éventuelles
                                </li>
                                <li>
                                Choisir la bonne piste
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

export { Professionnels };
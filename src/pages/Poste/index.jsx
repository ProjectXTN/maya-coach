/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { Button } from '../../components/Button';

import imageEtudiant from '../../assets/images/image-paralax-2.jpg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { Container, Row, Container2, TextOrientation } from './styles'

const Poste = () => {

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
                Prendre un nouveau poste
                </h1>
            </Row>
            <Row>
                <p>           
                On vient de vous confier un nouveau poste et vous souhaitez vous préparer à ce rôle du mieux possible pour être à la hauteur de votre nouvelle mission.
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
                                Entrer dans le rôle
                                </li>
                                <li>
                                Adopter la bonne posture
                                </li>
                                <li>
                                Prendre du recul et comprendre ce qui est attendu
                                </li>
                                <li>
                                Avancer avec méthode
                                </li>
                                <li>
                                Vous donner vos propres premiers objectifs
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


export { Poste };
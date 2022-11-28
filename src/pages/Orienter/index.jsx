import React from 'react';

import { Button } from '../../components/Button'


import imageEtudiant from '../../assets/images/etudiant-2.jpg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { Container, BgRow, Row, TextOrientation, Container2 } from './styles';

const Orienter = () => {

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
                S’orienter
                </h1>
            </Row>
            <Row>
                <p>           
                Vous sortez du lycée ou avez démarré des études supérieures et vous devez choisir une orientation pour aller vers un métier.
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
                                Étudier vos hésitations
                                </li>
                                <li>
                                Vous poser les bonnes questions avant de faire vos choix
                                </li>
                                <li>
                                Vous aider à faire l’inventaire de vos centres d’intérêt
                                </li>
                                <li>
                                Faire ressortir les traits essentiels de votre personnalité
                                </li>
                                <li>
                                Identifier vos ressources et vous apprendre à les utiliser
                                </li>
                                <li>
                                Réfléchir à vos valeurs et vous en servir de guide
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

export { Orienter };
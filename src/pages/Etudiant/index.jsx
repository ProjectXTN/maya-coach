/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { Button } from '../../components/Button';

import imageEtudiant from '../../assets/images/etudiant-img.jpg';
import imageEtudiant2 from '../../assets/images/etudiant-2.jpg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Container, Row, TextOrientation, BgRow } from './styles';

const Etudiant = () => {

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
                JE SUIS ÉTUDIANT
                </h1>
            </Row>
            <Row>
                <p>           
                    Vous cherchez <strong>VOTRE ORIENTATION</strong>, vous vous demandez <strong>VERS QUOI VOUS DIRIGER</strong> (ou vous rediriger après une première tentative), vous êtes plutôt scientifique, plutôt littéraire, plutôt artiste créatif ? Au cours de vos études, vous devez choisir <strong>UNE ORIENTATION APPROPRIÉE</strong>, vous engager dans un cursus, vous adapter au système, aux méthodes et au rythme, répondre à la demande, faire des choix et vous y tenir, vous organiser, gérer votre stress, vous adapter, présenter vos travaux, vous préparer seul à vos examens, argumenter, rechercher des stages, envisager votre intégration professionnelle… <strong>RÉUSSIR VOS ÉTUDES EST VOTRE OBJECTIF</strong>, les enjeux sont importants, et parfois vous ne savez plus comment vous y prendre.Comment mener le tout de front, être performant et serein, concilier votre vie étudiante et votre vie sociale?
                </p>
            </Row>
            <Row>
                <img src={ imageEtudiant }></img>
            </Row>
        </Container>

        <Container>
            <TextOrientation>
            <p>A l’aide d’un <strong>BILAN D’ORIENTATION</strong>, élaborez un panel d’options, trouvez les pistes d’orientation adaptées et actionnez les <strong>BONS LEVIERS</strong>. Je vous aide <strong>À VOUS ORIENTER</strong> dans votre vie étudiante, <strong>À GARDER UN BON NIVEAU DE MOTIVATION ET À AMÉLIORER VOS PERFORMANCES</strong>.</p>

            </TextOrientation>

            <BgRow> 
                <img src={ imageEtudiant2 }></img>
            </BgRow>
        </Container>

        <div className='text-center'>
            <Button title="Je contacte Maya" variant='secundary' onClick={handleClickToContact}/>
        </div>
    </motion.div>
    </>
  )
}


export { Etudiant };
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { Button } from '../../components/Button';

import imageEtudiant from '../../assets/images/reconversion-1.jpg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Container, Row, TextOrientation} from './styles';

const Reconvertion = () => {

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
                JE SUIS EN RECONVERSION PROFESSIONNELLE
                </h1>
            </Row>
            <Row>
                <p>           
                <strong>POUR DIFFÉRENTES RAISONS</strong> (peu d’opportunités professionnelles, lassitude, burn out, déménagement, licenciement, ou simplement envie d’autre chose….) vous avez décidé de <strong>CHANGER DE MÉTIER</strong>. Vous <strong>NE SAVEZ PAS COMMENT VOUS Y PRENDRE</strong>, vers quoi vous diriger, sur <strong>QUELLES RESSOURCES</strong> vous appuyer, <strong>QUELLE FORMATION</strong> serait nécessaire, combien de temps y consacrer. Vous vous demandez quelles sont les conditions d’employabilité après une formation de 2eme partie de carrière…. <strong>VOUS CRAIGNEZ DE VOUS TROMPER</strong>?
                </p>
            </Row>
            <Row>
                <img src={ imageEtudiant }></img>
            </Row>
        </Container>

        <Container>
            <TextOrientation>
            <p>A l’aide d’un <strong>BILAN DE COMPÉTENCE</strong>, <strong>D’UN BILAN DE VALIDATION DE PROJET</strong>, ou encore <strong>DE TESTS PSYCHOMÉTRIQUES RECONNUS</strong>, élaborez un panel d’options, trouvez les pistes de reconversion adaptées à votre profil et actionnez <strong>LES BONS LEVIERS</strong>. <strong>LES SÉANCES DE COACHING EN RECONVERSION PROFESSIONNELLE, VONT BIEN AU-DELÀ D’UN BILAN DE COMPÉTENCES, C’EST UNE COMBINAISON DE DÉVELOPPEMENT PERSONNEL ET DE DÉVELOPPEMENT PROFESSIONNEL OÙ VOTRE PERSONNALITÉ ET VOS ENVIES SONT AU CŒUR DU SUJET</strong>.</p>

            </TextOrientation>
        </Container>

        <div className='text-center'>
            <Button title="Je contacte Maya" variant='secundary' onClick={handleClickToContact}/>
        </div>
    </motion.div>
    </>
  )
}


export { Reconvertion };
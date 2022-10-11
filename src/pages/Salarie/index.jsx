import React from 'react';

import { Button } from '../../components/Button';

import imageEtudiant from '../../assets/images/salarie-1.jpg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Container, Row, TextOrientation} from './styles';

const Salarie = () => {

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
                JE SUIS EN POSTE
                </h1>
            </Row>
            <Row>
                <p>           
                <strong>DANS LA VIE PROFESSIONNELLE</strong>, certains évènements, qu’ils soient choisis ou subis, impliquent le passage par une PHASE DE TRANSITION qui pose question et souvent difficile à appréhender.
                Votre entreprise va vite, <strong>LES RÉORGANISATIONS SONT DE PLUS EN PLUS COURANTES</strong> et vous devez suivre le mouvement, vous <strong>ADAPTER AU CHANGEMENT</strong>, relever de nouveaux défis, <strong>PRENDRE UN NOUVEAU POSTE</strong>….
                Vous êtes promu, vous changez de filière, devez mettre en place de nouvelles méthodes de travail, de nouveaux outils…Vous devez recruter, évaluer, animer des réunions, vous affirmer, gérer des conflits….
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


export { Salarie };
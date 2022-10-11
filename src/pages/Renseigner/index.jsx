import React from 'react';

import { Button } from '../../components/Button';

import imageEtudiant from '../../assets/images/renseigner-1.jpg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Container, Row, TextOrientation} from './styles';

const Renseigner = () => {

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
                JE SUIS PERDU(E)
                </h1>
            </Row>
            <Row>
                <p>           
                Dans la <strong>VIE PERSONNELLE, PROFESSIONNELLE, SOCIALE OU FAMILIALE</strong>, certains évènements, déstabilisent notre cadre habituel et bouleversent notre vie. Les repères sur lesquels nous nous appuyions pour évoluer sont en pleine mouvance et il faut <strong>S’ADAPTER À UN NOUVEAU CONTEXTE</strong> pour se construire de nouveaux repères.
                Ces <strong>TRANSITIONS RAREMENT ANTICIPÉES</strong>, sont souvent <strong>GÉNÉRATRICES DE DOUTE</strong>, de prudence, de <strong>PERTE DE CONFIANCE</strong> car elles nous conduisent vers l’inconnu.
                Mener à bien ces transitions est indispensable pour réussir de nouveaux projets et <strong>PRENDRE UN NOUVEAU DÉPART</strong>.
                </p>
            </Row>
            <Row>
                <img src={ imageEtudiant }></img>
            </Row>
        </Container>

        <Container>
            <TextOrientation>
            <p> <strong>FAITES LE POINT, FAITES LE TRI</strong>, travaillez votre <strong>ESTIME DE SOI</strong>, et <strong>RETROUVEZ CONFIANCE</strong> et <strong>SÉRÉNITÉ</strong> en empruntant de nouvelles directions. Je vous aide à agir <strong>DANS VOTRE VIE PERSONNELLE, FAMILIALE, PROFESSIONNELLE OU AMOUREUSE</strong> dans votre vie personnelle, familiale, professionnelle ou amoureuse. Je vous accompagne dans la mise en œuvre d’actions efficaces pour <strong>RÉSOUDRE VOS PROBLÈMES ET RÉPONDRE AUX QUESTIONS QUE VOUS VOUS POSEZ</strong>.</p>

            </TextOrientation>
        </Container>

        <div className='text-center'>
            <Button title="Je contacte Maya" variant='secundary' onClick={handleClickToContact}/>
        </div>
    </motion.div>
    </>
  )
}


export { Renseigner };
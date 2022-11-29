/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { Button } from '../../components/Button';

import imageEtudiant from '../../assets/images/image-paralax-2.jpg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { Container, Row, Container2, TextOrientation } from './styles'

const Reorienter = () => {

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
                Se réorienter
                </h1>
            </Row>
            <Row>
                <p>           
                Vous avez commencé un cursus et après un premier parcours, vous voulez changer d’orientation mais craigniez de vous tromper à nouveau
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
                                Faire un état des lieux de votre situation et de vos acquis
                                </li>
                                <li>
                                Analyser et comprendre les raisons de ce besoin
                                </li>
                                <li>
                                Faire face à vos inquiétudes
                                </li>
                                <li>
                                Rebondir vers autre chose sans perdre le bénéfice de vos acquis
                                </li>
                                <li>
                                Trouver la bonne direction
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


export { Reorienter };
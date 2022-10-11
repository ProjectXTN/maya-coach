import React from 'react';

import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { motion } from 'framer-motion';

import './style.css';

import { Container, Row } from './styles';

const Contacte = () => {
  return (
    <>
    <motion.div
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{ x: window.innerWidth, transition: {duration: 0.1}}}
    >
        <div className='bgImg'>
            <Container>
                <Row>
                    <h1>
                        Contacte Maya
                    </h1>
                </Row>

                <Row>
                    <div className='d-flex justify-content-center'>
                        <h2><FaPhoneSquareAlt /> 06 85 02 08 02</h2>
                    </div>

                    <div className='d-flex'>
                        <h2><MdMail /> maya.teamtom@gmail.com</h2>
                    </div>
                </Row>
            </Container>
        </div>
    </motion.div>
    </>
  );
}


export { Contacte };
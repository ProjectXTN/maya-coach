import React from 'react';

import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

import './style.css';

import { Container, Row } from './styles';

const Contacte = () => {
  return (
    <>
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
    </>
  );
}


export { Contacte };
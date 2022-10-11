/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { MdFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";


import { ContainerFooter, Row, ImageLogo, Icons } from './styles';
import logo from '../../assets/images/logo-white-05.png';

const Footer = () => {
  return (
    <>
    <ContainerFooter>        
        <Icons>
            <h4 className='text-start'>Coordonnées</h4>
            <a href='#'><MdFacebook/></a>
            <a href='#'><IoLogoInstagram /></a>
            <a href='#'><BsTwitter /></a>
            <p className='text-start mt-1'>Contact</p>
            <p className='text-start'>Tel : 06 85 02 08 02</p>
            <p className='text-start'>maya.teamtom@gmail.com</p>
        </Icons>
      
        <Row>
        <a href="#"><ImageLogo src={logo} /></a>
        <p> 2022 All Rights Reserved</p>
        <a href="#"><p>Mentions légales</p></a>
        <a href="#"><p>Conditions génerales d'utilisation</p></a>
        </Row>
        <Row>
            <div className='d-flex flex-column mb-3'>
            <h4> Infos </h4>
            <a href="#"> &#62; JE SUIS ÉTUDIANT</a>
            <a href="#"> &#62; RECONVERSION</a>
            <a href="#"> &#62; SALARIÉ</a>
            <a href="#"> &#62; SE RENSEIGNER</a>
            <a href="#"> &#62; CONTACT</a>
            </div>

        </Row> 
    </ContainerFooter>
    </>
  )
}


export { Footer };
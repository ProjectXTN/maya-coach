/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { MdFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";


import { ContainerFooter, Row, ImageLogo, Icons, LinksA } from './styles';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logo-white-05.png';

const Footer = () => {

  const navigate = useNavigate();

  const handleClickToHome = () => {
      navigate('/maya-coach');
  }

  const handleClickToPageEtudiant = () => {
      navigate('/je-suis-etudiant');
  }

  const handleClickToContact = () => {
      navigate('/contacte');
  }

  const handleClickToReconvertion = () => {
    navigate('/reconvertion');
  }

  const handleClickToSalarie = () => {
    navigate('/je-suis-en-poste');
  }

  const handleClickToRenseigner = () => {
    navigate('/se-renseigner');
  }

  return (
    <>
    <ContainerFooter>        
        <Icons>
            <h4>Coordonnées</h4>
            <a href='#'><MdFacebook/></a>
            <a href='#'><IoLogoInstagram /></a>
            <a href='#'><BsTwitter /></a>
            <p className=' mt-1' >Contact</p>
            <p ><FaPhoneSquareAlt /> Tel : 06 85 02 08 02</p>
            <p ><MdMail /> maya.teamtom@gmail.com</p>
        </Icons>
      
        <Row>
        <LinksA onClick={handleClickToHome}><ImageLogo src={logo} /></LinksA>
        <p> 2022 All Rights Reserved</p>
        <LinksA href="#"><p>Mentions légales</p></LinksA>
        <LinksA href="#"><p>Conditions génerales d'utilisation</p></LinksA>
        </Row>
        <Row>
            <div className='d-flex flex-column mb-3'>
            <h4> Infos </h4>
            <LinksA onClick={handleClickToPageEtudiant}> &#62; JE SUIS ÉTUDIANT</LinksA>
            <LinksA onClick={handleClickToReconvertion}> &#62; RECONVERSION</LinksA>
            <LinksA onClick={handleClickToSalarie}> &#62; SALARIÉ</LinksA>
            <LinksA onClick={handleClickToRenseigner}> &#62; SE RENSEIGNER</LinksA>
            <LinksA onClick={handleClickToContact}> &#62; CONTACT</LinksA>
            </div>

        </Row> 
    </ContainerFooter>
    </>
  )
}


export { Footer };
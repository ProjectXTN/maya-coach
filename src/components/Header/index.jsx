/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import logo from '../../assets/images/logo-white-05.png';

import { LogoImage, ContainerGlobal, LinksA, LinksOffCanvas } from './styles';

import './style.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {

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

      const handleClickToOrienter = () => {
        navigate('/orienter');
      }


  return (
    <ContainerGlobal>
        <nav className="navbar">
        <div className="container-fluid d-flex justify-content-evenly respo-nav">
            <LinksA  onClick={handleClickToHome}><LogoImage src={ logo }/></LinksA>
            <LinksA  onClick={handleClickToPageEtudiant}>JE SUIS ÉTUDIANT</LinksA>
            <LinksA  onClick={handleClickToReconvertion}>RECONVERSION</LinksA>
            <LinksA  onClick={handleClickToSalarie}>SALARIÉ</LinksA>
            <LinksA  onClick={handleClickToRenseigner}>SE RENSEIGNER</LinksA>
            <LinksA  onClick={handleClickToContact}>CONTACT</LinksA>


            <button className="navbar-toggler border border-3 border-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
               
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">MAYA COACH</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
           
                <div className="offcanvas-body">
                
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <LinksA  href="#"><LogoImage src={ logo }/></LinksA>
                    </li>
                    <li className="nav-item">
                        <LinksA  className="nav-link" onClick={handleClickToOrienter}>S'orienter</LinksA>
                    </li>
                    <li className="nav-item">
                        <LinksOffCanvas className="nav-link" href="#">Sé reorienter</LinksOffCanvas>
                    </li>
                    <li className="nav-item">
                        <LinksOffCanvas className="nav-link" href="#">Faire des choix professionnels</LinksOffCanvas>
                    </li>
                    <li className="nav-item">
                        <LinksOffCanvas className="nav-link" href="#">Se reconvertir/ Trouver sa voie</LinksOffCanvas>
                    </li>
                    <li className="nav-item">
                        <LinksOffCanvas className="nav-link" href="#">Prend un nouveau poste</LinksOffCanvas>
                    </li>
                    <li className="nav-item">
                        <LinksOffCanvas className="nav-link" href="#">Se former</LinksOffCanvas>
                    </li>
                    </ul>
                </div>
            </div> 
        </div>
        </nav>
    </ContainerGlobal>
  )
}

export { Header };

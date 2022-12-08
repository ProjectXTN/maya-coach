/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Typewriter from 'typewriter-effect';


import { Button } from '../../components/Button';
import { motion } from 'framer-motion';


import  maya  from '../../assets/images/Portrait-Maya-2.png';
import reviewImage from '../../assets/images/temoignage-anna-1.jpg';


import { Container, TextDescription, ContainerWrapper, ImageProfile, ContainerAvis, TextAvis, BtnVoir, TextAvis2 } from './styles';
import './ManualParallax.css';

const Home = () => {
  return (
    <>
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{ x: window.innerWidth, transition: {duration: 0.4}}}
    >
        <div className='container-wrapper'>
          <div className='bgimg-1'>
          <Container>
                  <div className='textType'>
                    <Typewriter 
                    onInit={(typewriter) => {
                      typewriter.typeString(`"La persévérance est la voie du succès" <br />
                      – Charlie Chaplin.`)
                      .start();
                    }}
                    />
                  </div>
                <div>

                </div>
            </Container>
          </div>
        </div>


      <ContainerWrapper>
        <div className='text-center'>
          <ImageProfile src={ maya } />
        </div>
          <TextDescription>
            <h2>QUI SUIS-JE ?</h2>
            <h3><strong>Maya BEN</strong></h3>
              Après de longues années en entreprise à des postes de direction, Conseil en Ressources Humaines, <strong> COACHE CERTIFIÉE EN DÉVELOPPEMENT PROFESSIONNEL</strong>, j’interviens dans l’accompagnement des carrières, des reconversions, des recherches d’emploi, des formations, sur tous les sujets permettant de s’orienter et de réussir ambitions et projets professionnels. Praticienne certifiée en <strong>BILAN DE COMPÉTENCES</strong> ( éligible au CPF ), j’utilise les outils de <strong>DÉVELOPPEMENT PERSONNEL</strong>, les <strong>TESTS PSYCHOMÉTRIQUES </strong>(certifiée MBTI, Central Test), et diverses <strong>MÉTHODOLOGIES DE COACHING PROFESSIONNEL</strong>. J’accompagne tout type de profil, des <strong>ÉTUDIANTS EN QUÊTE D’ORIENTATION</strong>, des <strong>SALARIÉS SOUHAITANT FAIRE LE POINT SUR LEUR CARRIÈRE</strong>, des <strong>ADULTES EN RÉFLEXION</strong> pour une <strong>RECONVERSION PROFESSIONNELLE </strong> ou en cours de <strong>FORMATION</strong>, des personnes en <strong>RECHERCHE D’EMPLOI</strong>.
        </TextDescription>
      </ContainerWrapper>
          <div className='bgimg-2'>
            <div className='TitleBg2'>UN ACCOMPAGNEMENT ADAPTÉ À VOTRE SITUATION</div>
            
              <BtnVoir className="navbar-toggler border border-3 border-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon">VOIR PLUS</span>
              </BtnVoir>
            
          </div>
      <ContainerAvis>


          <div>
            <h2>CE QUE VOUS EN PENSEZ </h2> 
          </div>
        
        <TextAvis>
          <img  src={ reviewImage } />

          <p>«Le coaching avec Maya a été pour moi une vraie transformation de vie. D’une part, j’ai appris à me connaitre, à focaliser sur ce que je souhaitais réellement, et à reconnaitre mes passions et désirs. Ce qui est formidable c’est l’effet du coaching à long terme, c’est-à-dire acquérir un véritable apprentissage et une méthode pour clarifier ses idées, savoir ce que l’on veut et comment atteindre ses objectifs.
          Je remercie Maya de tout cœur pour avoir été mon guide, mon coach, alors que je m’éloignais de plus en plus de ma personne et de ce que je voulais. En effet, j’arrivais des USA et je me suis retrouvée avec un travail qui me déplaisait et m’ennuyait énormément. J’avais perdu toute direction. Le coaching a été une expérience exceptionnelle pour moi à ce moment. Maya m’a aidé à me concentrer sur ce que je désirais vraiment atteindre, me permettant d’être plus positive et de croire en moi.
          J’apprécie son écoute réelle et sa façon de m’aider à trouver les solutions. Grace à son aide j’ai pu ouvrir ma société, une agence de professeurs d’anglais. Cela a non seulement changé ma vie personnelle et financière mais également celle de mes enfants. Je n’aurai pas pu atteindre cette stabilité sans son aide.
          Un merci grandiose à une femme magnifique remplie de joie de vivre.» Anna.</p>
        </TextAvis >

        <TextAvis2>
          <p>
          « Suite a un burn out une amie m’a conseillé de contacter Maya, j’ai donc pris contact avec elle en décembre 2016 et nous avons eu des séances de travail jusqu’en avril 2018. Les séances m’ont permise de retrouver un équilibre psychique et de prioriser mes besoins personnels tout en restant professionnelle. Pendant nos séances j’ai repris le travail et ai eu une proposition d’évolution de poste en interne, Maya m’a soutenue et accompagnée dans cette étape. Tout au long de nos séances je me sentais écoutée, comprise, libre de m’exprimer sans jugement, soutenue. Après ce travail de coaching j’ai pu enfin oser quitter mon emploi pour envisager un nouveau projet de vie. Les hasards de la vie m’ont conduite à partir aux Etats-Unis, où je m’y suis mariée et je vais bientôt donner naissance à mon premier enfant. Tout ce cheminement n’a pas toujours été facile mais grâce à Maya j’ai réussi à prendre des décisions « égoïstes » de vie tant professionnelles que personnelles. Il me reste encore des efforts à fournir mais je devenue une vraie battante. Je ne peux que recommander de faire appel à Maya. » Tatiana
          </p>
        </TextAvis2>
      </ContainerAvis>
    </motion.div>
    </>
  );
}

export { Home }
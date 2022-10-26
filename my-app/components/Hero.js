import React from 'react';
import ParticlesBackground from './Particles';

import styles from './../styles/Hero.module.css'

// import ParticlesBackground from './Particles';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; 
// import ScrollAnimation from './ScrollAnimation';

import Image from 'next/image'
import mypic from './images/logo.png'


const Hero = () => {

  return (
  <div>


    {/* Image does not load */}
      {/* <img src={require('./images/logo.png')} alt="Blog hu"></img> */}
    {/* <ParticlesBackground /> */}

    <div className={styles.title}>
      {/* <ParticlesBackground /> */}
      <h1>Blog Hu,</h1>
      <h1 className={styles.about}>A Repertoire of my Learnings! Repertoire of my Learnings! Repertoire of my Learnings!</h1>
    </div>
  </div>
  )
}

export default Hero
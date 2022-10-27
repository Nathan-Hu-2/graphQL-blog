import React from 'react';
// import ParticlesBackground from './Particles';

import styles from './../styles/Hero.module.css'

// import ParticlesBackground from './Particles';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; 
// import ScrollAnimation from './ScrollAnimation';

import Image from 'next/image'
import heroImage from './images/heroImage.png'


const Hero = () => {

  return (
  <div className={styles.hero}>
    <div className={styles.landing}>
      <Image
        src={heroImage}
        alt=""
        width="350px"
        height="300px"
      />
    </div>

    <div className={styles.title}>
      <h1>Blog Hu,</h1>
      <h1 className={styles.about}>A Repertoire of my Learnings! Repertoire of my Learnings! Repertoire of my Learnings!</h1>
    </div>
  </div>
  )
}

export default Hero
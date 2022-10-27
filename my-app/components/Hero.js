import React from 'react';
// import ParticlesBackground from './Particles';

import styles from './../styles/Hero.module.css'

import Lottie from 'react-lottie';
import animationData from './images/heroLottie.json'


import Image from 'next/image'
import heroImage from './images/heroImage.png'


const Hero = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
  <div className={styles.hero}>
    <div className={styles.introCard}>
      <div>
        <h3 className={styles.schematicStyle}> &lt;html&gt; </h3>
        
      </div>
      <div className={styles.title}>
        <h1>A personal blogging platform for  </h1>
        <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;all things &#123;computer science&#125;</h1>
      </div>

      <h3 className={styles.schematicStyle}> &lt;html&gt; </h3>

      <div className={styles.lottie}>
        <Lottie 
        options={defaultOptions}
          height={500}
          width={500}
        />
      </div>

      {/* <h3 className={styles.schematicStyle}> &lt;author&gt; Nathan Hu &lt;author&gt;</h3> */}
      <h3 className={styles.schematicStyle}> &lt;author&gt; </h3>
      <h3 className={styles.schematicStyle}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nathan Hu</h3>
      <h3 className={styles.schematicStyle}> &lt;author&gt; </h3>
    </div>



  </div>
  )
}

export default Hero
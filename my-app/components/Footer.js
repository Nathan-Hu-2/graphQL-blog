import React from 'react';
import styles from './../styles/Footer.module.css'
import Image from 'next/image'
import reactIcon from './Images/reactIcon.png'
import hygraphIcon from './Images/hygraphIcon.png'
import nextjsIcon from './Images/nextjsIcon.png'


const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.text}>
        <h1>Built with JAMstack</h1>
      </div>
      <div className={styles.icons}>
        <Image
          src={reactIcon}
          alt=""
          width="40px"
          height="35px"
        />
        <Image
          src={hygraphIcon}
          alt=""
          width="50px"
          height="40px"
        />
        <Image
          src={nextjsIcon}
          alt=""
          width="40px"
          height="40px"
        />      
      </div>


    </div>
  )
}

export default Footer

import React from 'react';

import styles from './../styles/Hero.module.css'


import Image from 'next/image'


const Hero = () => {
  return (
  <div className={styles.hero}>

      <div className={styles.introCard}>
      <div>
        <h3 className={styles.schematicStyle}> &lt;html&gt; </h3>
      </div>
      <div className={styles.title}>
        <h1>A <span style={{color:'#7EDDD3'}}>personal </span> <span style={{ color:'#F44C7E'}}> blogging</span> </h1>
        <h1>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;site for all things
        </h1>
        <h1><span style={{  color: '#F44C7E' }}>&#123;</span> <span style={{ color:'#7EDDD3'}}>computer </span><span style={{color:'#F44C7E'}}>science</span> <span style={{  color: '#7EDDD3' }}>&#125;</span></h1>
      </div>

      

      <span style={{ color: 'red' }}></span>

      <h3 className={styles.schematicStyle}> &lt;/html&gt; </h3>

      <h1><br></br></h1>

      {/* <h3 className={styles.schematicStyle}> &lt;author&gt; Nathan Hu &lt;author&gt;</h3> */}
      <h3 className={styles.schematicStyle}> &lt;author&gt; </h3>
      <h3 className={styles.schematicStyle}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nathan Hu</h3>
      <h3 className={styles.schematicStyle}> &lt;/author&gt; </h3>
    </div>



  </div>
  )
}

export default Hero
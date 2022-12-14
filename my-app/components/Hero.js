import React from 'react';
import styles from './../styles/Hero.module.css'

const Hero = () => {
  
  return (
  <div className={styles.hero}>
    <div className={styles.introCard}>
      <div>
        <h3 className={styles.schematicStyle}> &lt;html&gt; </h3>
      </div>

      <div className={styles.title} data-aos="fade-up">
        <h1>A <span style={{color:'#7EDDD3'}}>personal </span> <span style={{ color:'#F44C7E'}}> blogging</span></h1>
        <h1 style={{textAlign: 'center'}}>
          site for all things
        </h1>
        <h1 style={{textAlign: 'right'}}>
        <span style={{  color: '#F44C7E' }}>&#123;</span> 
        <span style={{ color:'#7EDDD3'}}>computer </span>
        <span style={{color:'#F44C7E'}}>science</span> 
        <span style={{  color: '#7EDDD3' }}>&#125;</span></h1>
      </div>
      <span style={{ color: 'red' }}></span>
      <h3 className={styles.schematicStyle}> &lt;/html&gt; </h3>
      <h3 className={styles.schematicStyle}> &lt;about&gt; </h3>
      <h3 className={styles.about}> <span style={{  color: '#F44C7E' }}>Explore </span> 
      a breadth of topics from <span style={{ color:'#fff'}}>
      data structure algorithms,</span> <span style={{ color:'#F44C7E'}}>
      cybersecurity,</span> and <span style={{ color:'#7EDDD3'}}>
      software engineering.</span></h3>
      <h3 className={styles.schematicStyle}> &lt;/about&gt; </h3>
    </div>
  </div>
  )
}

export default Hero
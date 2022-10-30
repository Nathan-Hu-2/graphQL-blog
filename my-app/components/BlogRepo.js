import React from 'react';
import styles from './../styles/Hero.module.css'

const BlogRepo = () => {
  return (
    <div className={styles.title}>
      <h1>Start<span style={{color:'#F44C7E'}}> Reading!</span></h1>
      <h1 className={styles.break}><br></br></h1>
    </div>
  )
}

export default BlogRepo
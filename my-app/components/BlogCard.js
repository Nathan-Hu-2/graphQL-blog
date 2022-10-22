import Link from "next/link"
import styles from '../styles/BlogCard.module.css'

export default function BlogCard({
  title, 
  author, 
  coverPhoto, 
  datePublished, 
  slug
}) {
  return (
    <div className={styles.card}>
      <Link href={'/post/' + slug}>
        <div className={styles.imgContainer}>
          <img src={coverPhoto.url} alt=""></img>
        </div>
      </Link>
      <div className={styles.text}>
        <h2>{title}</h2>
        <div className={styles.details}>

        </div>
      </div>
    </div>
  )
}
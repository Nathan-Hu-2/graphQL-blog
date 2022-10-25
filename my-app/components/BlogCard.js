import Link from "next/link";
import styles from '../styles/BlogCard.module.css'

export default function BlogCard({
  title, 
  author,
  coverPhoto,
  datePublished, 
  slug,
}) {
  return (
    <div className={styles.card}>
      <Link href={'/posts/' + slug}>
        <div className={styles.imgContainer}>
          <img src={coverPhoto.url} alt=""></img>
        </div>
      </Link>
      <div className={styles.text}>
        <h2>{title}</h2>
        <div className={styles.details}>
          <div className={styles.author}>
            {console.log("author ovject", author.avatar)}
            <img src={author.avatar.url} ></img>
            <h3>{author.name}</h3>
          </div>
          <div className={styles.date}>
            <h3>{datePublished}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
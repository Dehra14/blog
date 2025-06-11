import styles from './PostCard.module.css';

export default function PostCard({ post }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.meta}>By {post.author} • {new Date(post.date).toLocaleDateString()}</p>
      <p className={styles.excerpt}>{post.content.substring(0, 100)}...</p>
      <a  href="https://www.readmore.com/" className={styles.readMore}>
        Read More →
      </a>
    </article>
  );
}
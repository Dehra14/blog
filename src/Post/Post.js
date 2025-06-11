import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';
import styles from './Post.module.css';

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPosts(id).then(setPost);
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <article className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.meta}>
        <span>By {post.author}</span>
        <span>•</span>
        <span>{new Date(post.date).toLocaleDateString()}</span>
      </div>
      <div className={styles.content}>
        {post.content.split('\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
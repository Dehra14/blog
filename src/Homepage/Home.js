import { useEffect, useState } from 'react';
import PostCard from '../Postcard/postCard'; // Fixed import name (should match file name)
import { fetchPosts } from '../services/api';
import styles from './Home.module.css';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message);
        console.error('Failed to fetch posts:', err);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) return <div className={styles.loading}>Loading posts...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Latest Posts</h1>
      <div className={styles.postsGrid}>
        
        {posts.length > 0 ? (
          posts.map(post => (
            <PostCard key={post.id} post={post} /> // Fixed component name (should be capitalized)
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
}
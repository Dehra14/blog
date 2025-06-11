import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPosts, deletePost } from "../services/api";
import styles from './admin.module.css'

export default function Admin() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className={styles.adminContainer}>
      {/* Particle Field */}
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className={styles.particle}
          style={{ animationDelay: `${i * 0.5}s` }}
        />
      ))}

      {/* Header */}
      <h1 className={styles.glitchTitle}>Admin Dashboard</h1>

      {/* Action Links */}
      <div className={styles.actions}>
        <Link to="/admin/create" className={styles.actionButton}>➕ New Post</Link>
      </div>

      {/* Posts List */}
      <div className={styles.postsList}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postItem}>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <div className={styles.postActions}>
              <Link to={`/admin/edit/${post.id}`} className={styles.actionButton}>✏️ Edit</Link>
              <button onClick={() => handleDelete(post.id)} className={styles.actionButton}>🗑️ Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
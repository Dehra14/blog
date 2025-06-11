import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPosts, createPost, updatePost } from '../services/api';
import styles from './CreateEditPost.module.css';

export default function CreateEditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: '', content: '' });
  const isEditing = !!id;

  useEffect(() => {
    if (isEditing) {
      fetchPosts(id).then(setPost);
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await updatePost(id, post);
    } else {
      await createPost(post);
    }
    navigate('/admin');
  };

  return (
    <div className={styles.container}>
      <h1>{isEditing ? 'Edit Post' : 'Create New Post'}</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          placeholder="Post title"
          className={styles.input}
          required
        />
        <textarea
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
          placeholder="Write your post content here..."
          className={styles.textarea}
          rows="10"
          required
        />
        <button type="submit" className={styles.button}>
          {isEditing ? 'Update Post' : 'Publish Post'}
        </button>
      </form>
    </div>
  );
}
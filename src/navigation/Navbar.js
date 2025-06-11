import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar({ isAdmin, setIsAdmin }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Blog Logo/Title */}
        <Link to="/" className={styles.logo}>
          My Blog
        </Link>

        {/* Navigation Links */}
        <div className={styles.links}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          
          {/* Show Admin Dashboard link only if in admin mode */}
          {isAdmin && (
            <Link to="/admin" className={styles.link}>
              Dashboard
            </Link>
          )}

          {/* Admin Toggle Button */}
          <button 
            onClick={() => setIsAdmin(!isAdmin)} 
            className={styles.adminToggle}
          >
            {isAdmin ? 'Exit Admin' : 'Admin Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}
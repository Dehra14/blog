import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import styles from './App.css'; // Changed from .css to .module.css
import ScreenshotButton from './screenShot/Screenshotbtn';
import Navbar from './navigation/Navbar';
import NotFound from './NotFound/NotFound';
import Post from './Post/Post';
import Footer from './Footer/Footer';
import Home from './Homepage/Home';
import Admin from './admin/admin';
import CreateEditPost from './CreateEditPost/CreateEditPost';

function App() {
  const [isAdmin, setIsAdmin] = useState(false); // Simple auth state

  return (
    <Router>
      <div className={styles.container}>
        <Navbar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />

          {/* Protected Admin Routes */}
          <Route 
            path="/admin" 
            element={isAdmin ? <Admin /> : <Home />} 
          />
          <Route 
            path="/admin/create" 
            element={isAdmin ? <CreateEditPost /> : <Home />} 
          />
          <Route 
            path="/admin/edit/:id" 
            element={isAdmin ? <CreateEditPost /> : <Home />} 
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer /> {/* Added missing Footer */}
        <ScreenshotButton />
      </div>
    </Router>
  );
}

export default App;
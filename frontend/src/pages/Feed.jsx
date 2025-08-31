import React, { useState, useEffect } from 'react';
import Post from '../components/Post';
import './Feed.css';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://bailanysta-backend.onrender.com/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Ошибка загрузки постов:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Загрузка...</div>;

  return (
    <div className="feed">
      <h1>Лента постов</h1>
      {posts.length === 0 ? (
        <p>Пока нет постов. Будьте первым!</p>
      ) : (
        posts.map(post => <Post key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Feed;
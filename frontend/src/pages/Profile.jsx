import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!author || !content) {
      setMessage('Заполните все поля');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ author, content }),
      });

      if (response.ok) {
        setMessage('Пост успешно создан!');
        setContent('');
      } else {
        setMessage('Ошибка при создании поста');
      }
    } catch (error) {
      setMessage('Ошибка сети');
    }
  };

  return (
    <div className="profile">
      <h1>Мой профиль</h1>
      <form onSubmit={handleSubmit} className="post-form">
        <input
          type="text"
          placeholder="Ваше имя"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="form-input"
        />
        <textarea
          placeholder="Напишите что-нибудь..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="form-textarea"
          rows="4"
        />
        <button type="submit" className="form-button">
          Опубликовать
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Profile;
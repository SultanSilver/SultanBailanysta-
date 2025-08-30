const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const port = 3001;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://sultan-bailanysta-nusg13xet-sultans-projects-f7745089.vercel.app'
  ]
}));
app.use(express.json());

// Routes
// GET /posts - получить все посты
app.get('/posts', async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Не удалось загрузить посты' });
  }
});

// POST /posts - создать новый пост
app.post('/posts', async (req, res) => {
  try {
    const { author, content } = req.body;
    const newPost = await prisma.post.create({
      data: { author, content }
    });
    res.json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Не удалось создать пост' });
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
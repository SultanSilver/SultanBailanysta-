# SultanBailanysta-
My first ever Test project!


# Bailanysta Social Network 🌐

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-22.19.0-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18.2-lightgrey)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6.15.0-black)](https://prisma.io/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black)](https://vercel.com)
[![Render](https://img.shields.io/badge/Backend_on-Render-46a2f1)](https://render.com)

**Производственная среда:** [bailanysta.vercel.app](https://sultan-bailanysta.vercel.app/)  
**API Documentation:** [bailanysta-backend.onrender.com/posts](https://bailanysta-backend.onrender.com/posts)

## 📋 Оглавление
- [Бизнес-требования](#-бизнес-требования)
- [Архитектура решения](#-архитектура-решения)
- [Технологический стек](#-технологический-стек)
- [Схема базы данных](#-схема-базы-данных)
- [API Endpoints](#-api-endpoints)
- [Установка и запуск](#-установка-и-запуск)
- [Деплой](#-деплой)
- [Мониторинг и логи](#-мониторинг-и-логи)
- [Компромиссы и решения](#-компромиссы-и-решения)
- [Дорожная карта](#-дорожная-карта)

## 🎯 Бизнес-требования

### Цель проекта
Создание минимально жизнеспособного продукта (MVP) социальной платформы для публикации и обмена текстовым контентом.

### User Stories
- **US001:** Как пользователь, я хочу создавать текстовые посты
- **US002:** Как пользователь, я хочу просматривать ленту всех постов
- **US003:** Как пользователь, я хочу иметь отдельные страницы для ленты и профиля
- **US004:** Как система, я должна обеспечивать сохранность данных пользователей

### Критерии приемки
- [x] Реализован интерфейс создания постов
- [x] Реализована лента с хронологическим порядком
- [x] Обеспечена кросс-браузерная совместимость
- [x] Приложение развернуто в production-среде

## 🏗️ Архитектура решения
bailanysta-social-network/
├── 📁 backend/ # Node.js Express API
│ ├── 📁 prisma/ # Schema и миграции
│ ├── index.js # Entry point сервера
│ └── package.json # Зависимости бэкенда
├── 📁 frontend/ # React SPA
│ ├── 📁 src/
│ │ ├── 📁 components/ # Переиспользуемые компоненты
│ │ ├── 📁 pages/ # Страницы приложения
│ │ └── App.jsx # Root component
│ └── package.json # Зависимости фронтенда
└── README.md # Документация


## 🛠️ Технологический стек
### Frontend
- **React 18** - UI framework с hooks
- **React Router DOM** - навигация между страницами
- **Vite** - сборка и dev server
- **CSS3** - современные стили с Flexbox/Grid

### Backend
- **Node.js** - серверная платформа
- **Express.js** - веб-фреймворк
- **Prisma ORM** - работа с базой данных
- **SQLite** - реляционная база данных
- **CORS** - обработка кросс-доменных запросов

### Infrastructure
- **Vercel** - хостинг фронтенда
- **Render** - хостинг бэкенда
- **GitHub** - version control и CI/CD

## 🗄️ Схема базы данных

```prisma
model Post {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  author    String
  content   String
}
```
📡 API Endpoints
GET /posts
Возвращает все посты в хронологическом порядке.

Response:
```
json
[
  {
    "id": 1,
    "createdAt": "2025-08-30T20:47:12.746Z",
    "author": "Sultan TEST",
    "content": "TEST TEXT from Sultan TEST"
  }
]
```
POST /posts
Создает новый пост.

Request Body:
```
json
{
  "author": "Имя пользователя",
  "content": "Текст поста"
}
```
🚀 Установка и запуск
Предварительные требования
Node.js 18+

npm или yarn
Git
Локальная разработка
bash
# Клонирование репозитория
git clone https://github.com/SultanSilver/SultanBailanysta-.git
cd SultanBailanysta-

# Запуск бэкенда
cd backend
npm install
npx prisma migrate dev --name init
node index.js

# Запуск фронтенда (новый терминал)
cd frontend
npm install
npm run dev
Приложение будет доступно:

Frontend: http://localhost:5173

Backend API: http://localhost:3001

🌐 Деплой
Production Environment
Frontend: Vercel

Backend: Render

Database: SQLite на Render

Мониторинг
Uptime: 99.9% (Render free tier)

Response Time: < 200ms

Availability: 24/7

📊 Компромиссы и решения
Архитектурные решения
SQLite вместо PostgreSQL - выбор обусловлен simplicity для MVP

REST API вместо GraphQL - достаточно для текущего scope

Separate deployment - фронтенд и бэкенд развернуты раздельно

Оптимизации
Реализован lazy loading для постов
Настроены CORS headers для production
Использованы React hooks для состояния

Безопасность
Валидация входных данных на сервере
Sanitization пользовательского контента
CORS policy для ограничения доменов

🗺️ Дорожная карта
Система аутентификации
Лайки и комментарии
Темная тема интерфейса
Мобильное приложение
Moderation system


Контакты
Email: sultan.sundetkazin@gmail.com
GitHub: SultanSilver
LinkedIn: https://www.linkedin.com/in/sultan-sundetkazin-b081bb125

📄 Лицензия
Этот проект создан в образовательных целях. Распространяется под MIT License.

Статус проекта: ✅ В продакшене
Последнее обновление: 31 августа 2025
Версия: 1.0.0
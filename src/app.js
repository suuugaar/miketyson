// Подключение библиотек и модулей
const express = require('express');
require('@babel/register');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const morgan = require('morgan');
require('dotenv').config();
const path = require('path');
const cors = require('cors');
// Подключение сессий
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// Подключение ручек
const indexRouter = require('./routes/indexRouter');
const apiRouter = require('./routes/apiRouter');
// Конфигурация CORS
const corsOptions = {
  origin: ['http://localhost:3432', 'https://www.google.com'],
  credentials: true,
};

// Создание сервера
const app = express();
// Подключение порта
const { PORT } = process.env;

// Конфиг для куки
const sessionConfig = {
  name: 'cookieName', // не забудь указать то же имя и при удалении куки
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Mellon', // SESSION_SECRET в .env
  resave: false, // если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 24 * 1000 * 60 * 60, // время жизни в ms, 24(h)*1000(ms)*60(sec)*60(min) = 86400000
    httpOnly: true, // секьюрность, оставляем true
  },
};

// Подключение милдварок
app.use(cors(corsOptions));
app.use(morgan('dev')); // для логирования
app.use(express.urlencoded({ extended: true })); // для чтения запросов
app.use(express.json()); // для парса JSON
app.use(express.static(path.join(process.cwd(), 'public'))); // добавление статики
app.use(session(sessionConfig)); // для работы сессий

// Включение работы ручек
app.use('/', indexRouter);
app.use('/api', apiRouter);

// Включение сервера и отображение смс о его работе
app.listen(PORT, () => {
  console.log(`Сервер успешно запущен на порту: ${PORT}`);
});

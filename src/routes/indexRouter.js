// Создание ручки
const router = require('express').Router();
// Подключение утилиты для рендера страниц
const renderTemplate = require('../utils/renderTemplate');

// Подключение страниц
const Main = require('../views/Main');
const Register = require('../views/Register');
const Login = require('../views/Login');
const Weather = require('../views/Weather');
const NewFight = require('../views/NewFight');

module.exports = router.get('/', (req, res) => {
  const { login } = req.session;
  renderTemplate(Main, { login }, res);
});

module.exports = router.get('/weather', (req, res) => {
  const { login } = req.session;
  renderTemplate(Weather, { login }, res);
});

module.exports = router.get('/newfight', (req, res) => {
  const { login } = req.session;
  renderTemplate(NewFight, { login }, res);
});

module.exports = router.get('/register', (req, res) => {
  renderTemplate(Register, {}, res);
});

module.exports = router.get('/login', (req, res) => {
  renderTemplate(Login, {}, res);
});

module.exports = router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('cookieName');
    res.redirect('/');
  });
});

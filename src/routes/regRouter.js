const regRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

regRouter.post('/', async (req, res) => {
  try {
    const { login, password } = req.body;
    const user = await User.findOne({ where: { login } });
    if (user) {
      console.log(`Ошибка: данный логин - "${login}" уже занят.`);
      res.json({ err: `Ошибка: данный логин - "${login}" уже занят.` });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({ login, password: hash });

      req.session.login = newUser.login;

      req.session.save(() => {
        res.json({ regDone: `Регистрация прошла успешна, ${login}!` });
      });
    }
  } catch (error) {
    res.send(`regRouter => ${error}`);
  }
});

module.exports = regRouter;

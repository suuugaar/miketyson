const router = require('express').Router();
const regRouter = require('./regRouter');
const logRouter = require('./logRouter');
const newFightRouter = require('./newFiightRouter');
const weatherRouter = require('./weatherRouter');

module.exports = router.use('/register', regRouter);
module.exports = router.use('/login', logRouter);
module.exports = router.use('/newfight', newFightRouter);
module.exports = router.use('/weather', weatherRouter);

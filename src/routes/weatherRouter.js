const weatherRouter = require('express').Router();

weatherRouter.get('/', async (req, res) => {
  try {
    const accessKey = '9a6560bf-600d-42fe-a99c-c9e01a2a16a1';
    const response = await fetch('https://api.weather.yandex.ru/v2/forecast?lat=55.75396&lon=37.620393&lang=ru_RU', {
      headers: {
        'X-Yandex-Weather-Key': accessKey,
      },
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error loading data');
    res.status(500).send('Error loading data');
  }
});

module.exports = weatherRouter;

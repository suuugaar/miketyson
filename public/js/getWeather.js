document.addEventListener('DOMContentLoaded', () => {
  const getDataBtn = document.querySelector('.getData');
  const weatherContainer = document.querySelector('.weather-container');

  getDataBtn.addEventListener('click', async (e) => {
    try {
      const response = await fetch('/api/weather');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Weather data:', data);

      // Отобразить данные на странице
      // const { temperature, description } = data;
      const temperature = data.fact.temp;
      const description = data.fact.condition;
      weatherContainer.innerHTML = `Температура: ${temperature}°C, Описание: ${description}`;
    } catch (error) {
      console.error('Error loading weather data:', error);
      // Отобразить сообщение об ошибке на странице
      weatherContainer.innerHTML = 'Произошла ошибка при загрузке данных о погоде';
    }
  });
});

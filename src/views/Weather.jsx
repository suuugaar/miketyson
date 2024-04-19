const React = require('react');
const Layout = require('./Layout');

function Weather({ login }) {
  return (
    <Layout login={login}>
      <div className="weather-wrapper">
        <button className="getData">Посмотреть погоду</button>

        <div className="weather-container" />
      </div>
      <script defer src="js/getWeather.js" />
    </Layout>
  );
}

module.exports = Weather;

const React = require('react');
const Layout = require('./Layout');

function NewFight({ login }) {
  return (
    <Layout login={login}>
      <div className="newfight-container">
        <div className="fightsContainer" />

        <h2 className="newfight-title">
          Добавь бой:
        </h2>

        <form className="addFightForm">
          <input type="text" name="opponent" placeholder="Имя соперника" />
          <input
            type="text"
            name="result"
            placeholder="Результат"

          />
          <input type="text" name="date" placeholder="Дата боя" />
          <button type="submit">Добавить Бой</button>
        </form>
        <h2 className="errNewFight" />

        <script defer src="/js/fights.js" />
      </div>
    </Layout>
  );
}

module.exports = NewFight;

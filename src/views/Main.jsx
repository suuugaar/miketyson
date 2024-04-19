const React = require('react');
const Layout = require('./Layout');

function Main({ login }) {
  return (
    <Layout login={login}>
      <div className="intro">
        <h2 className="main-title">
          "Когда я дерусь с кем-то, я хочу взять его волю. Я хочу взять его отвагу.
          {' '}
          <br />
          {' '}
          Я хочу вырвать его сердце и показать ему, как оно выглядит."
          <br />
          <br />
          {' '}
          © Майк Тайсон
          {' '}
        </h2>
      </div>
    </Layout>
  );
}

module.exports = Main;

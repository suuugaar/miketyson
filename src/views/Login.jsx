const React = require('react');
const Layout = require('./Layout');

function Login() {
  return (
    <Layout>
      <h2 className="form-title">Войдите в аккаунт</h2>

      <form
        className="form"
        action="/register"
        method="POST"
        id="logForm"
      >
        <label htmlFor="log-login" className="form-label">Логин:</label>

        <input className="form-input" name="login" type="text" id="log-login" />

        <label htmlFor="log-password" className="form-label">Пароль:</label>

        <input className="form-input" name="password" type="password" id="log-password" />

        <button type="submit" className="form-btn">
          Войти
        </button>
      </form>

      <h3 className="logErrMsg" />
      <script defer src="js/log.js" />
    </Layout>
  );
}

module.exports = Login;

import welcome from './assets/welcome.svg';

function App() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrapper-login">
          <form className="login-form">
            <span className="login-form-title">Bem vindo!</span>
            <span className="login-form-image">
              <img src={ welcome } alt="Vem" />
            </span>

            <div className="wrapper-inputs">
              <input type="email" />
              <span className="focus-input" data-placeholder='Email'></span>
            </div>

            <div className="wrapper-inputs">
              <input type="email" />
              <span className="focus-input" data-placeholder='Email'></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form btn">Login</button>
            </div>

            <div className="create-account">
              <span className="text">Não possui conta?</span>
              <a href="#" className="text-2">Criar conta.</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

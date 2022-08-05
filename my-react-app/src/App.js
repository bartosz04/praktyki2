import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2><p>Bartosz Książkiewicz</p></h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Witamy w aplikacji
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </header>
    </div>
  );
}

export default App;

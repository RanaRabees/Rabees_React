import logo from './2.jpg';
import './App.css';
// import './Index.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}  className="App-logo" alt="logo" />
        <p>
          Rana Muhammad <code>Rabees</code> Hussain
        </p>
        <a
          className="App-link"
          href="https://ranarabees.github.io/My_Profile/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
      </header>
    </div>
  );
}

export default App;

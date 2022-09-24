import logo from './logo.svg';
import photo from './test.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={photo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.facebook.com/WeeAhKhiang"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Me
        </a>
      </header>
    </div>
  );
}

export default App;

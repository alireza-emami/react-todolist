import logo from './logo.svg';
import './App.css';
import Newsongform from './Todolistproject/TodolistMain';
import Songlist from './Todolistproject/todolist';
import Trash from './Trash.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React todo list
        </a> */}
        
        <Songlist />
      </header>
    </div>
  );
}

export default App;

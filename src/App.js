import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente'
import React from 'react'; //no es necesario aquí, pero en versiones anteriores í, así que por si acaso trabajamos en otros proyectos anteriores a esta versión es conveniente ponerlo.

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Edit <code>src/App.js</code> and save to reload.
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <Componente msg='Hola soy un componente funcional desde una arrow function desde una prop'/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </section>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente'
import React from 'react'; //no es necesario aquí, pero en versiones anteriores í, así que por si acaso trabajamos en otros proyectos anteriores a esta versión es conveniente ponerlo.

function App() {
  let nombre='Estela'
  let auth = false
  let estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno']
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor='nombre'>Nombre</label>
        <input type='text' id='nombre'/>
        <h1>{nombre}</h1>
        <p>{auth ? 'El usuario está logueado' : 'El usuario no está logueado'}</p>
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <p>{2+1}</p>
        <ul>
          {estaciones.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente'
import Propiedades from './components/Propiedades';
import React from 'react'; //no es necesario aquí, pero en versiones anteriores í, así que por si acaso trabajamos en otros proyectos anteriores a esta versión es conveniente ponerlo.
import Estado from './components/Estado';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <section>
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
        </section>

      </header>
      <section>
        <Componente msg='Hola soy un componente funcional desde una arrow function desde una prop'/>
        <hr/>
        <Propiedades
        cadena='Esto es una cadena de texto'
        numero={19}
        booleano={true}
        arreglo={[123,5,645]}
        objeto={{nombre:'Jon',correo:'jonmircha@gmail.com'}}
        funcion={(num)=>num*num}
        elementoReact={<i>Esto es un elemento React</i>}
        elementoComponenteReact={<Componente msg='soy un componente pasado como prop'/>}
        />
<hr/>
<Estado/>
      </section>
    </div>
  );
}

export default App;

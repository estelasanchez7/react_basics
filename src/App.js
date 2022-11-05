import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente'
import Propiedades from './components/Propiedades';
import React from 'react'; //no es necesario aquí, pero en versiones anteriores í, así que por si acaso trabajamos en otros proyectos anteriores a esta versión es conveniente ponerlo.
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg='Hola soy un componente funcional desde una arrow function desde una prop' />
          <hr />
          <Propiedades
            cadena='Esto es una cadena de texto'
            numero={19}
            booleano={true}
            arreglo={[123, 5, 645]}
            objeto={{ nombre: 'Jon', correo: 'jonmircha@gmail.com' }}
            funcion={(num) => num * num}
            elementoReact={<i>Esto es un elemento React</i>}
            elementoComponenteReact={<Componente msg='soy un componente pasado como prop' />}
          />
          <hr />
          <Estado />
          <hr/>
          <RenderizadoCondicional/>
          <hr/>
          <RenderizadoElementos/>
          <hr/>
          <EventosES6/>
          <hr/>
          <EventosES7/>
          <hr/>
          <MasSobreEventos/>
        </section>
      </header>
    </div>
  );
}

export default App;

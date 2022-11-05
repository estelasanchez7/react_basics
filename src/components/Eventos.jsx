import React, { Component } from "react";

//ES6
export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    console.log("Restando");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

//ES7 -> Properties Initializer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  //Arrow functions    (heredan el this de la clase a la que pertenecen)
  sumar = (e) => {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = (e) => {
    console.log("Restando");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

/* function Boton(props) {
  return <button onClick={props.myOnClick}>Botón hecho componente</button>;
 } */

 /* function boton simplificada con JS:*/
/* const Boton = (props) => <button onClick={props.myOnClick}>Botón hecho componente</button> */

/* function boton más simplificada con JS:*/
const Boton = ({myOnClick}) => <button onClick={myOnClick}>Botón hecho componente</button>

export class MasSobreEventos extends Component {
  //esto es un evento (actua como manejador de eventos=> handleClick)
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(mensaje);
  };

  render() {
    return (
      <div>
        <h2>Más sobre eventos</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, "Hola, pasando parametro desde un evento")
          }
        >
          Saludar
        </button>

        {/* Evento Personalizado */}
        {/* <Boton
          onClick={(e) =>
            this.handleClick(e, "Hola, pasando parametro desde un evento")
          }
        /> */}
        <Boton
          myOnClick={(e) =>
            this.handleClick(
              e,
              "Hola, pasando parametro desde un evento personalizado"
            )
          }
        />
      </div>
    );
  }
}

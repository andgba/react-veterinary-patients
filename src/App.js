import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from "./components/Header";
import NuevaCita from "./components/NuevaCita";
import ListaCitas from "./components/ListaCitas";

class App extends Component {
  state = {
      citas : []
  };

    /**
     * Recibe una nueva cita y la guarda en el state de citas
     *
     * @param datos
     */
  crearCita = datos => {
    const citas = [...this.state.citas, datos];
    this.setState({
        citas
    })
  };

  render() {
    return (
        <div className="container">
          <Header
            titulo = "Administrador de Pacientes"
          />
          <div className="row">
            <div className="col-md-10 mx-auto">
              <NuevaCita
                crearCita={this.crearCita}
              />
            </div>

            <div className="mt-5 col-md-10 mx-auto">
                <ListaCitas
                    citas={this.state.citas}
                />
            </div>
          </div>
        </div>
    );
  }
}

export default App;

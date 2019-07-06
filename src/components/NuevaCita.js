import React, { Component } from 'react';
import uuid from 'uuid';

class NuevaCita extends Component {
    state = {
        cita : {
            mascota : '',
            propietario : '',
            fecha : '',
            hora : '',
            sintomas : ''
        },
        error : false
    };

    /**
     * Rellenamos el state cuando el usuario escribe
     *
     * @param e
     */
    handleChange = e => {
        console.log(e.target.name + ': ' + e.target.value);

        this.setState({
            cita : {
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        })
    };

    /**
     * Pasar datos al state de App, si está correcto, al hacer submit
     *
     * @param e
     */
    handleSubmit = e => {
        e.preventDefault();

        const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;

        if( mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '' ) {
            this.setState({
                error : true
            });

            return;
        }
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();
        this.props.crearCita(nuevaCita);
    };

    render() {
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Crear nueva cita</h2>

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre de la mascota"
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre del dueño de la mascota"
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    className="form-control"
                                    name="sintomas"
                                    placeholder="Describe los sintomas de tu mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.sintomas}/>
                            </div>
                        </div>

                        <input
                            type="submit"
                            className="py-3 mt-2 btn btn-success btn-block"
                            value="Insertar nueva cita"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default NuevaCita;
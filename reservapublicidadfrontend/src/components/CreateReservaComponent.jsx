import React, { Component } from 'react';
import ReservaPublicidadService from '../services/ReservaPublicidadService';
import { useNavigate } from 'react-router-dom'

class CreateReservaComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            cliente: '',
            agencia: '',
            ejecutivo: '',
            tipoaviso: '',
            mediopublicidad: '',
            publicacion: '',
            edicion: '',
            seccion: '',
            subseccion: '',
            ubicacion: '',
            tarifas: '',
            medidas: '',
            color: '',
            fechareserva: '',
            titulo: '',
            observacion: ''
        }
        this.changeClienteHandler = this.changeClienteHandler.bind(this);
        this.changeAgenciaHandler = this.changeAgenciaHandler.bind(this);
        this.changeEjecutivoHandler = this.changeEjecutivoHandler.bind(this);
        this.changeTipoAvisoHandler = this.changeTipoAvisoHandler.bind(this);
        this.changeMedioPublicidadHandler = this.changeMedioPublicidadHandler.bind(this);
        this.changePublicacionHandler = this.changePublicacionHandler.bind(this);
        this.changeEdicionHandler = this.changeEdicionHandler.bind(this);
        this.changeUbicacionHandler = this.changeUbicacionHandler.bind(this);
        this.changeTarifasHandler = this.changeTarifasHandler.bind(this);
        this.saveReserva = this.saveReserva.bind(this);
    }
    
    saveReserva = (e) => {
        e.preventDefault();
        let reserva = {
            cliente: this.state.cliente,
            fechareserva: this.state.fechareserva,
            agencia: this.state.agencia,
            ejecutivo: this.state.ejecutivo,
            tipoaviso: this.state.tipoaviso,
            mediopublicidad: this.state.mediopublicidad,
            publicacion: this.state.publicacion,
            edicion: this.state.edicion,
            ubicacion: this.state.ubicacion,
            tarifas: this.state.tarifas
        }
        
        console.log('Reservas: ' + JSON.stringify(reserva));
        ReservaPublicidadService.createReservaPublicidad(reserva).then(res => {
            window.location.assign("http://localhost:3000/reservas");
        });
    }

    changeClienteHandler = (event) => {
        this.setState({ cliente: event.target.value });
    }

    changeFechaReservaHandler = (event) => {
        this.setState({ fechareserva: event.target.value });
    }

    changeAgenciaHandler = (event) => {
        this.setState({ agencia: event.target.value });
    }

    changeEjecutivoHandler = (event) => {
        this.setState({ ejecutivo: event.target.value });
    }

    changeTipoAvisoHandler = (event) => {
        this.setState({ tipoaviso: event.target.value });
    }

    changeMedioPublicidadHandler = (event) => {
        this.setState({ mediopublicidad: event.target.value });
    }

    changePublicacionHandler = (event) => {
        this.setState({ publicacion: event.target.value });
    }

    changeEdicionHandler = (event) => {
        this.setState({ edicion: event.target.value });
    }

    changeUbicacionHandler = (event) => {
        this.setState({ ubicacion: event.target.value });
    }

    changeTarifasHandler = (event) => {
        this.setState({ tarifas: event.target.value });
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header text-center">
                        <h1>Registro de Reserva de Publicidad</h1>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className='form-row'>
                                <div className='form-group col-md-6'>
                                    <label>Cliente: </label>
                                    <input placeholder="Cliente" name="cliente" className='form-control' value={this.state.cliente} onChange={(event) => this.changeClienteHandler(event)} />
                                </div>
                                <div className='form-group col-md-6'>
                                    <label>Fecha de Reserva: </label>
                                    <input placeholder="Fecha Reserva" name="fechareserva" className='form-control' value={this.state.fechareserva} onChange={(event) => this.changeFechaReservaHandler(event)} />
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='form-group col-md-6'>
                                    <label>Agencia: </label>
                                    <input placeholder="Agencia" name="agencia" className='form-control' value={this.state.agencia} onChange={(event) => this.changeAgenciaHandler(event)} />
                                </div>
                                <div className='form-group col-md-6'>
                                    <label>Ejecutivo: </label>
                                    <input placeholder="Ejecutivo" name="ejecutivo" className='form-control' value={this.state.ejecutivo} onChange={(event) => this.changeEjecutivoHandler(event)} />
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='form-group col-md-6'>
                                    <label>Tipo de aviso: </label>
                                    <input placeholder="Tipo de aviso" name="tipoaviso" className='form-control' value={this.state.tipoaviso} onChange={(event) => this.changeTipoAvisoHandler(event)} />
                                </div>
                                <div className='form-group col-md-6'>
                                    <label>Medio de publicidad: </label>
                                    <input placeholder="Medio de publicidad" name="mediopublicidad" className='form-control' value={this.state.mediopublicidad} onChange={(event) => this.changeMedioPublicidadHandler(event)} />
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='form-group col-md-6'>
                                    <label>Publicacion: </label>
                                    <input placeholder="Publicacion" name="publicacion" className='form-control' value={this.state.publicacion} onChange={(event) => this.changePublicacionHandler(event)} />
                                </div>
                                <div className='form-group col-md-6'>
                                    <label>Edicion: </label>
                                    <input placeholder="Edicion" name="edicion" className='form-control' value={this.state.edicion} onChange={(event) => this.changeEdicionHandler(event)} />
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='form-group col-md-6'>
                                    <label>Ubicación: </label>
                                    <input placeholder="Ubicación" name="ubicacion" className='form-control' value={this.state.ubicacion} onChange={(event) => this.changeUbicacionHandler(event)} />
                                </div>
                                <div className='form-group col-md-6'>
                                    <label>Tarifas: </label>
                                    <input placeholder="Tarifas" name="tarifas" className='form-control' value={this.state.tarifas} onChange={(event) => this.changeTarifasHandler(event)} />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer text-muted text-center">
                        <div className='row'>
                            <div className='col-md-6'>
                            <button type="button" className='btn btn-success btn-lg btn-block' onClick={this.saveReserva}>Guardar</button>
                            </div>
                            <div className='col-md-6'>
                            <button type="button" className="btn btn-danger btn-lg btn-block" onClick={() => window.location.reload()}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default CreateReservaComponent;
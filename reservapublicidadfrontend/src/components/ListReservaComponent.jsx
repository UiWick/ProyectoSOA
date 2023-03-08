import React, { Component } from 'react';
import ReservaPublicidadService from '../services/ReservaPublicidadService';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

class ListReservaComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ReservaPublicidad: []
        }
    }
    componentDidMount() {
        ReservaPublicidadService.getReservaPublicidad().then((res) => {
            this.setState({ ReservaPublicidad: res.data });
        });
    }


    render() {
        return (
            <div>
                <h2 className='text-center'>Lista de reservas de publicidad El Comercio</h2>
                <div className='row'>
                    <Link to="/add-reserva">
                        <button type="button" className="btn btn-primary">Agregar</button>
                    </Link>
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Cliente</th>
                                <th>Agencia</th>
                                <th>Ejecutivo</th>
                                <th>Tipo de Aviso</th>
                                <th>Medio de publicidad</th>
                                <th>Publicacion</th>
                                <th>Fecha de Reserva</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.ReservaPublicidad.map(
                                    ReservaPublicidad =>
                                        <tr key={ReservaPublicidad.id}>
                                            <td>{ReservaPublicidad.id}</td>
                                            <td>{ReservaPublicidad.cliente}</td>
                                            <td>{ReservaPublicidad.agencia}</td>
                                            <td>{ReservaPublicidad.ejecutivo}</td>
                                            <td>{ReservaPublicidad.tipoaviso}</td>
                                            <td>{ReservaPublicidad.mediopublicidad}</td>
                                            <td>{ReservaPublicidad.publicacion}</td>
                                            <td>{ReservaPublicidad.fechareserva}</td>
                                            <td>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <button onClick={() => this.editReserva(ReservaPublicidad.id)} className="btn btn-info">Actualizar</button>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <button onClick={() => this.deleteReserva(ReservaPublicidad.id)} className="btn btn-danger">Eliminar</button>
                                                    </div>  
                                                </div>


                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListReservaComponent;
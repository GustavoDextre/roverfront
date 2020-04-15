import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/navegacion.css';

export default class Navegacion extends Component {
    render() {
        return (<div className="bgblack sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark py-2 px-4">
                    <Link className="navbar-brand  font-weight-bold" to="/">PUMII PERÚ</Link>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item font-weight-bold">
                                <Link to="/login" className="nav-link">LOGIN</Link>
                            </li>
                            <li className="nav-item font-weight-bold">
                                <Link to="/registrar" className="nav-link">REGISTRATE</Link>
                            </li>
                            <li className="nav-item font-weight-bold">
                                <Link to="/contacto" className="nav-link">CONTÁCTANOS</Link>
                            </li>
                            <li className="nav-item font-weight-bold">
                                <Link to="/streaming" className="nav-link">STREAMING</Link>
                            </li>
                        </ul>
                    </div>
            </nav></div>
        )
    }
}
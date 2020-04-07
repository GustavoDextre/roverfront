import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navegacion extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 px-4">
                    <Link className="navbar-brand" to="/roverfront">PUMII UNI</Link>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/registrar" className="nav-link">Registrate</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contacto" className="nav-link">Contáctanos</Link>
                            </li>
                        </ul>
                    </div>
            </nav>
        )
    }
}
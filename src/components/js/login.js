import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CabezaDos from './cabeza2';
import Navegacion from './navegacion';
import '../css/login.css';

export default class Login extends Component {

  onSubmit = e => {
    e.preventDefault();
  }

  render() {
    return <div>
      <CabezaDos/>
      <Navegacion/>
    <div className="fondo">
      <section className="container-fluid bgfuture">
        <section className="row justify-content-center">
          <section className="col-10 col-sm-8 col-md-6">
            <form className="form-container col-md-12 mb-5" onSubmit={this.onSubmit}>
              <div className="text-center font-weight-bold textfone rockwell"><h3>Ingresar al sistema</h3></div>
              <div className="form-group nexa">
                <label htmlFor="exampleInputCodigo1">Nombre de usuario</label>
                <input type="text" name="username" className="form-control" id="usuario" placeholder="Usuario" />
              </div>
                <div className="form-group nexa">
                  <label htmlFor="contra">Contraseña</label>
                  <input type="password" name="password" className="form-control" id="contra" placeholder="Contraseña" />
              </div>
                  <button type="submit" className="btn-block btn fondoprincipal text-white nexa">Ingresar</button>
                  <div className="text-center rockwell mt-3">
                    <h6>¿Aún no tienes cuenta?<br /><Link className="textfone" to="/registrar">Haz click aquí</Link></h6>
                  </div>
            </form>
      </section>
    </section>
    </section>
    </div>
    </div>
  }
}

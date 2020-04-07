import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/login.css';

export default class Login extends Component {
  render() {
    return <div className="fondo py-5">
      <section className="container-fluid bgfuture">
        <section className="row justify-content-center">
          <section className="col-10 col-sm-8 col-md-6">
            <form className="form-container col-11 col-md-12 mb-5" action="streaming" method="POST">
              <div className="text-center font-weight-bold textfone"><h3>Ingresar al sistema</h3></div>
              <div className="form-group">
                <label htmlFor="exampleInputCodigo1">Código de Usuario</label>
                <input type="text" name="username" className="form-control" id="usuario" placeholder="usuario" />
              </div>
                <div className="form-group">
                  <label htmlFor="contra">Contraseña</label>
                  <input type="password" name="password" className="form-control" id="contra" placeholder="Contraseña" />
              </div>
                  <button type="submit" className="btn-block btn fondoprincipal text-white">Ingresar</button>
                  <div className="text-center lead mt-3">
                    <h6>¿Aún no tienes cuenta?<br /><Link className="textfone" to="/registrar">Haz click aquí</Link></h6>
                  </div>
            </form>
      </section>
    </section>
    </section>
    </div>
  }
}

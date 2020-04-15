import React, { Component } from 'react';
import '../css/login.css';

export default class Registro extends Component {

  onSubmit = e => {
    e.preventDefault();
}

    render() {
        return (
            <div className="fondoregistro pt-5">
          <section className="container-fluid bgfuture">
            <section className="row justify-content-center">
              <section className="col-10 col-sm-10 col-md-8">
                <form className="form-container col-md-12 mb-5" id="form-registro" onSubmit={this.onSubmit}>
                  <div className="text-center font-weight-bold textfone mb-4">
                    <h3>Bienvenido al registro del sistema</h3>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="apellido">Apellidos Completos</label>
                      <input type="text" className="form-control" id="apellido" placeholder="Escriba Apellidos" />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="nombre">Nombres Completos</label>
                      <input type="text" className="form-control" id="nombre" placeholder="Escriba Nombres" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="exampleInputCodigo1">Nombre de usuario:</label>
                      <input type="text" name="username" className="form-control" id="usuario" placeholder="usuario" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputPassword4">Contraseña</label>
                      <input type="password" className="form-control" id="inputPassword4" placeholder="Contraseña" />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="password">Confirmar Contraseña</label>
                      <input type="password" className="form-control" id="password" placeholder="Contraseña" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="cel">Celular</label>
                      <input type="text" className="form-control" id="cel" placeholder="Escribir celular" />
                    </div>
                  </div>
                  
                  <input type="hidden" id="accion" value="registrar" />
                  <button type="submit" className="btn-block btn fondoprincipal text-white">Registrarse</button>
                </form>
              </section>
            </section>
          </section>

          </div>
    )
  }
}
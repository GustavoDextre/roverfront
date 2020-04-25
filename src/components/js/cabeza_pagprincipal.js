import React, { Component } from 'react';
import '../css/pagina_principal.css';

import logoPummii from '../../images/PUMII.png';

export default class CabezaPrincipal extends Component {

    stylePhotoPumii() {
        return {
          height: '200px',
          width: '200px'
        }
      }

    render() {
        return (
        <div className="container-fluid fotoCabeza rellenouno">
            <div className="row">

                <div className="col-md-6">
                  <p className="h1 text-white nexa">PUMII PERÚ</p>
                  <div className="h5 text-white nexa">Perú, un modelo de investigación<br/>e ingeniería</div>
                </div>

                <div className="col-md-3">
                    
                </div>

                <div className="col-md-3 ml-auto rellenodos">
                    <div>
                        <img src={logoPummii} style={this.stylePhotoPumii()} alt="Foto PUMII UNI" />
                    </div>
                </div>

            </div>
        </div>
    )
  }
}
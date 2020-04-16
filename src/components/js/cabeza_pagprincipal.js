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
        <div className="container-fluid fotoCabeza">
            <div className="row colordegradado">

                <div className="col-md-6 rellenouno">
                  <p className="h1 text-white rockwell">PUMII PERÚ</p>
                  <div className="h5 text-white rockwell">Perú, un modelo de investigación<br/>e ingeniería</div>
                </div>

                <div className="col-md-2">
                    
                </div>

                <div className="col-md-3 rellenodos">
                    <div>
                        <img src={logoPummii} style={this.stylePhotoPumii()} alt="Foto PUMII UNI" />
                    </div>
                </div>

            </div>
        </div>
    )
  }
}
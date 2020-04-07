import React, { Component } from 'react';
import '../css/panel_video.css';

import PUMII from '../../images/PUMII.png';
import UNI from '../../images/UNI.png';

export default class PanelVideo extends Component {
    render() {
        return (
            <div className="fondo">
                <section className="container-fluid">
                <section className="row py-5">
                <section className="col-lg-3 text-center">
                    <div className="fotoPanel">
                        <img className="cuadro2" src={PUMII} alt="Imagen PUMII UNI"/>
                    </div>
                </section>
            
                <section className="col-md-12 col-lg-6 text-center">
                    <div className="my-3 text-center" name="_reloj">
                    <h6 className="text-white py-1 bgfuture bg-dark">
                    Número de personas conectadas :<div id="conexiones"></div>
                    </h6>
                    <iframe id="cuadro" src="stream.html" frameBorder="0" title="Transmition..."></iframe>
                    <h6 className="text-white py-2 bgfuture bg-dark">
                    Tiempo de streaming :
                    <span id="minutos">0</span>:<span id="segundos">0</span>
                    </h6><br/>
                    <h6 className="text-white py-2 bg-dark">
                    Fecha y hora :
                    <div id="clockdate">
                        <div className="clockdate-wrapper">
                        <div id="clock"></div>
                        <div id="date"></div>
                        </div>
                    </div>
                    </h6>
                    </div>
                    
                </section>
            
                <section className="col-lg-3 text-center">
                    
                    <div className="fotoPanel">
                        <img className="cuadro2" src={UNI} alt="Imagen Logo UNI"/>
                    </div>
                </section>

            </section>
            </section>
            </div>
        )
    }
}

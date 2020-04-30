import React, { Component } from 'react';
import CabezaDos from './cabeza2';
import Navegacion from './navegacion';
import io  from 'socket.io-client';
import '../css/panel_video.css';

import PUMII from '../../images/PUMII.png';
import UNI from '../../images/UNI.png';

export default class PanelVideo extends Component {

    state = {
        date: new Date(),
        conexiones: 0
    };

    componentDidMount() { 
        this.timer = setInterval(() => {
            this.setState({ date: new Date()});
        }, 1000);

        this.socket = io('/streaming')
        
    }

    componentWillUnmount (){
        clearInterval(this.timer)
    }

    months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    hora = this.state.date.getHours() % 12? this.state.date.getHours() % 12:"12";
    notation = this.state.date.getHours() >= 12? "PM":"AM";

    render() {
        return (<div>
            <CabezaDos/>
            <Navegacion/>
            <div className="fondoSolar">
            <section className="container-fluid">
                <section className="row py-5">

                    <section className="col-lg-3 text-center pb-5">
                        <div className="fotoPanel">
                            <img className="cuadroPumiiUni" src={PUMII} alt="Imagen PUMII UNI"/>
                        </div>
                    </section>
            
                    <section className="col-md-12 col-lg-6 text-center nexa pb-3">
                        <div className="text-center" name="_reloj">
                        <h6 className="text-white py-1 bgfuture">
                        Número de personas conectadas : <div id="Contador"></div>
                        </h6>

                        <iframe id="cuadro" allowFullScreen="yes" scrolling="no" allowvr="yes" allow="gyroscope;accelerometer;xr-spatial-tracking;" src="/video" title="Transmition..."></iframe>

                        <h6 className="text-white py-2 bgfuture">
                            Tiempo de streaming : 
                        </h6>

                        <h6 className="text-white py-2">
                        Fecha: { this.days[this.state.date.getDay()] + ', ' 
                                + ('0' + this.state.date.getDate()).slice(-2) + ' de ' 
                                + this.months[this.state.date.getMonth()] + ' del ' 
                                + this.state.date.getFullYear()} 

                            <br/>

                        Hora: {('0' +this.hora).slice(-2)+':'
                                +('0' + this.state.date.getMinutes()).slice(-2)+':'
                                +('0' +this.state.date.getSeconds()).slice(-2) + ' '
                                +this.notation}
                            
                            
                        </h6>

                        </div>
                        
                    </section>
            
                    <section className="col-lg-3 text-center">
                        
                        <div className="fotoPanel">
                            <img className="cuadroLogoUni" src={UNI} alt="Imagen Logo UNI"/>
                        </div>
                    </section>

                </section>
            </section>
            </div></div>
        )
    }
}

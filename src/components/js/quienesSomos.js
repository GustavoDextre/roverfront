import React, { Component } from 'react';
import CabezaDos from './cabeza2';
import Navegacion from './navegacion';
import '../css/quienesSomos.css';

import f1 from '../../images/imagesSlide/foto1.jpg';
import f2 from '../../images/imagesSlide/foto2.jpg';
import f3 from '../../images/imagesSlide/foto3.jpg';
import f4 from '../../images/imagesSlide/foto4.jpg';
import f5 from '../../images/imagesSlide/foto5.jpg';
import f6 from '../../images/imagesSlide/foto6.jpg';
import f7 from '../../images/imagesSlide/foto7.jpg';
import f8 from '../../images/imagesSlide/foto8.jpg';
import f9 from '../../images/imagesSlide/foto9.jpg';
import f10 from '../../images/imagesSlide/foto10.jpg';
import f11 from '../../images/imagesSlide/foto11.jpg';
import f12 from '../../images/imagesSlide/foto12.jpg';
import f13 from '../../images/imagesSlide/foto13.jpg';
import f14 from '../../images/imagesSlide/foto14.jpg';
import f15 from '../../images/imagesSlide/foto15.jpg';
import f16 from '../../images/imagesSlide/foto16.jpg';
import f17 from '../../images/imagesSlide/foto17.jpg';
import f18 from '../../images/imagesSlide/foto18.jpg';
import f19 from '../../images/imagesSlide/foto19.jpg';
import f20 from '../../images/imagesSlide/foto20.jpg';
import f21 from '../../images/imagesSlide/foto21.jpg';
import f22 from '../../images/imagesSlide/foto22.jpg';
import f23 from '../../images/imagesSlide/foto23.jpg';
import f24 from '../../images/imagesSlide/foto24.jpg';

export default class QuienesSomos extends Component {

    stylePhoto(){
        return{
        width: '100%'
        }
    }
    

  render() {
    return <div className="bg-white child">
      <CabezaDos/>
      <Navegacion/>
      <div className="row"> 
            <div className="column">
                <img src={f1} style={this.stylePhoto()} alt="foto" />
                <img src={f2} style={this.stylePhoto()} alt="foto"/>
                <img src={f3} style={this.stylePhoto()} alt="foto"/>
                <img src={f4} style={this.stylePhoto()} alt="foto"/>
                <img src={f5} style={this.stylePhoto()} alt="foto"/>
                <img src={f6} style={this.stylePhoto()} alt="foto"/>
            </div>
            <div className="column">
                <img src={f7} style={this.stylePhoto()} alt="foto"/>
                <img src={f8} style={this.stylePhoto()} alt="foto"/>
                <img src={f9} style={this.stylePhoto()} alt="foto"/>
                <img src={f10} style={this.stylePhoto()} alt="foto"/>
                <img src={f11} style={this.stylePhoto()} alt="foto"/>
                <img src={f12} style={this.stylePhoto()} alt="foto"/>
            </div>  
            <div className="column">
                <img src={f13} style={this.stylePhoto()} alt="foto"/>
                <img src={f14} style={this.stylePhoto()} alt="foto"/>
                <img src={f15} style={this.stylePhoto()} alt="foto"/>
                <img src={f16} style={this.stylePhoto()} alt="foto"/>
                <img src={f17} style={this.stylePhoto()} alt="foto"/>
                <img src={f18} style={this.stylePhoto()} alt="foto"/>
            </div>
            <div className="column">
                <img src={f19} style={this.stylePhoto()} alt="foto"/>
                <img src={f20} style={this.stylePhoto()} alt="foto"/>
                <img src={f21} style={this.stylePhoto()} alt="foto"/>
                <img src={f22} style={this.stylePhoto()} alt="foto"/>
                <img src={f23} style={this.stylePhoto()} alt="foto"/>
                <img src={f24} style={this.stylePhoto()} alt="foto"/>
            </div>
        </div>
    </div>
  }
}

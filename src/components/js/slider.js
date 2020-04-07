import React, { useState } from 'react';
import ImagesSlider from './imagesSlider';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/slider.css';

//fotos
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

function Slider() {

    const [x,setX] = useState(0);
    const goLeft = () => {
        x === 0 ? setX(-100 * (pasador.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (pasador.length - 1) ? setX(0) : setX(x - 100);
    };

    let pasador = [
    <ImagesSlider src={f1}/>,
    <ImagesSlider src={f2}/>,
    <ImagesSlider src={f3}/>,
    <ImagesSlider src={f4}/>,
    <ImagesSlider src={f5}/>,
    <ImagesSlider src={f6}/>,
    <ImagesSlider src={f7}/>,
    <ImagesSlider src={f8}/>,
    <ImagesSlider src={f9}/>,
    <ImagesSlider src={f10}/>];

    return (
        <div className="slider">
            {pasador.map((item, index) => {
                return (
                    <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                        {item}
                    </div>
                )
            })}
            <button id="goLeft" onClick={goLeft}>
                <i className="fas fa-chevron-left"></i>
            </button>
            <button id="goRight" onClick={goRight}><i className="fas fa-chevron-right"></i></button>
        </div>
    )
}

export default Slider;
import React, { Component } from 'react';
import '../css/login.css';
import 'font-awesome/css/font-awesome.min.css';

export default class Footer extends Component {

    styleFooter(){
        return {
            marginBottom: '0'
        }
    }

    render() {
        return (
            <div className="jumbotron text-center" style={this.styleFooter()}>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                    <div className="h3"><em>ENCUENTRANOS EN</em></div>

                        <div className="h3">
                            <a className="text-decoration-none px-2" href="https://instagram.com/pumiiperu?fbclid=IwAR2_IdoO_HwYQnc16OLlTbyB7tjUgxmsd7VzlORs7kpmKTt-43gZzBJm-iU"  rel="noopener"><i className="fa fa-instagram text-asme" aria-hidden="true"></i> </a>
                            <a className="text-decoration-none px-2" href="https://www.facebook.com/PUMII-PERU-101383817924692/?ref=page_internal"><i className="fa fa-facebook text-asme" aria-hidden="true"></i> </a>
                            <a className="text-decoration-none px-2" href="https://pe.linkedin.com/in/pumii-peru-6615131a4"><i className="fa fa-linkedin text-asme" aria-hidden="true"></i> </a>
                            <a className="text-decoration-none px-2" href="https://www.youtube.com/channel/UCUSZaNY3yFJiNMLPIY0yGTQ?view_as=subscriber" ><i className="fa fa-youtube text-asme" aria-hidden="true" rel="noopener"></i> </a>
                        </div>

                        <div className="h3">
                            <a className="text-decoration-none px-2 text-asme" href="https://instagram.com/pumiiperu?fbclid=IwAR2_IdoO_HwYQnc16OLlTbyB7tjUgxmsd7VzlORs7kpmKTt-43gZzBJm-iU"  rel="noopener">@PumiiPeru</a></div>
                    </div>
                </div>
            </div>
        )
    }
}
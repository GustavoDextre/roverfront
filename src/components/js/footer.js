import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';

export default class Footer extends Component {

    styleFooter(){
        return {
            marginBottom: '0'
        }
    }

    render() {
        return (
            <div className="jumbotron text-center" style={this.styleFooter()}>
                <h1>NUESTROS AUSPICIADORES</h1>
            </div>
        )
    }
}
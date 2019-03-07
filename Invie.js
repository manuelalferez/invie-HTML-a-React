import React, { Component } from 'react';
import logo from './logo.svg';
import './css/invie.css';
import Portada from './components/Portada';
import Guitarras from './components/Guitarras';
import Footer from './components/Footer';

class Invie extends Component {
  render() {
    return (
      <div className="Invie">
       <Portada/>
       <Guitarras/>
       <Footer/>
      </div>
    );
  }
}

export default Invie;

import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/Header.css';

import logo from '../assets/images/logo.svg';
import camera from '../assets/images/camera.svg';

export default function Header() {
    return (
       <header id="main-header">
           <div className="header-content">
               <Link to="/feed">
               <img src={logo} alt="InstaHeader" />
               </Link>
               <Link to="/new">
               <img src={camera} alt="Enviar Publicação" />
               </Link>
           </div>
       </header>
    );
}
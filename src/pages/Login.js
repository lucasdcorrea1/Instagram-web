import React, { Component } from 'react';
import Imputs from '../components/Imputs'

import '../assets/css/Login.css';

class login extends Component {
  state = {
      login:[]
  };

  
  render() {
    return(
        <section>

        <Imputs/>
        </section>
    
    );
};

}

export default login;
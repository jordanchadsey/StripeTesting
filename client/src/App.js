import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Checkout from './Checkout';
class App extends Component {
  render() {
    return (
      <div className="App">

          <Checkout
                    name={'Wieners'}
                    description={'Lots of wieners.'}
                    amount={1000}

                  />
      </div>
    );
  }
}

export default App;

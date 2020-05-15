import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import Beers from './component/Beers';

class  App extends Component {
  render() {
    console.log(this.props.name)
    return (
      <div className="App">
        <Beers />
      </div>
    );
  } 
  
}

export default connect(state => state.app)(App);

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends Component {
  render() {
    return (
      <h1>{element} {secondElement}</h1>
    );
  }
}
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const secondElement = (
  <h2 className="greetingTwo">
  We are champions !
  </h2>
);


export default Hello;

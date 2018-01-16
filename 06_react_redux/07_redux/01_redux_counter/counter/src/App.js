import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Counter</h1>
        </header>
        <div>
          <button onClick={this.props.decrement}> - </button>
            <span>{this.props.counter}</span>
          <button onClick={this.props.increment}> + </button>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { counter: state.counter }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({type: "add"}),
    decrement: () => dispatch({type: "sub"})
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;

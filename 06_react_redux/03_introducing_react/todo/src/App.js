import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class List extends Component {
  render() {
    return (
    <div>
      <div className="container-fluid text-center">
        <h1> TODO LIST </h1>
        <form>
          <div className="form-group mx-sm-3 mb-2">
            <input type="text" className="form-control"/>
          </div>
          <button type="submit" className="btn btn-primary mb-2" id="inputTask">Create task</button>
        </form>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Task</th>
            <th scope="col">State</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Faire le ménage</td>
          <td>progress</td>
          <td>Delete</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Boire un coup</td>
          <td>progress</td>
          <td>Ok</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Se coucher</td>
          <td>Delete</td>
          <td>Delete</td>
        </tr>
      </tbody>
      </table>
    </div>
    )
  }
}

export default List;

import React, { Component } from 'react';
import './App.css';


class App extends Component {

  componentDidMount() {
       const nbUsersElem = document.getElementById("nbUsers");
       const ws = new WebSocket("ws://localhost:4000");
       ws.onmessage = (event) => {
         console.log("Message: " + event.data);
        nbUsersElem.innerHTML = event.data;
       };
       window.addEventListener("beforeunload", () => ws.send("CLOSE"));
     }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to SLACKY</h1>
          <p>There is <span id="nbUsers">0</span> users connected.</p>
        </header>
      </div>
      );
    }
}

  export default App;

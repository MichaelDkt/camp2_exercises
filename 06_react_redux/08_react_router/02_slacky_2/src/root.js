import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Channel = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Channel 1</Link></li>
        <li><Link to="/channel2">Channel 2</Link></li>
        <li><Link to="/channel3">Channel 3</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/channel2" component={Channel2}/>
      <Route path="/channel3" component={Channel3}/>

    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Channel 1</h2>
  </div>
)

const Channel2 = () => (
  <div>
    <h2>Channel 2</h2>
  </div>
)

const Channel3 = () => (
  <div>
    <h2>Channel 3</h2>
  </div>
)

export default Channel

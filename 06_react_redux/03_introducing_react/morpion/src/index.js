import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square (props) {
    return (
    <button className="square"
      onClick= {props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)} />
    );
  }

  render() {
    return (
      <div>
        <h1 class="text-center">TIC TAC TOE</h1>
        <table class="table table-bordered text-center">
        <thead>
          <tr class="table-primary">
            <th scope="col"></th>
            <th scope="col">A</th>
            <th scope="col">B</th>
            <th scope="col">C</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="table-primary" scope="row">1</th>
              <td>{this.renderSquare(0)}</td>
              <td>{this.renderSquare(1)}</td>
              <td>{this.renderSquare(2)}</td>
          </tr>
          <tr>
            <th class="table-primary" scope="row">2</th>
              <td>{this.renderSquare(3)}</td>
              <td>{this.renderSquare(4)}</td>
              <td>{this.renderSquare(5)}</td>
          </tr>
          <tr>
            <th class="table-primary" scope="row">3</th>
              <td>{this.renderSquare(6)}</td>
              <td>{this.renderSquare(7)}</td>
              <td>{this.renderSquare(8)}</td>
          </tr>
        </tbody>
        </table>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber : 0,
      xIsNext : true
    };
  }
  handleClick(i) {
    const history = this.state.history.slice(0,this.state.stepNumber +1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step,move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
    });

    let status;
    if(winner) {
      status = 'Winner : ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
          squares={current.squares}
          onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div><h2 class="text-center">{status}</h2></div>
          <p class="text-center">{moves}</p>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

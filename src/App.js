import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Hour extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hour_x2: 0,
      hour_y2: 0,
      min_x2: 0,
      min_y2: 0,
      sec_x2: 0,
      sec_y2: 0
    }
  }
  render() {

    return (
      <div>
        <svg height="500" width="500">
          <circle cx="50%" cy="50%" r="40%" stroke="black" strokeWidth="10" fill="none" />
          <text x="50%" y="20%" textAnchor="middle" fill="black" fontSize="2em" fontFamily="Arial" dy=".3em">12</text>
          <text x="65%" y="25%" textAnchor="middle" fill="black" fontSize="2em" fontFamily="Arial" dy=".3em">1</text>
          <text x="75%" y="35%" textAnchor="middle" fill="black" fontSize="2em" fontFamily="Arial" dy=".3em">2</text>
          <text x="80%" y="50%" textAnchor="middle" fill="black" fontSize="2em" fontFamily="Arial" dy=".3em">3</text>
          <text x="75%" y="65%" textAnchor="middle" fill="black" fontSize="2em" fontFamily="Arial" dy=".3em">4</text>
          <text x="65%" y="75%" textAnchor="middle" fill="black" fontSize="2em" fontFamily="Arial" dy=".3em">5</text>
          <text x="50%" y="80%" textAnchor="middle" fill="black" fontSize="2em" fontFamily="Arial" dy=".3em">6</text>
          <text x="35%" y="75%" textAnchor="middle" fill="black" fontSize="2em" fontFamily="Arial" dy=".3em">7</text>
          <text x="25%" y="65%" textAnchor="middle" fill="black" fontSize="2em" fontFamily="Arial" dy=".3em">8</text>
          <text x="20%" y="50%" textAnchor="middle" fill="black" fontSize="2em" fontFamily="Arial" dy=".3em">9</text>
          <text x="25%" y="35%" textAnchor="middle" fill="black" fontSize="2em" fontFamily="Arial" dy=".3em">10</text>
          <text x="35%" y="25%" textAnchor="middle" fill="black" fontSize="2em" fontFamily="Arial" dy=".3em">11</text>

          <circle cx="50%" cy="50%" r="1%" stroke="black" strokeWidth="1" />

          <line x1="50%" y1="50%" x2={this.state.hour_x2} y2={this.state.hour_y2} stroke="black" strokeWidth="4" />
          <line x1="50%" y1="50%" x2={this.state.min_x2} y2={this.state.min_y2} stroke="black" strokeWidth="4" />
          <line x1="50%" y1="50%" x2={this.state.sec_x2} y2={this.state.sec_y2} stroke="black" strokeWidth="4" />
        </svg>

        <Hour />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    // console.log(this.props.date);
    return (
      // <Clock />
      <h1>{this.props.date}</h1>
    );
  }
}

export default App;

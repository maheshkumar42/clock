import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Clock extends React.Component {
  render() {
    return (
      <svg height="500" width="500">
        <circle cx="50%" cy="50%" r="40%" stroke="black" stroke-width="3" fill="none" />
        <text x="50%" y="20%" text-anchor="middle" fill="black" font-size="2em" font-family="Arial" dy=".3em">12</text>
        <text x="65%" y="25%" text-anchor="middle" fill="black" font-size="2em" font-family="Arial" dy=".3em">1</text>
        <text x="75%" y="35%" text-anchor="middle" fill="black" font-size="2em" font-family="Arial" dy=".3em">2</text>
        <text x="80%" y="50%" text-anchor="middle" fill="black" font-size="2em" font-family="Arial" dy=".3em">3</text>
        <text x="75%" y="65%" text-anchor="middle" fill="black" font-size="2em" font-family="Arial" dy=".3em">4</text>
        <text x="65%" y="75%" text-anchor="middle" fill="black" font-size="2em" font-family="Arial" dy=".3em">5</text>        
        <text x="50%" y="80%" text-anchor="middle" fill="black" font-size="2em" font-family="Arial" dy=".3em">6</text>
        <text x="35%" y="75%" text-anchor="middle" fill="black" font-size="2em" font-family="Arial" dy=".3em">7</text>        
        <text x="25%" y="65%" text-anchor="middle" fill="black" font-size="2em" font-family="Arial" dy=".3em">8</text>
        <text x="20%" y="50%" text-anchor="middle" fill="black" font-size="2em" font-family="Arial" dy=".3em">9</text>
        <text x="25%" y="35%" text-anchor="middle" fill="black" font-size="2em" font-family="Arial" dy=".3em">10</text>
        <text x="35%" y="25%" text-anchor="middle" fill="black" font-size="2em" font-family="Arial" dy=".3em">11</text>

        <circle cx="50%" cy="50%" r="1%" stroke="black" strokeWidth="1" />

        <line x1="50%" y1="50%" x2="70%" y2="70%" stroke="black" strokeWidth="4" />
        <line x1="50%" y1="50%" x2="60%" y2="70%" stroke="black" strokeWidth="4" />
        <line x1="50%" y1="50%" x2="50%" y2="30%" stroke="black" strokeWidth="4" />
        
      </svg>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Clock />
    );
  }
}

export default App;

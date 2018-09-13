import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

class WallClock extends React.Component {
  render() {
    const secLength = 130;
    const minLength = 110;
    const hourLength = 70;
    const time = this.props.time.split(":");

    const min = time[1];
    const hour = time[0] * 5 + min / 12;
    const sec = time[2].split(" ")[0];
    const secDegrees = sec * 6 * Math.PI / 180;
    const minDegrees = min * 6 * Math.PI / 180;
    const hourDegrees = hour * 6 * Math.PI / 180;
    var sec_x2 = 250 + Math.sin(secDegrees) * secLength;
    var sec_y2 = 250 - Math.cos(secDegrees) * secLength;

    var min_x2 = 250 + Math.sin(minDegrees) * minLength;
    var min_y2 = 250 - Math.cos(minDegrees) * minLength;

    var hour_x2 = 250 + Math.sin(hourDegrees) * hourLength;
    var hour_y2 = 250 - Math.cos(hourDegrees) * hourLength;
    console.log(hour + ", " + min + ", " + sec + ", " + secDegrees + ", " + Math.sin(secDegrees) + ", " + Math.cos(secDegrees));
    // console.log(sec+", "+Math.sin(secDegrees));
    return (
      <div>
        <svg height="500" width="500">
          <circle cx="50%" cy="50%" r="44%" stroke="black" strokeWidth="5" fill="none" />
          <circle cx="50%" cy="50%" r="40%" stroke="black" strokeWidth="10" fill="#F5F5F5" />

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

          <line x1="250" y1="250" x2={hour_x2} y2={hour_y2} stroke="black" strokeWidth="6" marker-end="url(#arrowhead)" />
          <line x1="250" y1="250" x2={min_x2} y2={min_y2} stroke="black" strokeWidth="4" marker-end="url(#arrowhead)"/>
          <line x1="250" y1="250" x2={sec_x2} y2={sec_y2} stroke="black" strokeWidth="2" marker-end="url(#arrowhead)"/>

          <defs>
            <marker id="arrowhead" markerWidth="5" markerHeight="3.5"
              refX="0" refY="1.75" orient="auto">
              <polygon points="0 0, 5 1.75, 0 3.5" />
            </marker>
          </defs>
          {/* <line x1="0" y1="50" x2="250" y2="50" stroke="#000" stroke-width="8" marker-end="url(#arrowhead)" /> */}
        </svg>
      </div>
    );
  }
}

function Clock(props) {
  return (
    <WallClock
      time={props.date.toLocaleTimeString()}
    />
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);


import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

class WallClock extends React.Component {
    render() {
        const time = this.props.time.split(":");
        const hour = time[0];
        const min = time[1];
        const sec = time[2].split(" ")[0];
        const secDegrees = sec/10 ;
        var x2= 250+Math.sin(secDegrees) * 100;
        var y2= 250-Math.cos(secDegrees) * 100;
        console.log(hour+", "+min+", "+sec+", "+x2+", "+y2+", "+secDegrees+", "+Math.sin(secDegrees)+", "+Math.cos(secDegrees));
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
  
            {/* <line x1="50%" y1="50%" x2={this.state.hour_x2} y2={this.state.hour_y2} stroke="black" strokeWidth="4" />
            <line x1="50%" y1="50%" x2={this.state.min_x2} y2={this.state.min_y2} stroke="black" strokeWidth="4" />
            <line x1="50%" y1="50%" x2={this.state.sec_x2} y2={this.state.sec_y2} stroke="black" strokeWidth="4" /> */}

            {/* <line x1="50%" y1="50%" x2={this.state.hour_x2} y2={this.state.hour_y2} stroke="black" strokeWidth="4" /> */}
            {/* <line x1="50%" y1="50%" x2={this.state.min_x2} y2={this.state.min_y2} stroke="black" strokeWidth="4" /> */}
            <line x1="250" y1="250" x2={x2} y2={y2} stroke="black" strokeWidth="4" />
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
    //   <div>
        // <h1>Hello, world!</h1>
        // <h2>It is .</h2>
    //   </div>
    );
  }
  
  function tick() {
    ReactDOM.render(
      <Clock date={new Date()} />,
      document.getElementById('root')
    );
  }
  
  setInterval(tick, 1000);


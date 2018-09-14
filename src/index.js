import React from 'react';
import ReactDOM from 'react-dom';

function createHtml(size) {
  let markup = ``;
  for (let i = 0; i < 60; i += 6) {
    const degree = i * 6 * Math.PI / 180;
    const h_x1 = size / 2 + Math.sin(degree) * 0.4 * size;
    const h_y1 = size / 2 - Math.cos(degree) * 0.4 * size;
    const h_x2 = size / 2 + Math.sin(degree) * 0.49 * size;
    const h_y2 = size / 2 - Math.cos(degree) * 0.49 * size;
    markup += `<line x1="` + h_x1 + `" y1="` + h_y1 + `" x2="` + h_x2 + `" y2="` + h_y2 + `" stroke="black" strokeWidth="25" />`;
  }
  return markup;
}

function WallClock(props) {
  // render() {
    const size = 600;
    const secLength = (130 * size) / 500;
    const minLength = (110 * size) / 500;
    const hourLength = (70 * size) / 500;
    const time = props.time.split(":");

    const min = time[1];
    const hour = time[0] * 5 + min / 12;
    const sec = time[2].split(" ")[0];
    const secDegrees = sec * 6 * Math.PI / 180;
    const minDegrees = min * 6 * Math.PI / 180;
    const hourDegrees = hour * 6 * Math.PI / 180;
    const sec_x2 = size / 2 + Math.sin(secDegrees) * secLength;
    const sec_y2 = size / 2 - Math.cos(secDegrees) * secLength;

    const min_x2 = size / 2 + Math.sin(minDegrees) * minLength;
    const min_y2 = size / 2 - Math.cos(minDegrees) * minLength;

    const hour_x2 = size / 2 + Math.sin(hourDegrees) * hourLength;
    const hour_y2 = size / 2 - Math.cos(hourDegrees) * hourLength;
    // console.log(hour + ", " + min + ", " + sec + ", " + secDegrees + ", " + Math.sin(secDegrees) + ", " + Math.cos(secDegrees));
    // console.log(sec+", "+Math.sin(secDegrees));

    const html = createHtml(size);
    console.log(html);

    const barWidth = 5;

    return (
      <div>
        {/* createHtml(size)} */}
        <svg height={size} width={size}>
          {/* <line x1={h_x1} y1={h_y1} x2={h_x2} y2={h_y2} stroke="black" strokeWidth="25" /> */}
          {/* <div id="bars"></div> */}
          {/* {temp()} */}
          <circle cx="50%" cy="50%" r="49%" stroke="black" strokeWidth="10" fill="none" />
          <circle cx="50%" cy="50%" r="47%" stroke="black" strokeWidth="2" fill="none" />
          <circle cx="50%" cy="50%" r="45%" stroke="black" strokeWidth="2" fill="none" />
          <circle cx="50%" cy="50%" r="43%" stroke="black" strokeWidth="2" fill="none" />
          <circle cx="50%" cy="50%" r="41%" stroke="black" strokeWidth="2" fill="none" />
          <circle cx="50%" cy="50%" r="40%" stroke="black" strokeWidth="10" fill="#F5F5F5" />
          {/* <line x1="300" y1="60" x2="300" y2="6" stroke="black" strokeWidth="25" /> */}

          <line x1="300" y1="60" x2="300" y2="6" stroke="black" strokeWidth={barWidth} />
          <line x1="441.06846055019355" y1="105.8359213500126" x2="472.8088641739871" y2="62.149003653765476" stroke="black" strokeWidth={barWidth} />
          <line x1="528.2535639108369" y1="225.8359213500126" x2="579.6106157907751" y2="209.14900365376545" stroke="black" strokeWidth={barWidth} />
          <line x1="528.2535639108369" y1="374.16407864998735" x2="579.6106157907752" y2="390.8509963462345" stroke="black" strokeWidth={barWidth} />
          <line x1="441.06846055019355" y1="494.16407864998735" x2="472.8088641739871" y2="537.8509963462345" stroke="black" strokeWidth={barWidth} />
          <line x1="300.00000000000006" y1="540" x2="300.00000000000006" y2="594" stroke="black" strokeWidth={barWidth} />
          <line x1="158.93153944980645" y1="494.1640786499874" x2="127.19113582601292" y2="537.8509963462345" stroke="black" strokeWidth={barWidth} />
          <line x1="71.74643608916315" y1="374.1640786499874" x2="20.389384209224886" y2="390.8509963462346" stroke="black" strokeWidth={barWidth} />
          <line x1="71.74643608916313" y1="225.83592135001265" x2="20.38938420922483" y2="209.14900365376553" stroke="black" strokeWidth={barWidth} />
          <line x1="158.9315394498064" y1="105.83592135001263" x2="127.19113582601281" y2="62.149003653765504" stroke="black" strokeWidth={barWidth} />

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

          <line x1={size / 2} y1={size / 2} x2={hour_x2} y2={hour_y2} stroke="black" strokeWidth="6" markerEnd="url(#arrowhead)" />
          <line x1={size / 2} y1={size / 2} x2={min_x2} y2={min_y2} stroke="black" strokeWidth="4" markerEnd="url(#arrowhead)" />
          <line x1={size / 2} y1={size / 2} x2={sec_x2} y2={sec_y2} stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)" />

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
  // }
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


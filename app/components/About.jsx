var React = require('react');

var About = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This app was created using React.  The weather is sourced
      from the openweathermap API.  For more information see the links below:</p>
      <ul className="no-bullet">
        <li>
          <a href="https://reactjs.org/">React's official site.</a>
        </li>
        <li>
          <a href="https://openweathermap.org/">Open Weather Map</a>
        </li>
      </ul>
    </div>
  )
};

module.exports = About;

import React from 'react';
import ReactDOM from 'react-dom';

function Clock(props){ 
  return(
    <div>
      <h1>Hello, World!</h1>
      <h2> It is: {props.date.toLocaleTimeString()}.
      </h2>
    </div>
  );
  
}

class App extends React.Component {	
  render() {
    return (
     <Clock date={new Date()}/>
    )
  }
}
function tick(){
  ReactDOM.render(<App />, document.getElementById('root'));
}

setInterval(tick, 1000);

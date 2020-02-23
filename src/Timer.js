import React from 'react';
import Countdown from 'react-countdown-now';
import { Link } from 'react-router-dom';

// Random component
const OnComplete = () => <span>Finished</span>;
 
// Renderer callback with condition
const renderer = ({seconds,milliseconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <OnComplete/>;
  } else {
    // Render a countdown
    return <span>{seconds}:{milliseconds}</span>;
  }
};


const Timer=(props)=> {
  return (
    <Countdown
    date={Date.now() + 10000}
    renderer={renderer(props.redirect)}
    intervalDelay={0}
    precision={3}
  />
  );
}
export default Timer;
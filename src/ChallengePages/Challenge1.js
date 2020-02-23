import Sound from 'react-sound';
import React from 'react';
import Countdown from 'react-countdown-now';
import { Link } from 'react-router-dom';
import Davidphoto from '../Media/Davidphoto.jpg';

export const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return  <Link to='/Challenge2'>Continue you piece of garbage</Link>;
  } else {
    // Render a countdown
    return props => <div style={{color:'red'}}>{props.total}</div>;
  }
};

export default class Challenge1 extends React.Component 
{
state={value:''}


changeHandler = event => {
 
   if(
        event.target.value.toLowerCase().includes('dav')){
            this.setState({value:this.state.value+'balls in the face'})}
    else if(
        event.target.value.toLowerCase().includes('rub')){
            this.setState({value:this.state.value+'balls everywhere'})}

            else if(
                event.target.value.toLowerCase().includes('e')){
                    this.setState({value:this.state.value+' Fart Fart'})}
    else{
    this.setState({
      value: this.state.value+event.target.value
    });}
  }


render(){
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };
  const Completionist = () => <Link to="/Challenge2" style={{fontSize:'2rem'}}>Continue you legend!</Link>;

    return(
<div style={{ margin: 'auto',
  width: '50%',
  marginTop:'10rem',
  border: '3px solid grey',
  borderRadius:'10px',
  padding: '10px',
  backgroundColor:'yellow'
  }} 
  >
<Sound
      url='https://vgmdownloads.com/soundtracks/the-legend-of-zelda-ocarina-of-time/jubpsghseu/05%20Hyrule.mp3'
      playStatus={Sound.status.PLAYING}
      playFromPosition={100 /* in milliseconds */}
    />

    <h1>Challenge 1. Just enter your name. Easy. Actually Maybe just don't</h1>
   
   
       
        
        <input style={{fontSize:'3rem',color:'white'}}
        onChange={this.changeHandler} 
          type="text"
        />

        <h1>Answer: {this.state.value}</h1>
        <Countdown date={Date.now() + 16000}   intervalDelay={0}
    precision={3}
    renderer={
     renderer
    }
    >
     
    </Countdown>

</div>
);
}
}

// SWAP THIS WITH A GROUP ACTIVITY.
// Plot progression...
// Doing ok, 


import Sound from 'react-sound';
import React from 'react';
import Countdown from 'react-countdown-now';
// import { Link } from 'react-router-dom';
import MonstersInc from '../Media/MonstersInc.mp3';
import Ros from '../Media/Ros.jpg';
import ScaryChoice from './ScaryChoice';

export default class Challenge4 extends React.Component 
{
state={value:false}


changeHandler = event => {
if (event.target.value.length>=5 && event.target.value.toLowerCase()==="input"){
    this.setState({value:true});

}
  }
  

render(){
  const renderer = ({ hours, minutes, seconds, completed }) => {
 
    
    if(completed){return <Fail/>;}
    else {
      // Render a countdown
      return <span  style={{color:'white'}}>{hours}:{minutes}:{seconds}</span>;
    }
  };

  const Fail = () => <ScaryChoice badImage="" goodImage="" sentence=""  destination="/Challenge5"/>;

  
    return(
<div style={{backgroundColor:'black', height:'100vh', width:'100vw', position:'absolute',top:0}}>
<div style={{ margin: 'auto',
  width: '50%',
  marginTop:'4rem',
  border: '3px solid grey',
  borderRadius:'10px',
  padding: '10px',
  backgroundColor:'blue'
  }} 
  >

       <img src={Ros} alt=""/>
    <h3 style={{color:'white'}}>She has the same name as Davids mum ^</h3>

{this.state.value===false &&
<Sound
      url={MonstersInc}
      playStatus={Sound.status.PLAYING}
      playFromPosition={100 /* in milliseconds */}
    />
}


    <h1 style={{color:'white'}}>Challenge 4. Stay Calm. </h1>
    <h2   style={{color:'white'}}>Hint: Save me I am scared</h2>


        <Countdown date={Date.now() + 30000}   intervalDelay={0}
    precision={3}
    renderer={
     renderer
    }
    >
     
    </Countdown>
    

    {this.state.value===true && <Sound
      url='https://vgmdownloads.com/soundtracks/super-mario-bros/rqpfoktl/04%20-%20Area%20Clear.mp3'
      playStatus={Sound.status.PLAYING}
      playFromPosition={100 /* in milliseconds */}
    />}
</div>
</div>
);
}
}



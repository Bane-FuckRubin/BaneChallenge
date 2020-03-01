import Sound from 'react-sound';
import React from 'react';
import Countdown from 'react-countdown-now';
import { Link } from 'react-router-dom';
import MonstersInc from '../Media/MonstersInc.mp3';



export default class Challenge5 extends React.Component 
{
state={value:false,lost:false}


changeHandler = event => {
if (this.state.lost===false){
    this.setState({value:true});
}
  }
  

render(){
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (this.state.value===true) {
          // Render a completed state
          return <Completionist />;
        } 
        
        else if(completed){
           
            return <Fail/>;}
        else {
          // Render a countdown
          return <span>{hours}:{minutes}:{seconds}</span>;
        }
      };
const Completionist = () => <Link to="/Challenge6" style={{fontSize:'2rem'}}>Continue you beast.</Link>;
const Fail = () => <Link to="/Challenge6" style={{fontSize:'2rem'}}>Continue. But you don't deserve to.</Link>;


    return(
        
<div style={{ margin: 'auto',
  width: '50%',
  marginTop:'4rem',
  border: '3px solid grey',
  borderRadius:'10px',
  padding: '10px',
  backgroundColor:'blue'
  }} 
  >

{this.state.value===false &&
<Sound
      url={MonstersInc}
      playStatus={Sound.status.PLAYING}
      playFromPosition={100 /* in milliseconds */}
    />
}


    <h1 style={{color:'black'}}>Challenge 5. Blindfold obstacle course </h1>
    <h2   style={{color:'black'}}>Complete all the below challenges blindfolded then click the button.</h2>
    <button style={{backgroundColor:'red',color:'white',minWidth:'2rem',minHeight:'2rem'}}onClick={this.changeHandler}><h1>Click me when you're done.</h1></button>
<h1></h1>
        <Countdown date={Date.now() + 10000}   intervalDelay={0}
    precision={3}
    renderer={
     renderer
    }
    >
     
    </Countdown>
    

    {this.state.value==true && <Sound
      url='https://vgmdownloads.com/soundtracks/super-mario-bros/rqpfoktl/04%20-%20Area%20Clear.mp3'
      playStatus={Sound.status.PLAYING}
      playFromPosition={100 /* in milliseconds */}
    />}
</div>
);
}
}
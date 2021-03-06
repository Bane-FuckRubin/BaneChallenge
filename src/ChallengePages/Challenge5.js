import Sound from 'react-sound';
import React from 'react';
import Countdown from 'react-countdown-now';
import { Link } from 'react-router-dom';
import MonstersInc from '../Media/MonstersInc.mp3';
import ScaryChoice from './ScaryChoice';
import AreaClear from '../Media/AreaClear.mp3';



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
          return <div style={{textAlign:'center'}}><span style={{fontSize:'7rem',color:'red',}}>{minutes}:{seconds}</span></div>;
        }
      };
const Completionist = () => <Link to="/Challenge6" style={{fontSize:'2rem'}}>Continue you beast.</Link>;
const Fail = () => <ScaryChoice badImage="" goodImage="" sentence="" destination="/Challenge6"/>;


    return(
<div style={{backgroundColor:'black', height:'100vh', width:'100vw', position:'absolute',top:0}}>
<div style={{ margin: 'auto',
  width: '50%',
  marginTop:'4rem',
  border: '3px solid grey',
  borderRadius:'10px',
  padding: '10px',
  backgroundColor:'blue',
  
  }} 
  >
 
{this.state.value===false &&
<Sound
      url={MonstersInc}
      playStatus={Sound.status.PLAYING}
      playFromPosition={100 /* in milliseconds */}
    />
}


    <h1 style={{color:'black'}}>Challenge 5. Find the URL to continue </h1>
    <h2   style={{color:'black'}}>Look this up on Stack Overflow. Something about a groom. Maybe write David.</h2>
<h1> </h1>

    
<Countdown date={Date.now() + 10000}   intervalDelay={0}
    precision={3}
    renderer={
     renderer
    }
    >
     
    </Countdown>
    {this.state.value===true && <Sound
      url={AreaClear}
      playStatus={Sound.status.PLAYING}
      playFromPosition={100 /* in milliseconds */}
    />}
</div>
</div>
);
}
}
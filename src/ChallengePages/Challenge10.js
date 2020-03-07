import Sound from 'react-sound';
import React from 'react';
import Countdown from 'react-countdown-now';
import { Link } from 'react-router-dom';
import MonstersInc from '../Media/MonstersInc.mp3';
import ScaryChoice from './ScaryChoice';



export default class Challenge5 extends React.Component 
{
state={value:false,lost:false, clicked:0}


changeHandler = event => {
if (this.state.lost===false){
    this.setState({value:true});
}
  }

handleClick = (event) => {
    let update = this.state.clicked+1;
    this.setState({clicked:update})
}
handleright = (event) => {
    let update = this.state.clicked-1;
    this.setState({clicked:update})
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
const Fail = () => <ScaryChoice badImage="" goodImage="" sentence="" destination="/Challenge6"/>;

document.addEventListener('contextmenu', this.handleright);
document.addEventListener('click', this.handleClick);

if (this.state.clicked===0) {
    return <div style={{backgroundColor:'black', height:'100vh', width:'100vw', position:'absolute',top:0}}>
    <div style={{ margin: 'auto',
      width: '50%',
      marginTop:'4rem',
      padding: '10px',
      backgroundColor:'black'
      }} 
      >
    <h1 style={{color:'#00FF00', textAlign:"center"}}>Welcome to the glorious game</h1>
    </div></div>
}

if (this.state.clicked===1) {
    return <div style={{backgroundColor:'black', height:'100vh', width:'100vw', position:'absolute',top:0}}>
    <div style={{ margin: 'auto',
      width: '50%',
      marginTop:'4rem',
      backgroundColor:'black'
      }} 
      >
    <h1 style={{color:'#00FF00', textAlign:"center"}}>Bush</h1>
    </div></div>
}

if (this.state.clicked===2) {
    return <div style={{backgroundColor:'black', height:'100vh', width:'100vw', position:'absolute',top:0}}>
    <div style={{ margin: 'auto',
      width: '50%',
      marginTop:'4rem',
      backgroundColor:'black'
      }} 
      >
    <h1 style={{color:'#00FF00', textAlign:"center"}}>Bush OR</h1>
    </div></div>
}

if (this.state.clicked===3) {
    return <div style={{backgroundColor:'black', height:'100vh', width:'100vw', position:'absolute',top:0}}>
    <div style={{ margin: 'auto',
      width: '50%',
      marginTop:'4rem',
      backgroundColor:'black'
      }} 
      >
    <h1 style={{color:'#00FF00', textAlign:"center"}}>Bush OR No Bush!!</h1>
    </div></div>
}


return <div>why the fuck are you not working</div>

}
}
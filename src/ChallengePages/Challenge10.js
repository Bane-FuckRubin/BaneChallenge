import Sound from 'react-sound';
import React from 'react';
import { Link } from 'react-router-dom';
import Bush from '../Media/Bush.jpg';
import NoBush from '../Media/NoBush.jpg';
import ScaryChoice from './ScaryChoice';
import one_a from '../Media/BNB/one-a.jpg';
import one_b from '../Media/BNB/one-b.jpg';
import two_a from '../Media/BNB/two-a.jpg';
import two_b from '../Media/BNB/two-b.jpg';
import ts_a from '../Media/BNB/TS_Crop.jpg';
import ts_b from '../Media/BNB/TS.jpg';
import group from '../Media/BNB/Group.jpg';



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
    <h1 style={{color:'#00FF00', textAlign:"center"}}>WELCOME</h1>
    </div></div>
}

if (this.state.clicked===1) {
    return <div style={{backgroundColor:'black', height:'100vh', width:'100vw', position:'absolute',top:0}}>
    <div style={{ margin: 'auto',
      width: '50%',
      marginTop:'4rem',
      padding: '10px',
      backgroundColor:'black'
      }} 
      >
    <h1 style={{color:'#00FF00', textAlign:"center"}}>WELCOME</h1>
    <h1 style={{color:'#00FF00', textAlign:"center"}}>To The Glorious Game</h1>

    </div></div>
}

if (this.state.clicked===2) {
    return <div style={{backgroundColor:'black', height:'100vh', width:'100vw', position:'absolute',top:0}}>
    <div style={{ margin: 'auto',
      width: '50%',
      marginTop:'4rem',
      backgroundColor:'black',
      textAlign:"center"
      }} 
      >
    <h1 style={{color:'#00FF00'}}>Bush</h1>
    <img src={Bush} alt=""/>
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
    <h1 style={{color:'#00FF00', textAlign:"center"}}>Bush</h1>
    <h1 style={{color:'#00FF00', textAlign:"center"}}>OR</h1>
    </div></div>
}

if (this.state.clicked===4) {
    return <div style={{backgroundColor:'black', height:'100vh', width:'100vw', position:'absolute',top:0}}>
    <div style={{ margin: 'auto',
      width: '50%',
      marginTop:'4rem',
      backgroundColor:'black',
      textAlign:"center"
      }} 
      >
    <h1 style={{color:'#00FF00'}}>Bush</h1>
    <h1 style={{color:'#00FF00', textAlign:"center"}}>OR</h1>
    <h1 style={{color:'#00FF00', textAlign:"center"}}>No Bush</h1>
    <h1 style={{color:'#00FF00', textAlign:"center"}}>!!!!!!!!</h1>
    <div style={{height:'10vh'}}>
        <img src={NoBush} style={{height:'40vh'}} alt=""/>
    </div>
        </div></div>
}

if (this.state.clicked===5) {
    return <div style={{backgroundColor:'black', height:'100vh', width:'100vw', position:'absolute',top:0}}>
    <div style={{ margin: 'auto',
      width: '50%',
      marginTop:'4rem',
      backgroundColor:'black',
      textAlign:"center"
      }} 
      >
    <h1 style={{color:'#00FF00', textAlign:"center"}}>Bush or No Bush?</h1>
    <img src={one_a} style={{height:'80vh'}} alt=""/>
    </div></div>
}

if (this.state.clicked===6) {
    return <div style={{backgroundColor:'black', height:'100vh', width:'100vw', position:'absolute',top:0}}>
    <div style={{ margin: 'auto',
      width: '50%',
      marginTop:'4rem',
      backgroundColor:'black',
      textAlign:"center"
      }} 
      >
    <h1 style={{color:'#00FF00', textAlign:"center"}}>Bush!</h1>
    <img src={one_b} style={{height:'80vh'}} alt=""/>
    </div></div>
}

if (this.state.clicked===7) {
    return <div style={{backgroundColor:'black', height:'100vh', width:'100vw', position:'absolute',top:0}}>
    <div style={{ margin: 'auto',
      width: '50%',
      marginTop:'4rem',
      backgroundColor:'black',
      textAlign:"center"
      }} 
      >
    <h1 style={{color:'#00FF00', textAlign:"center"}}>Bush or No Bush?</h1>
    <img src={two_a} style={{height:'80vh'}} alt=""/>
    </div></div>
}

if (this.state.clicked===8) {
    return <div style={{backgroundColor:'black', height:'100vh', width:'100vw', position:'absolute',top:0}}>
    <div style={{ margin: 'auto',
      width: '50%',
      marginTop:'4rem',
      backgroundColor:'black',
      textAlign:"center"
      }} 
      >
    <h1 style={{color:'#00FF00', textAlign:"center"}}>No Bush!</h1>
    <img src={two_b} style={{height:'80vh'}} alt=""/>
    </div></div>
}


if (this.state.clicked===9) {
    return <div style={{backgroundColor:'black', height:'100vh', width:'100vw', position:'absolute',top:0}}>
    <div style={{ margin: 'auto',
      width: '50%',
      marginTop:'4rem',
      backgroundColor:'black',
      textAlign:"center"
      }} 
      >
    <h1 style={{color:'#00FF00', textAlign:"center"}}>Bush or No Bush?</h1>
    <img src={ts_a} style={{height:'80vh'}} alt=""/>
    </div></div>
}

if (this.state.clicked===10) {
    return <div style={{backgroundColor:'black', height:'100vh', width:'100vw', position:'absolute',top:0}}>
    <div style={{ margin: 'auto',
      width: '50%',
      marginTop:'4rem',
      backgroundColor:'black',
      textAlign:"center"
      }} 
      >
    <h1 style={{color:'#00FF00', textAlign:"center"}}>Ha, Gaaaay!</h1>
    <img src={ts_b} style={{height:'80vh'}} alt=""/>
    </div></div>
}

if (this.state.clicked>=11) {
    return <div style={{backgroundColor:'black', height:'100vh', width:'100vw', position:'absolute',top:0}}>
    <div style={{ margin: 'auto',
      width: '50%',
      marginTop:'2rem',
      backgroundColor:'black',
      textAlign:"center"
      }} 
      >
    <h1 style={{color:'#00FF00', textAlign:"center"}}>Gidi didn't approve of this game :(</h1>
    <h1 style={{color:'#00FF00', textAlign:"center"}}>Go on then, my next challenge is at /TitsAreTheGreatest</h1>
    <h1 style={{color:'#00FF00', textAlign:"center"}}>Here's some for the road</h1>
    <img src={group} style={{height:'65vh'}} alt=""/>
    </div></div>
}

return <div>why the fuck are you not working</div>

}
}
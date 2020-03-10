import Sound from 'react-sound';
import React from 'react';
import Countdown from 'react-countdown-now';
import { Link } from 'react-router-dom';
import MarioKart from '../Media/MarioKart.jpg';
import ScaryChoice from './ScaryChoice';
import RainbowRoad from '../Media/RainbowRoad.mp3';
import AreaClear from '../Media/AreaClear.mp3';
import lose from '../Media/lose.gif';
import bowser from '../Media/bowser.gif';

export default class Challenge2 extends React.Component 
{
state={value:false}


changeHandler = event => {
if (event.target.value.length>=5 && event.target.value.toLowerCase()==="input"){
    this.setState({value:true});

}
  }
  

render(){
       setTimeout(() =>{
              document.getElementById('div1').style.visibility = "visible";
              },250);  
                setTimeout(() =>{
                  document.getElementById('div4').style.visibility = "visible";
                  },1000); 
              
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (this.state.value===true) {
      // Render a completed state
      return <Completionist />;
    } 
    
    else if(completed){return <Fail/>;}
    else {
      // Render a countdown
      return <div id="davi" style={{textAlign:'center'}}><span style={{fontSize:'7rem',color:'red',}}>{minutes}:{seconds}</span></div>;
    }
  };
  const Completionist = () => 
  <div style={{color:'#00FF00', fontSize:'25px'}}>
<div>PS C:\Users\Bane:~ cd Desktop\Porn\Rule34</div>
    <div>PS C:\Users\Bane\Desktop\Porn\Rule34:~ Invoke-item BowserPeach.gif</div>
    <img src={bowser} alt=""></img>
    <Link to="/TheGreatestGame" style={{fontSize:'2rem'}}>Continue</Link>

  </div>

  const Fail=()=> <div style={{color:'#00FF00', fontSize:'25px'}}><img src={lose} alt="" style={{height:'400px'}}/> <Completionist /></div>

  
    return(
<div id="dav" style={{backgroundColor:'black', height:'100vh', width:'100vw', position:'absolute',top:0}}>
<div style={{ margin: 'auto',
  width: '60%',
  marginTop:'4rem',
  border: '1px solid grey',
  borderRadius:'10px',
  padding: '10px',
  }} 
  >
           
{this.state.value===false &&
<Sound
      url={RainbowRoad}
      playStatus={Sound.status.PLAYING}
      playFromPosition={100 /* in milliseconds */}
    />
}
    <div style={{color:'#00FF00', fontSize:'25px'}}>
    PS C:\Users\Bane:~ I know you enjoyed that, you sick fuck.
    <div id="div1" style={{visibility:'hidden'}}>PS C:\Users\Bane:~ You claim to be a frontend dev, so let's see if you can find the key to continue.</div>
    <div id="div4" style={{visibility:'hidden'}}>
       <input style={{fontSize:'25px',color:'black'}}
       
       onChange={this.changeHandler} 
       type="text"
       className="david"
       //   The code is 'input'
       />
    </div>
  </div>

<h1 className="im an invisible piece of garbage"> </h1>
        <Countdown date={Date.now() + 30000}   intervalDelay={0}
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